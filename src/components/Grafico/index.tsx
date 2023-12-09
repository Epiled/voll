import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts";
import IProfissional from "../../types/IProfissional";
import IConsulta from "../../types/IConsulta";
import useDadosGrafico from "./useDadosGrafico";
import styled from "styled-components";
import Subtitulo from "../Subtitulo";
import Titulo from "../Titulo";


interface Props {
  profissionais: IProfissional[] | null,
  consultas: IConsulta[] | null
}

interface IDados {
  nome: string;
  consultas: number;
}

const SecaoEstilizada = styled.section`
background-color: var(--branco);
border-radius: 16px;
`

const Grafico = ({ profissionais, consultas }: Props) => {

  let dados: Array<IDados> = useDadosGrafico({ profissionais, consultas });

  return (
    <SecaoEstilizada>
      <ResponsiveContainer width='100%' height={350}>
        <BarChart
          layout='vertical'
          margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
          data={dados}
        >
          <XAxis type='number' />
          <YAxis type='category' dataKey='nome' />
          <Bar dataKey='consultas' fill='#083860' barSize={30}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </SecaoEstilizada>
  );
}

export default Grafico;