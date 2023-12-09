import { Rating } from "@mui/material";
import IProfissional from "../../../types/IProfissional";
import styled from "styled-components";

const ContainerEstilizado = styled.div`
  flex: 40%;
  max-width: 100%;
  background-color: var(--branco);
  padding: 1em;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, .15);
  border-radius: 8px;
  color: var(--cinza);
`

const ListaEstilizada = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  margin: 0;
`

const ItemEstilizada = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`

const ItemInformacoesEstilizado = styled(ItemEstilizada)`
  flex-grow: 1;
  flex-direction: column;
  align-items: normal;
`

const ImagemEstilizado = styled.img`
  border-radius: 100%;
  width: 64px;
  object-fit: cover;
  height: 64px;
  border: 2px solid var(--azul-claro);
  margin-right: 8px;
`

const ParagrafoNomeEstilizado = styled.p`
  font-weight: 700;
  margin: 0 0 8px 0;
`

const ParagrafoEstilizado = styled.p`
  font-size: 14px;
  margin: 0;
`

const Card = ({ profissional }: { profissional: IProfissional }) => {
  return (
    <ContainerEstilizado>
      <ListaEstilizada>
        <ItemEstilizada>
          <ImagemEstilizado
            src={profissional.imagem}
            alt={`Foto de perfil do profissional ${profissional.nome}`}
          />
          <ItemInformacoesEstilizado>
            <ParagrafoNomeEstilizado>{profissional.nome}</ParagrafoNomeEstilizado>
            <ParagrafoEstilizado>{profissional.especialidade}</ParagrafoEstilizado>
          </ItemInformacoesEstilizado>
        </ItemEstilizada>

        <ItemEstilizada>
          <Rating
            name='simple-controlled'
            value={profissional.nota}
            readOnly={true}
          />
        </ItemEstilizada>
      </ListaEstilizada>
    </ContainerEstilizado>
  );
}

export default Card;