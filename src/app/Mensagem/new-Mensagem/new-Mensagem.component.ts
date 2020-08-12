import { Component, OnInit } from '@angular/core';
import { MensagemService } from '../Mensagem-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-new-mensagem',
    templateUrl: './new-mensagem.component.html'
})
export class NewMensagemComponent implements OnInit {
    MensagemForm: FormGroup

    constructor(
        private formBuilder: FormBuilder,
        private msgService: MensagemService
    ){}

    ngOnInit() {
        this.MensagemForm = this.formBuilder.group({            
            de: this.formBuilder.control('', [Validators.required]),
            para: this.formBuilder.control('', [Validators.required]),
            campanha : this.formBuilder.control('',[Validators.required]),
            conteudo: this.formBuilder.control('', [Validators.required])
        })
    }


}