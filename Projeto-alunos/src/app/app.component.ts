import { Component } from '@angular/core';
import { Aluno } from './alunos/aluno.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto-alunos';
  alunos: Aluno[] = [];

  onAlunoAdicionado(aluno: any) {
    this.alunos = [...this.alunos, aluno];
  }
}
