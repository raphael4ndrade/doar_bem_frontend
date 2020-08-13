import { Component, OnInit } from '@angular/core';
import { MensagemModel } from '../Mensagem-model';
import { MensagemService } from '../Mensagem-service';
import { Router } from '@angular/router';
import {RespJsonFlask} from '../../app.api'
import {PessoaService} from '../../Pessoa/Pessoa-service'


@Component({
    selector: 'app-Mensagem-list',
    styleUrls: ['Mensagem-list.component.css'],
    templateUrl: './Mensagem-list.component.html'
})
export class MensagemListComponent implements OnInit{
    items: MensagemModel[] = []

    constructor(
      private MensagemSvc:  MensagemService,
      private router: Router
    ){}

    loadMessages(){
        this.MensagemSvc.carregaMensagens(
            PessoaService.pessoaLogin.cpf_cnpj
        ).subscribe(
            resp => {
                let obj:RespJsonFlask = (<RespJsonFlask>resp.json())
                this.items = (<MensagemModel[]>obj.data)                    
                }
        )
    }

    ngOnInit() {
        this.loadMessages()
    }

    update(){
        this.loadMessages()
    }
}