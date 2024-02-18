import styled from "styled-components";
import IProfissional from "../../types/IProfissional";
import Card from "./Card";
import Botao from "../Botao";


const SecaoCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
`

const Avaliacao = ({ profissionais }: { profissionais: IProfissional[] | null }) => {
  return (
    <>
      <SecaoCard>
        {profissionais?.map((profissional) => {
          return <Card key={profissional.id} profissional={profissional} />
        })}
      </SecaoCard>

      <Botao>Ver mais</Botao>
    </>
  );
}

export default Avaliacao;