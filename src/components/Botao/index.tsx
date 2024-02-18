import styled from "styled-components";

const Botao = styled.button`
  background-color: var(--azul-escuro);
  border-radius: 8px;
  border: none;
  color: var(--branco);
  font-weight: 700;
  line-height: 19px;
  margin-top: 1em;
  padding: 12px 16px;
  cursor: pointer;
  transition: background .25s;

  &:hover {
    background-color: var(--azul-claro);
  }
`

export default Botao;