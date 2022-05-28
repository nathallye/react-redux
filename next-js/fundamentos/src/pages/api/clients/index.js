export default function handler(req, res) {
  if(req.method === 'GET') {
    handleGet(req, res)
  } else {
    res.status(405).send()
  }
}

function handleGet(re, res) {
  res.status(200).json({
    id: 3,
    nome: 'Nathallye',
    age: 23
  })
}