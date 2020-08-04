import { Component, OnInit, Input } from '@angular/core';
import { PessoaModel } from '../Pessoa-model';

@Component({
  selector: 'app-Pessoa-item',
  templateUrl: './Pessoa-item.component.html'
})
export class PessoaItemComponent implements OnInit {

  @Input() Pessoa: PessoaModel

  constructor() { }

  ngOnInit() {
  }

}
