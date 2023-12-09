import IProfissional from "./IProfissional";

export default interface IAvaliacao extends IProfissional {
  id: number,
  data: string,
  hora: string,
  profissional: Array<IProfissional>,
  paciente: string,
  modalidade: string
}