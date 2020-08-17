import { Server } from 'miragejs'

export const makeServer = () => {
  let server = new Server({
    routes() {
      this.urlPrefix = 'http://localhost:8080'
      this.namespace = '/v1'
      this.timing = 2000

      this.post('/handshake', () => {
        return { access_token: 'mocked-token---' }
      })

      this.get('/person', () => {
        return {
          data: [ {
            nome: 'Lineuzinho',
            cpf_cnpj: '11122233340'
          } ]
        }
      })

      this.get('/needs', () => {
        return []
      })
    }
  })

  return server
}