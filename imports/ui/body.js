import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Meteor } from 'meteor/meteor';

import './body.html';
import './task.js';
import { Tasks } from '../api/tasks.js';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
});

Template.body.helpers({
  tasks() {
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
      // Se check estiver marcado, filtra as tarefas
      return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }
    // Se não, retorna todas as tarefas
    return Tasks.find({}, { sort : {createdAt: -1}});
  },
  incompleteCount() {
    return Tasks.find({ checked: { $ne: true } }).count();
  },
});

Template.body.events({
  'submit .new-task'(event) {
    event.preventDefault();

    const target = event.target;

    const text = target.text.value;

    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });

    Meteor.call('tasks.insert', text);

    target.text.value = '';
  },
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
});