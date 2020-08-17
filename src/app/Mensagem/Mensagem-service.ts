import { Http, RequestOptions, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "../../../node_modules/rxjs";
import { MensagemModel } from "./Mensagem-model";
import { RespJsonFlask, BASE_PATH_SERVER } from "../core/api";

const Mensagem_API = `${BASE_PATH_SERVER}/doar_faz_bem/Mensagem`

// now we do another way of authentication

const AuthService = {
    header: null
}

// @deprecated soon a new service will be mapped...
@Injectable()
export class MensagemService{

    constructor(private http: Http){
    }

    mensagensPara(cpf_cnpj: string):Observable<Response>{
        return this.http.get(
            `${Mensagem_API}?para=${cpf_cnpj}&lida=N`
            ,new RequestOptions({headers: AuthService.header})
        )
    }

    enviarMensagem(mensagem:MensagemModel):void{
        this.http.post(
            Mensagem_API,
            JSON.stringify(mensagem)
            ,new RequestOptions({headers: AuthService.header})
        ).subscribe(
            resp => {
                const obj: RespJsonFlask = (<RespJsonFlask>resp.json())
                console.log('enviarMensagem =', obj.data)
            }
        )
    }

    marcarComoLida(mensagem_id: number){
        // TODO: http.put(....set lida="S")
    }
}