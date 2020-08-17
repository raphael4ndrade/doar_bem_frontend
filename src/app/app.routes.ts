import { Routes } from "@angular/router"
import LoginGuard from "./login/login.guard"

import LoginComponent from "./login/login.component"
import { NecessidadeComponent } from "./Necessidade/Necessidade-component"
import { NewNecessidadeComponent } from "./Necessidade/new-Necessidade/new-Necessidade.component"
import { PessoaComponent } from "./Pessoa/Pessoa-component"
import { NewPessoaComponent } from "./Pessoa/new-Pessoa/new-Pessoa.component"
import { NecessidadeGuard } from './Necessidade/Necessidade-guard'

// TODO: create components...
class SignUp { }
class ForgotPassword { }

const PUBLIC_ROUTES: Routes = [
  { path: '', redirectTo: '/entrar', pathMatch: 'full' },
  { path: 'entrar', component: LoginComponent },
  { path: 'cadastrar', component: SignUp },
  { path: 'esqueci-a-senha', component: ForgotPassword },
]

const PRIVATE_ROUTES: Routes = [
  { path: 'necessidades', component: NecessidadeComponent },
  { path: 'Necessidade/:descricao', component: NecessidadeComponent },
  { path: 'new-Necessidade', component: NewNecessidadeComponent, canActivate: [ NecessidadeGuard ] },
  { path: 'Pessoa', component: PessoaComponent },
  { path: 'Pessoa/:name', component: PessoaComponent },
  { path: 'new-Pessoa', component: NewPessoaComponent },
]

export const ROUTES = [
  ...PUBLIC_ROUTES,
  ...PRIVATE_ROUTES.map(rt => {
    const currentActivate = rt.canActivate || []
    rt.canActivate = currentActivate.concat(LoginGuard)

    return rt
  })
]