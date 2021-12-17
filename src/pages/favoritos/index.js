import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './favoritos.css'

function Favoritos() {
  // State responsavel por armazenar a lista de filmes favoritos.
  const [movie, setMovie] = useState([])

  //State resposanvel por ver se a lista está vazia;
  const [listMovieEmpty, setlistMovieEmpty] = useState(false)

  // Seta os dados do localStorage na state.
  useEffect(() => {
    const myMovieList = localStorage.getItem('movies')

    const movieList = JSON.parse(myMovieList)
    setMovie(movieList || [])

    // State que controla se não tiver filmes
    if (movie.length === 0) {
      setlistMovieEmpty(true)
      console.log(listMovieEmpty)
      return
    }

    console.log(movie.length)
  }, [])

  function handleDelete(id) {
    const filterMovie = movie.filter(item => {
      return item.id !== id
    })

    setMovie(filterMovie)
    localStorage.setItem('movies', JSON.stringify(filterMovie))
  }

  return (
    <div>
      <div className="container">
        <h1 className="title">Meus Filmes</h1>
        {movie.length === 0 && <h1>Você não possui filmes salvos</h1>}
        {movie.map(item => {
          return (
            <ul key={item.id} className="movieSaveList">
              <li>{item.nome}</li>
              <div className="btn">
                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                <a
                  onClick={() => {
                    handleDelete(item.id)
                  }}
                >
                  Excluir
                </a>
              </div>
            </ul>
          )
        })}
      </div>
    </div>
  )
}

export default Favoritos
