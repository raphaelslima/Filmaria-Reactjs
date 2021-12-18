import { Link } from 'react-router-dom'

import '../../global.css'
import './notFound.css'

function NotFound() {
  return (
    <div className="container">
      <section className="warming">
        <h1>Página não encontrada</h1>
        <Link to="/">Clique aqui para voltar para a home</Link>
      </section>
    </div>
  )
}

export default NotFound
