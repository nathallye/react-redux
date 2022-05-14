import Layout from "../../components/Layout"

import { useRouter } from "next/router"

export default function ClientePorCodigo(props) {
  const router = useRouter()
  // console.log(router)
  
  return (
    <Layout titulo="Navegação dinâmica">
      <span>Código = {router.query.codigo}</span>
    </Layout>
  )
}