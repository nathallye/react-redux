import styles from "../styles/Layout.module.css"

import Link from "next/link"

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.cabecalho}>
        <Link href="/">Voltar</Link>
      </div>
      <div className={styles.conteudo}>
        {props.children}
      </div>
    </div>
  )
}