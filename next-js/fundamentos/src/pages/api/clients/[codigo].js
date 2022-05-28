export default function handler(req, res) {

  const codigo = req.query.codigo

  res.status(200).json({
    codigo: req.query.codigo,
    nome: `Nathallye ${codigo}`,
    email: `nathallye${codigo}@gmail.com`
  })
}