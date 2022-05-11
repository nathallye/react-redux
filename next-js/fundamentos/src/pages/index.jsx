import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "100vh"
    }}>
      <Navegador destino="/estiloso" texto="Estiloso" cor="cadetblue"/>
      <Navegador destino="/exemplo" texto="Exemplo"/>
      <Navegador destino="/jsx" texto="JSX" cor="brown"/>
      <Navegador destino="/navegacao" texto="Navegação #01" cor="green"/> {/*como se destino fosse assim: destino="/navegacao/index"*/}
    </div>
  )
}