import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

import '../../global.css'
import './filme.css'

import api from '../../services/api'

function Filme() {
  const { id } = useParams()
  const history = useHistory()

  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilme() {
      // Chama a API
      const response = await api.get(`/r-api/?api=filmes/${id}`)

      // Se o usuário tentar acessar uma rota de um filme que não existe ele é redirecionado para a home, com o hook useHistory
      if (response.data.length === 0) {
        history.replace('/')
        return
      }

      // Seta o filme na state
      setFilme(response.data)

      // Seta false para controlador que está carregando o filme
      setLoading(false)
    }

    loadFilme()
  }, [history, id])

  function saveMovie() {
    const myMovieList = localStorage.getItem('movies')

    let saveMovies = JSON.parse(myMovieList) || []

    const hasMovie = saveMovies.some(movie => movie.id === filme.id)

    if (hasMovie) {
      alert(`Você já possui ${filme.nome} salvo em sua lista.`)
      return
    } else {
      saveMovies.push(filme)
      localStorage.setItem('movies', JSON.stringify(saveMovies))
    }
  }

  // Mostra mensagem para o usuário que está carregando o filme
  if (loading) {
    return <div className="loadMovie">CARREGANDO FILME...</div>
  }

  // Depois que carregar o filme, mostra os dados dele
  else {
    return (
      <div>
        <div className="container">
          <article className="filme" key={filme.id}>
            <h2>{filme.nome}</h2>
            <div className="img">
              <img src={filme.foto} alt={filme.nome} />
            </div>
            <p>{filme.sinopse}</p>
          </article>
        </div>
        <div className="buttons">
          <a onClick={saveMovie}>Salvar</a>

          <a
            target="_blank"
            href={`https://www.youtube.com/results?search_query=${filme.nome} trailer`}
          >
            Trailer
          </a>
        </div>
      </div>
    )
  }
}

export default Filme
