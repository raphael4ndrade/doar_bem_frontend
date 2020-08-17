import { Injectable } from "@angular/core"
import { PessoaModel } from "./Pessoa-model"
import api from '../core/api'
import Request from '../core/request'



@Injectable()
export class PessoaService {
  private pessoaLogin: PessoaModel
  private currentPessoa: PessoaModel
  private selectedImage: string

  constructor(
    private request: Request
  ) { }

  // static pessoaLogin: PessoaModel
  // static currentPessoa: PessoaModel
  // static selectedImage: string

  // static getCurrPessoa(): string {
  //   if (PessoaService.currentPessoa) {
  //     return PessoaService.currentPessoa.nome
  //   } else {
  //     return ''
  //   }
  // }

  get isONG(): Boolean {
    // const pessoa = PessoaService.getCurrPessoa()
    // return this.pessoa.length == 14
    return false
  }

  // pessoaLogin(params: UserInterface): void {
    // this.http.get(
    //   `${person}?email=${params.email}&senha=${params.senha}`
    //   , new RequestOptions({ headers: AuthService.header })
    // ).subscribe(
    //   (resp) => {
    //     const obj: RespJsonFlask = (<RespJsonFlask>resp.json())
    //     const pessoa: PessoaModel = (<PessoaModel>(obj.data) ? obj.data[ 0 ] : null)
    //     PessoaService.pessoaLogin = pessoa
    //     PessoaService.currentPessoa = pessoa
    //     if (pessoa) {
    //       this.router.navigate([ 'Necessidade' ])
    //     } else {
    //       alert('Dados incorretos.')
    //     }
    //   }
    // )
  // }

  // constructor(
  //   private http: Http,
  //   private router: Router,
  //   private authSvc: AuthService
  // ) { }

  allPessoas() {
    // if (!AuthService.header) {
    //   this.authSvc.handShake()
    // }
    // return this.http.get(
    //   person
    //   , new RequestOptions({ headers: AuthService.header })
    // )
    return this.request.get(api.person)
  }

  pessoasByName(text: string) {
    // return this.http.get(
    //   `${person}?nome=${text}`
    //   , new RequestOptions({ headers: AuthService.header })
    // )
    return this.request.get(`${api.person}?nome=${text}`)
  }

  // delete(cpf_cnpj: string): void {
  //   if (cpf_cnpj == PessoaService.pessoaLogin.cpf_cnpj) {
  //     alert('Você não pode deletar você mesmo.')
  //     return
  //   }
  //   this.http.delete(
  //     `${person}/${cpf_cnpj}`
  //     , new RequestOptions({ headers: AuthService.header })
  //   ).subscribe(
  //     resp => {
  //       const obj: RespJsonFlask = (<RespJsonFlask>resp.json())
  //       let data: PessoaModel = (<PessoaModel>obj.data)
  //       console.log('"Pessoa.Delete" = ', data)
  //     }
  //   )
  // }

  // savePessoa(newPessoa: PessoaModel): void {
  //   newPessoa.foto = PessoaService.selectedImage
  //   this.http.post(
  //     person,
  //     JSON.stringify(newPessoa)
  //     , new RequestOptions({ headers: AuthService.header })
  //   ).subscribe(
  //     resp => {
  //       const obj: RespJsonFlask = (<RespJsonFlask>resp.json())
  //       console.log('Resposta da inclusão de Pessoa: ', obj)
  //       PessoaService.currentPessoa = newPessoa
  //     }
  //   )
  // }

}