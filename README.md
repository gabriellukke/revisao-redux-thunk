# Revisão-redux-thunk-bloco-16
Repositório para o Plantão de Revisão do Redux Thunk do Bloco de Redux, o código original sem o uso do Redux está na branch **main**.

E a resolução vai ser feita na branch **jokesandmemes-redux-turma-X**.

---

## Código base

O código está na parte inicial após o comando `create-react-app`, e nele iremos criar a nossa aplicação, contando com:

- Componente para a Piada
  - um componente simples onde a piada deverá ser renderizada

- Componente para o meme
  - um componente simples onde o meme deverá ser renderizado

- Componente de Barra de Pesquisa
  - um componente onde deve haver uma barra de pesquisa para o usuário buscar a piada por uma categoria

- As APIs de Piadas e Memes
  - API de memes: https://api.imgflip.com/get_memes
  - API de piadas(Com um termo para a categoria): https://icanhazdadjoke.com/search?term=

---

## Objetivo

O objetivo é criar uma aplicação simples que faça uma requisição de duas APIs, uma de memes e outra de piadas, e nos mostre na tela o meme ou a piada através do click do usuário, para isso será necessário instalar as dependências,`redux`, `react-redux`, `redux-thunk` e `redux-devtools-extension`. Caso queira, utilize essa [sugestão](##-checklist-do-react-redux-(sugestão)) de checklist, para guiar o inicio do desenvolvimento do Redux

---
## Checklist do react redux (sugestão)

*Antes de começar*
- [ ] pensar como será o *formato* do seu estado global
- [ ] pensar quais actions serão necessárias na sua aplicação

*Criar dentro do diretório src:*
- [ ] diretório actions;
- [ ] diretório reducers;
- [ ] diretório store.

*Criar dentro do diretório actions:*
- [ ] arquivo index.js.

*Criar dentro do diretório reducers:*
- [ ] arquivo index.js.

*Criar dentro do diretório store:*
- [ ] arquivo index.js.

*No arquivo App.js:*
- [ ] definir o Provider, `<Provider store={ store }>`, para fornecer os estados à todos os componentes encapsulados em `<App />`.

*No arquivo store/index.js:*
- [ ] criar a store
- [ ] configurar o [Redux DevTools](https://github.com/reduxjs/redux-devtools)

*Na pasta reducers:*
- [ ] criar os reducers necessários em arquivos separados
- [ ] importar o rootReducer no arquivo index e utilizar os reducers criados

*Na pasta actions:*
- [ ] criar os actionTypes, por exemplo: `const ADD_TO_CART = 'ADD_TO_CART';`
- [ ] criar os actions creators necessários

*Nos componentes:*
- [ ] criar a função mapStateToProps
- [ ] criar a função mapDispatchToProps
- [ ] fazer o connect
