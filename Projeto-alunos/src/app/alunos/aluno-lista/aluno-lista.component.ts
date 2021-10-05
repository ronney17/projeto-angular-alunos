import { Component, Output, Input } from '@angular/core';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css']
})
export class AlunoListaComponent {
  @Input() alunos: Aluno[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
