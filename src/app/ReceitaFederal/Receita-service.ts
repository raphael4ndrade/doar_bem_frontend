import { Injectable } from "@angular/core"
import Request from '../core/request'

const RECEITA_URL = 'http://www.receitaws.com.br/v1/cnpj'
@Injectable()
export class ReceitaService {
    constructor(
        private request: Request
    ) { }

    consultaONG(cnpj: string) {
        return this.request.get(`${RECEITA_URL}/${cnpj}`)
    }

}
