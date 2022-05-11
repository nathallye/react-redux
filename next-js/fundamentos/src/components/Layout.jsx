import styles from "../styles/Layout.module.css"

import Link from "next/link"

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.cabecalho}>
        <h1>{props.titulo ?? "Mais um exemplo"}</h1>
        <Link href="/">Voltar</Link>
      </div>
      <div className={styles.conteudo}>
        {props.children}
      </div>
    </div>
  )
}