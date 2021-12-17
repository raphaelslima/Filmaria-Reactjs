import axios from 'axios'

////Base URL > https://sujeitoprogramador.com/r-api/?api=filmes/
// Rota: r-api/?api=filmes/ (todos os filmes)
// Rota: r-api/?api=filmes/id (id filme)

/* Por meio do axios fazemos requisições na api, temos a url base e expotamos isso para as demais pagínas */
const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com'
})

export default api
