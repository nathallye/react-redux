import Link from "next/link"

export default function Layout(props) {
  return (
    <div>
      <Link href="/">Voltar</Link>
      {props.children}
    </div>
  )
}