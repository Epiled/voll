import './App.css';
import Avaliacao from './components/Avaliacao';
import Botao from './components/Botao';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Grafico from './components/Grafico';
import Rodape from './components/Rodape';
import Subtitulo from './components/Subtitulo';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo';
import useDadosConsulta from './useDadosConsulta';
import useDadosProfissionais from './useDadosProfissionais';

function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissionais();

  if (consultasErro || profissionaisErro) {
    console.log('Ocorreu um erro na requisição');
  }

  return (
    <>
      <Cabecalho />
      <Container>

        <Titulo alter={true}>Área Administrativa</Titulo>
        <Botao>Cadastrar especialista</Botao>

        <Titulo imagem="consulta">Consultas do Dia</Titulo>
        <Tabela consultas={consultas} />
        <Botao>Ver mais</Botao>

        <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais} />

        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Avaliacao profissionais={profissionais} />

      </Container>
      <Rodape />
    </>
  );
}

export default App;
