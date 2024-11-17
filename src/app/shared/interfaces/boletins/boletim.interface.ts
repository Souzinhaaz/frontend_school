import { Aluno } from "../alunos/aluno.interface";

export interface Boletim {
  id: number;
  nota1: number;
  nota2: number;
  nota3: number;
  nota4: number;
  aluno: Aluno;
  media: number;
  quantidadeFaltas: number;
  aprovado: boolean;
}