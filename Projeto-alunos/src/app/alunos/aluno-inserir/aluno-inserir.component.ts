import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno-inserir',
  templateUrl: './aluno-inserir.component.html',
  styleUrls: ['./aluno-inserir.component.css']
})
export class AlunoInserirComponent {

  @Output() alunoAdicionado = new EventEmitter<Aluno>();

  nome: string;
  ra: string;
  fone: string;
  email: string;

  constructor() {
    this.nome = '';
    this.ra = '';
    this.fone = '';
    this.email = '';
  }

  onAdicionarAluno() {
    const aluno: Aluno = {
      nome: this.nome,
      ra: this.ra,
      fone: this.fone,
      email: this.email,
    };
    this.alunoAdicionado.emit(aluno);
  }

}
