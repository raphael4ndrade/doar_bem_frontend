import { Component, OnInit } from '@angular/core';
import { PessoaModel } from '../Pessoa-model';
import { PessoaService } from '../Pessoa-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PessoaListComponent} from '../Pessoa-list/Pessoa-list.component'


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
    private router: Router
  ) { }

  ngOnInit() {
    this.router.onSameUrlNavigation = "reload"
    this.PessoaForm = this.formBuilder.group({
      nome : this.formBuilder.control('',[Validators.required]),
      tipo : this.formBuilder.control('',[Validators.required]),
      telefone : this.formBuilder.control('',[Validators.required]),
      // CEP : this.formBuilder.control('',[Validators.required]),
      endereco : this.formBuilder.control('',[Validators.required]),
      foto : this.formBuilder.control('',[Validators.required]),
      senha: this.formBuilder.control('',[Validators.required])
    })
  }

  setImage(image: string){
    PessoaService.selectedImage = image
    this.selectedImage = image
  }


  setAddress(value: string){
    this.PessoaForm.get('endereco').setValue(value)
  }

}