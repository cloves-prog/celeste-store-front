[![Build Status](https://travis-ci.org/cloves-prog/celeste-store-front.svg?branch=master)](https://travis-ci.org/cloves-prog/celeste-store-front)

# Motivação

Esse projeto tem com finalidade, apresentar uma solução para resolver um problema da loja [Tem de tudo](https://github.com/matheuscatossi/tem-de-tudo-development-test).

## Projeto hospedado no dominio abaixo
[https://celeste-store.mybluemix.net/](https://celeste-store.mybluemix.net/)

## Descrição

Essa aplicação foi construida utilizando o as seguintes tecnologias.
- ReactJS
- Redux (+Thunk)
- Material UI (+ Styled Components)
- recharts
- Travis CI


## Rodando o projeto no seu ambiente local
NodeJS >= 12.18.2

### Copie o arquivo `.env.example` > `.env` e preencha as variaveis


### Instale as dependencias do projeto

```
yarn
```


### Executa o build


```
yarn build
```

### Executa o seeder para criar o usuário principal
```
yarn start
```
Obs.
Deixei um usuário padrão criado na base
- Email: celeste@teste.com
- Senha: celeste123


### inicie o node apontando para pasta `build/server.js`

```
node build/server.js
```
