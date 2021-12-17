import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import '../../global.css'
import './home.css'

// State que armazena os filmes
function Home() {
  const [filmes, setFilmes] = useState([])

  // Faz a requisição da API dos dados dos filmes e o seta na state
  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('/r-api/?api=filmes/')
      setFilmes(response.data)
    }

    loadFilmes()
  }, [])

  /* Carrega todos todos os filmes e quando clica em algum filme vai para a página do filme*/
  return (
    <div className="container">
      <div className="listaFilmes">
        {filmes.map(filmes => {
          return (
            <article key={filmes.id}>
              <h2 className="nomeFilme">{filmes.nome}</h2>
              <img className="capaFilme" src={filmes.foto} alt={filmes.nome} />
              <Link to={`/filme/${filmes.id}`} className="btnAcessar">
                Acessar
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home
