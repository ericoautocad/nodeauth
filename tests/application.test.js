const test = require('tape')
const supertest = require('supertest')
const server = require('./../server')

test('GET /', (t) => {
    supertest(server)
      .get('/')
      .expect(401)
      .end((err, res) =>{
        t.error(err, 'Sem erros') 
        let { status } = res.body
        t.assert(status == null, "Usuario nao autenticado.")
        t.end()  
      })
})

let user = {username: "billy", login: "billy", password: "123456", active:1}
let userid = 0

test('POST /users', (t) => {
    supertest(server)
      .post('/users')
      .send(user)
      .expect(200)
      .end((err, res) =>{
        t.error(err, 'Sem erros') 
        let status = res.body.status
        let { id } = res.body.user
        userid = id
        t.assert(status == true, "Usuario cadastrado com sucesso.")
        t.end()  
      })
})

test('POST /users', (t) => {
    supertest(server)
      .post('/users')
      .send(user)
      .expect(400)
      .end((err, res) =>{
        t.error(err, 'Sem erros') 
        let { erros } = res.body
        t.assert(erros != null, "Usuario digitou login indisponivel.")
        t.end()  
      })
}) 

let usertoken = ''

test('POST /users/token', (t) => {
    supertest(server)
      .post('/users/token')
      .send(user)
      .expect(200)
      .end((err, res) =>{
        t.error(err, 'Sem erros')
        let { status } = res.body
        let { token } = res.body
        usertoken = token
        t.assert(status == true, "Usuario autenticado com sucesso.")
        t.end()  
      })
})

test('GET /', (t) => {
    supertest(server)
      .get('/')
      .set('Authorization', 'JWT '+usertoken)
      .expect(200)
      .end((err, res) =>{
        t.error(err, 'Sem erros')
        let { status } = res.body
        t.assert(status == true, "Usuarios cadastrados observados apos login com sucesso.")
        t.end()  
      })
})

test('DELETE /users/' + userid, (t) => {
    supertest(server)
      .delete('/users/' + userid )
      .set('Authorization', 'JWT '+usertoken)
      .expect(204)
      .end((err, res) =>{
        t.error(err, 'Sem erros') 
        let { status } = res.body
        t.assert(status == null, "Usuario removido com sucesso.")
        t.end()  
      })
})