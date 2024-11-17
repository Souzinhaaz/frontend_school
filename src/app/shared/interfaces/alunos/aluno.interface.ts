import { Turma } from "../turmas/turma.interface";

export interface Aluno {
  id: number;
  nome: string;
  turma: Turma;
  responsibleTelephone: string
}