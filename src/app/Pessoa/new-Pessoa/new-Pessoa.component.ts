import { Component, OnInit } from '@angular/core';
import { PessoaModel } from '../Pessoa-model';
import { PessoaService } from '../Pessoa-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceitaService } from '../../ReceitaFederal/Receita-service'
import { ReceitaModel } from '../../ReceitaFederal/Receita-model'


@Component({
  selector: 'app-new-Pessoa',
  templateUrl: './new-Pessoa.component.html'
})
export class NewPessoaComponent implements OnInit {

  PessoaForm: FormGroup
  selectedImage: string
  images: string[] = [
      '001-police officer.png',
      '002-woman.png',
      '003-man.png',
      '004-girl.png',
      '005-boy.png',
      '006-girl.png',
      '007-man.png',
      '008-woman.png',
      '009-muslim.png',
      '010-doctor.png',
      '011-woman.png',
      '012-woman.png',
      '013-bell boy.png',
      '014-woman.png',
      '015-boy.png',
      '016-grandpa.png',
      '017-grandma.png',
      '018-nurse.png',
      '019-boy.png',
      '020-woman.png',
      '021-woman.png',
      '022-doctor.png',
      '023-boy.png',
      '024-girl.png',
      '025-chef.png',
      '026-man.png',
      '027-muslim.png',
      '028-woman.png',
      '029-girl.png',
      '030-man.png',
      '031-woman.png',
      '032-man.png',
      '033-girl.png',
      '034-taxi driver.png',
      '035-grandpa.png',
      '036-woman.png',
      '037-firefighter.png',
      '038-boy.png',
      '039-woman.png',
      '040-girl.png',
      '041-grandma.png',
      '042-woman.png',
      '043-chef.png',
      '044-boy.png',
      '045-woman.png',
      '046-man.png',
      '047-girl.png',
      '048-muslim.png',
      '049-girl.png',
      '050-muslim.png',
  ]

  constructor(
    private PessoaSvc: PessoaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private receitaSvc: ReceitaService
  ) { }

  ngOnInit() {
    this.router.onSameUrlNavigation = "reload"
    this.PessoaForm = this.formBuilder.group({
      cpf_cnpj : this.formBuilder.control('',[Validators.required]),
      nome : this.formBuilder.control('',[Validators.required]),
      email : this.formBuilder.control('',[Validators.required]),
      // CEP : this.formBuilder.control('',[Validators.required]),
      endereco : this.formBuilder.control('',[Validators.required]),
      foto : this.formBuilder.control('',[Validators.required]),
      senha: this.formBuilder.control('',[Validators.required])
    })

    this.PessoaForm.get('cpf_cnpj').valueChanges.subscribe(
      newValue => {
        if(newValue.length == 14) this.getONG(newValue)
      }
    )
  }

  getONG(cnpj: string){
    this.receitaSvc.consultaONG(cnpj).subscribe(
      resp => {
        let obj:ReceitaModel = (<ReceitaModel>resp.json())
        this.preencheDados(obj)
      }
    )
  }

  preencheDados(dados: ReceitaModel) {
    this.PessoaForm.get('nome').setValue(dados.nome)
    this.PessoaForm.get('CEP').setValue(dados.cep)
    this.PessoaForm.get('email').setValue(dados.email)
  }

  setImage(image: string){
    PessoaService.selectedImage = image
    this.selectedImage = image
  }


  setAddress(value: string){
    this.PessoaForm.get('endereco').setValue(value)
  }

  noUser():Boolean {
    return PessoaService.currentPessoa == null
  }  

}
