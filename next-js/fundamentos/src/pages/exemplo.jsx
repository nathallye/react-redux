import Layout from "../components/Layout"
import Cabecalho from "../components/Cabecalho";

export default function Exemplo() {
  return (
    <Layout titulo="Usando Componente">
      <Cabecalho titulo="Título 1"/>
      <Cabecalho titulo="Título 2"/>
    </Layout>
  )
}