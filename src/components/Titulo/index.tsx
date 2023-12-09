import avaliacao from './assets/avaliacao.png';
import grafico from './assets/grafico.png';
import consulta from './assets/consulta.png';
import styled from 'styled-components';

interface Props {
    imagem?: string,
    children?: React.ReactNode,
    alter?: boolean
}

interface IImagens {
    avaliacao: string,
    grafico: string,
    consulta: string
}

const SpanEstilizado = styled.span<Props>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25px;
    height: 25px;
    background-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'};
    background-size: auto;
    margin-right: 8px;
`

const TituloEstilizado = styled.h2<Props>`
    color: var(--azul-claro);
    margin-top: ${props => props.alter ? `20px` : '0px'};
    margin-bottom: ${props => props.alter ? `20px` : '0px'};
`

const ContainerEstilizado = styled.div<Props>`
    display: flex;
    align-items: center;
    gap: '8px';
    margin-top: ${props => props.alter ? `0px` : '40px'};
`

function Titulo({ imagem, children, alter = false }: Props) {

    const listaDeImagens: IImagens = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta
    }

    return (
        <ContainerEstilizado alter={alter}>
            {imagem && <SpanEstilizado imagem={listaDeImagens[imagem as keyof IImagens]} />}
            <TituloEstilizado alter={alter}>{children}</TituloEstilizado>
        </ContainerEstilizado>
    )
}

export default Titulo;