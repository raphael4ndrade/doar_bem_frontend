import { Injectable } from "@angular/core"

import Request from '../request'
import api from "../api"
import { Need } from '../models/need'

@Injectable()
export class NecessidadeService {
  constructor(
    private request: Request
  ) { }

  allNecessidades() {
    return this.request.get(api.needs)
  }

  NecessidadesByTitle(text: string) {
    return this.request.get(`${api.needs}?=descricao=${text}`)
  }

  delete(descricao: string) {
    return this.request.delete(`${api.needs}/${descricao}`)
  }

  saveNecessidade(item: Need) {
    return this.request.post(api.needs, item)
  }
}