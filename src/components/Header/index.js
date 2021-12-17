import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'
import '../../global.css'

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        Filmaria
      </Link>

      <Link to="/favoritos" className="favoritos">
        Salvos
      </Link>
    </header>
  )
}

export default Header
