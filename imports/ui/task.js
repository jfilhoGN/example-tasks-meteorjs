import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
 
import { Tasks } from '../api/tasks.js';
 
import './task.html';

Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
});
 
Template.task.events({
  'click .toggle-checked'() {
    // Check a propriedade marcada com a oposta do valor atual
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('tasks.remove', this._id);
  },
  'click .toggle-private'() {
    Meteor.call('tasks.setPrivate', this._id, !this.private);
  },
});