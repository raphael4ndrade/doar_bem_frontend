import { Injectable } from "@angular/core"
import api from "../api"
import Request from '../request'
import { Message as MessageModel } from "../models/message"


@Injectable()
export class MensagemService {
  constructor(
    private request: Request
  ) { }

  mensagensPara(cpf_cnpj: string) {
    return this.request.get(`${api.message}?para=${cpf_cnpj}&lida=N`)
  }

  enviarMensagem(message: MessageModel) {
    return this.request.post(api.message, message)
  }

  marcarComoLida(mensagem_id: number) {
    // TODO: http.put(....set lida="S")
  }
}