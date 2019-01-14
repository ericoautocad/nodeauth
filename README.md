# Aplicação node.js e mysql

Siga os seguintes passo para rodar as duas aplicações: 

1\) Clone o repositório https://github.com/ericoautocad/nodeauth

2\) Crie o diretorio `dadosmysql`, que sera o volume de arquivos do container do banco mysql.

3\) Ative os containers necessários para executar a aplicação com o comando: 

`docker-compose up` 

4\) Somente após ver a mensagem "Express ha been started on port: 8080" tente acessar as aplicações nos seguintes endereços: 


Cadastro de usuários

`http://localhost:8080/users` com o metodo: `POST` com os atributos: username, login, password e active veja o exemplo: 

```js

{ username: "erico", login: "nodeauth", password: "12345678", active: 1 } 

```

Autenticação de usuário

`http://localhost:8080/users/token` com o metodo: `POST` com os atributos: login e password veja o exemplo: 

{ login: "nodeauth", password: "12345678" } 

Exibir usuários

`http://localhost:8080/` com o metodo: `GET` com o header: `Authorization` no padrão: `Authorization: JWT codigodoseutokendeacesso` veja o exemplo: 

`GET` `http://localhost:8080/` 

Excluir usuário

`http://localhost:8080/users/<userid>` com o metodo: `DELETE` com o header: `Authorization` no padrão: `Authorization: JWT codigodoseutokendeacesso` veja o exemplo: 

`DELETE` `http://localhost:8080/users/9`
