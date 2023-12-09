import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IConsulta from '../../types/IConsulta';
import styled from '@emotion/styled';
import Titulo from '../Titulo';
import Botao from '../Botao';

const CelulaEstilizada = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: 'var(--azul-escuro)',
    fontSize: 18,
    fontWeight: 700,
    fontFamily: 'var(--fonte-principal)'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: 'var(--fonte-principal)'
  }
}))

const LinhaEstilizada = styled(TableRow)(() => ({
  [`&:nth-of-type(odd)`]: {
    backgroundColor: "var(--cinza-claro)",
    align: "right"
  }
}))

export default function Tabela({ consultas }: { consultas: IConsulta[] | null }) {

  return (
    <TableContainer sx={{mt: '20px'}} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
        <TableHead>
          <TableRow>
            <CelulaEstilizada>Data</CelulaEstilizada>
            <CelulaEstilizada>Horário</CelulaEstilizada>
            <CelulaEstilizada>Profissional</CelulaEstilizada>
            <CelulaEstilizada>Especialidade</CelulaEstilizada>
            <CelulaEstilizada>Paciente</CelulaEstilizada>
            <CelulaEstilizada>Modalidade</CelulaEstilizada>
          </TableRow>
        </TableHead>
        <TableBody>
          {consultas?.map((linha) => {
            return (
              <LinhaEstilizada
                key={linha.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <CelulaEstilizada component="th" scope="row">
                  {new Date(linha.data).toLocaleDateString()}
                </CelulaEstilizada>
                <CelulaEstilizada>{linha.horario}</CelulaEstilizada>
                <CelulaEstilizada>{linha.profissional[0].nome}</CelulaEstilizada>
                <CelulaEstilizada>{linha.profissional[0].especialidade}</CelulaEstilizada>
                <CelulaEstilizada>{linha.paciente}</CelulaEstilizada>
                <CelulaEstilizada>{linha.modalidade}</CelulaEstilizada>
              </LinhaEstilizada>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}