import { environment as env } from '../../environments/environment'

export interface RespJsonFlask {
  data: any,
  timeStamp: string,
  status: string
}

export interface JWTResponse {
  access_token: string
}

export const BASE_PATH_SERVER = 'http://localhost:5000/doar_faz_bem'

const API_VERSION = '/v1'
const BASE_URL = env.baseURL.concat(API_VERSION)

export default {
  handshake: `${BASE_URL}/handshake`,
  person: `${BASE_URL}/person`,
  needs: `${BASE_URL}/needs`,
  message: `${BASE_URL}/message`,
}