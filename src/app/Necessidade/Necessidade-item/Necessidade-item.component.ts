import { Component, OnInit, Input } from '@angular/core';
import { NecessidadeModel } from '../Necessidade-model';

@Component({
  selector: 'app-Necessidade-item',
  templateUrl: './Necessidade-item.component.html',
  styleUrls: ['./Necessidade-item.component.css']
})
export class NecessidadeItemComponent implements OnInit {

  @Input() Necessidade: NecessidadeModel

  constructor() { }

  ngOnInit() {
  }

}
