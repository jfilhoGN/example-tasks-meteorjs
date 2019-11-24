# Exemplo aplicação com Meteor JS

O Meteor é uma plataforma Javascript completa para desenvolvimento de aplicativos *web* e móveis. Suas principais vantagens são:

* Permite que desenvolva toda a aplicação em somente uma linguagem **Javascript**, em todos os ambientes: servidor de aplicativos, navegador da web e dispositivos móveis.
* O Meteor usa dados na conexão, o que significa que o servidor enviar dados, não HTML e o cliente os processa.
* O Meteor possui uma documentação completa ([documentação](https://docs.meteor.com/#/full/)), abraçando as melhores partes da comunidade Javascript;
* O Meteor prove *full stack reactivity*, isto é, permitindo que a interface com o usuário reflita perfeitamente o verdadeiro valor do estado global com um minímo de esforço de desenvolvimento.


## Instalação

1. Primeiro deve ser instalado a versão mais recente do [NodeJS](https://nodejs.org/en/);
2. Instalação MeteorJS, no terminal executar o seguinte comando:
 
   `curl https://install.meteor.com/ | sh`

3. Com o projeto clonado basta executar o comando `npm install ` para realizar a instalação das dependências necessárias, após a instalação para executar o projeto em modo *web* basta executar: `meteor `

OBS: O meteor tem integração automática com o MongoDB, desta forma para o seu completo funcionamento deve estar instalado a versão mais recente do [MongoDB](https://docs.mongodb.com/manual/installation/). 

Este projeto tem como objetivo criar uma tela de listagem de tarefas em andamento.

## Criação de um projeto.

Caso queira criar um projeto novo basta executar o comando: `meteor create nomeprojeto `

Terminado a criação do projeto ele cria uma estrutura do seguinte formato

```
client/main.js        # Arquivo de entrada Javascript para ser executado no cliente
client/main.html      # arquivo HTMl que define modelos de exibição
client/main.css       # arquivo CSS para definir os estilos da aplicação
server/main.js        # Arquivo de entrada Javascript para carregar no lado do servidor
test/main.js          # arquivo de entrada para executar testes
package.json          # arquivo de controle dos pacotes npm
package-lock.json     # árvore de dependência dos pacotes npm
node_modules/         # pacotes instalados pelo npm
.meteor/              # arquivo internos no meteor
.gitignore            # arquivo de controle do git, arquivos que devem ser ignorados.
```

Para a parte de exibição ao cliente, o Meteor analisa os arquivos HTML e identifica três tags importantes: ` <head> <body> e <template>`

Tudo dentro de qualquer tag <head> é adicionado à headseção do HTML enviado ao cliente, e tudo dentro das tags <body> é adicionado à bodyseção, assim como em um arquivo HTML comum.

Tudo dentro das tags < template> é compilado nos modelos Meteor , que podem ser incluídos dentro do HTML {{> templateName}}ou referenciados no seu JavaScript Template.templateName.

Além disso, a bodyseção pode ser referenciada no seu JavaScript com Template.body. Pense nele como um modelo "pai" especial, que pode incluir os outros modelos filhos.

Todo o código em seus arquivos HTML é compilado com o compilador de bloco de códigos do Meteor. Os blocos de código utilizam colchetes duplos, como {{#each}}e {{#if}} para permitir que você adicione lógica e dados às suas visualizações.

Você pode entender mais a partir dos códigos introduzidos nesse projeto.

Para mais detalhes acessar a [documentação](https://docs.meteor.com/#/full/) do MeteorJS 

## Informações adicionais

O padrão da instalação do Meteor apresenta somente conteúdos simples, caso queira adicionar autenticação de usuário e estado reativo no projeto deve adicionar módulos do próprio meteor.

Para adicionar módulo de autenticação: `meteor add accounts-ui accounts-password`

Para adicionar módulo de estado reativo: `meteor add reactive-dict `

Outra informação importante sobre o meteor que de padrão ele libera o módulo *insecure*, isto é, permite editar o banco de dados a partir do cliente. Este módulo para projetos simples é importante, pois facilita no desenvolvimento, contudo, para projetos de grande porte deixar a responsabilidade do banco para o cliente não é um método elegante e seguro. Desta forma a melhor maneira é remover este pacote através do comando `meteor remove insecure`.

Removendo este módulo atribui para o desenvolvedor realizar a verificação se aquele determinado usuário tem permissões para estar alterando o banco de dados. Para exemplificação os códigos `tasks.js` na pasta **api** e `task.js` na pasta **ui** exemplifica essas validações.

Outro pacote que é interessante ser removido é o `autopublish` este pacote deixa a responsabilidade para o lado do cliente de realizar a seleção de dados, o que não é seguro, retirando esse pacote jogamos a responsabilidade para o servidor de enviar o que deve ser visível para o cliente. para remover o pacote deve ser executar `meteor remove autopublish`

## Executando testes

O meteor possui integração com o mocha para realização dos testes, facilitando a maneira de instalação do módulo do mocha na aplicação. Para isso deve-se executar os seguintes comandos:

```
meteor add meteortesting:mocha
meteor add practicalmeteor:chai
meteor npm install --save-dev chai
```

Após a instalação, para executar os testes, deve executar o seguinte comando:

`TEST_WATCH=1 meteor test --driver-package meteortesting:mocha`

Executando esse comando na porta 3000 você consegue visualizar todos os testes que foram executados, e quais passaram e não passaram. Caso queira executar os testes junto com a aplicação instanciada deve-se adicionar o parâmetro `--port nporta`.
