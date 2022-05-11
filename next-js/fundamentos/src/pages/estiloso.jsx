import Layout from "../components/Layout"
import styles from "../styles/Estiloso.module.css"

export default function Estiloso() {
  return (
    <Layout>
      <div className={styles.roxo}>
        <h1>Componente para teste de CSS Modularizado</h1>
      </div>
    </Layout>
  )
}