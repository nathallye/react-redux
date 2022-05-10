export default function Jsx() {
  const a = 2
  const b = 3
  const subtitulo = <h2>Teste</h2>
  
  return (
    <div>
      <h1>JSX é um conceito central</h1>
      {subtitulo} {/* acessando o trecho JSX da constante subtitulo */}
      <h3>{a * b}</h3> {/* vai ser feito a multiplicação e o resultado vai ser renderizado em tela */}
    </div>
  )
}