import Link from "next/link"

export default function Inicio() {
  return (
    <div>
      <Link href="/estiloso">
        Estilo
      </Link>
      <br />
      <Link href="/jsx">
        Jsx
      </Link>
    </div>
  )
}