import { Link } from 'react-router-dom'

import '../../global.css'
import './notFound.css'

function NotFound() {
  return (
    <div className="warming">
      <h1>Página não encontrada</h1>
      <Link to="/" className="btn-notFound">
        Clique aqui para voltar para a home
      </Link>
    </div>
  )
}

export default NotFound
