import { Component, OnInit } from '@angular/core';
import { NecessidadeModel } from '../Necessidade-model';
import { NecessidadeService } from '../Necessidade-service';
import { Router } from '@angular/router';
import {RespJsonFlask} from '../../core/api'
import {PessoaService} from '../../Pessoa/Pessoa-service'


@Component({
  selector: 'app-Necessidade-list',
  templateUrl: './Necessidade-list.component.html'
})
export class NecessidadeListComponent implements OnInit {

  items: NecessidadeModel[] = []
  
  constructor(
    private NecessidadeSvc: NecessidadeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.onSameUrlNavigation = "reload"
    this.NecessidadeSvc.allNecessidades().subscribe(
      resp => {
        let obj:RespJsonFlask = (<RespJsonFlask>resp.json())
        this.items = (<NecessidadeModel[]>obj.data)
      }
    )
  }

  filter(param: any){
    this.NecessidadeSvc.NecessidadesByTitle(param.searchContent).subscribe(
      resp => {
        let obj:RespJsonFlask = (<RespJsonFlask>resp.json())
        this.items = (<NecessidadeModel[]>obj.data)
      // },error => {
      //   if(error.status == 404) this.items = []
      }
    )
  }

  add(){
    this.router.navigate(['/new-Necessidade'])
  }

  remove(item: NecessidadeModel){
    if(!confirm(`Remove Necessidade "${item.descricao}" ?`)){
      return
    }
    this.NecessidadeSvc.delete(item.descricao as unknown as string)
    this.items.splice(this.items.indexOf(item),1)
  }

  save(item: NecessidadeModel){
    // item.pessoa = PessoaService.currentPessoa
    this.NecessidadeSvc.saveNecessidade(item)
    this.items.push(item)
  }

  select(item: NecessidadeModel){
    // NecessidadeService.currentNecessidade = item
    this.router.navigate(['/new-'])
  }

  isOwner(item: NecessidadeModel):Boolean{
    // return item.pessoa.cpf_cnpj == PessoaService.pessoaLogin.cpf_cnpj
    return true
  }

}
