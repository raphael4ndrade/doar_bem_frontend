import { Http, RequestOptions, Response } from "@angular/http"
import { Injectable } from "@angular/core"
import { Observable } from "../../../node_modules/rxjs"
import { NecessidadeModel } from "./Necessidade-model"
import { RespJsonFlask, BASE_PATH_SERVER } from "../core/api"

const Necessidade_API = `${BASE_PATH_SERVER}/Necessidade`

// now we do another way of authentication
const AuthService = {
    header: null
}

// @deprecated soon a new service will be mapped...
@Injectable()
export class NecessidadeService {

    static currentNecessidade: NecessidadeModel

    static getCurrNecessidade(): string {
        if (NecessidadeService.currentNecessidade) {
            return NecessidadeService.currentNecessidade.descricao
        } else {
            return ''
        }
    }

    constructor(private http: Http) {
    }

    allNecessidades(): Observable<Response> {
        return this.http.get(
            Necessidade_API
            , new RequestOptions({ headers: AuthService.header })
        )
    }

    NecessidadesByTitle(text: string): Observable<Response> {
        return this.http.get(
            `${Necessidade_API}?descricao=${text}`
            , new RequestOptions({ headers: AuthService.header })
        )
    }

    delete(descricao: string): void {
        this.http.delete(
            `${Necessidade_API}/${descricao}`
            , new RequestOptions({ headers: AuthService.header })
        ).subscribe(
            resp => {
                const obj: RespJsonFlask = (<RespJsonFlask>resp.json())
                let data: NecessidadeModel = (<NecessidadeModel>obj.data)
                console.log('"Necessidade.Delete" = ', data)
            }
        )
    }

    saveNecessidade(newItem: NecessidadeModel): void {
        this.http.post(
            Necessidade_API,
            JSON.stringify(newItem)
            , new RequestOptions({ headers: AuthService.header })
        ).subscribe(
            resp => {
                const obj: RespJsonFlask = (<RespJsonFlask>resp.json())
                let data: NecessidadeModel = (<NecessidadeModel>obj.data)
                console.log('"saveNecessidade" = ', data)
            }
        )
    }

}