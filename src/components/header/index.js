import React from 'react';
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <header className="site-header">
      <Link to="/">
        <img className="site-header__logo" src="./logo/musica2.svg" alt="logo" />
      </Link>
    </header>
  )
}

export default Header