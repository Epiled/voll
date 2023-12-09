import useFetch from "./useFetch"

const useDadosAvaliacoes = () => {
  return useFetch({url:'avaliacoes'});
}

export default useDadosAvaliacoes;