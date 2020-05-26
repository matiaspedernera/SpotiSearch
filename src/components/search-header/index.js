import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchInput from '../search-input'

const SearchHeader = () => {

  const [openSearch, setOpenSearch] = useState(true)
  const searchDisplay = openSearch ? "block" : "none"
  const iconSearch = openSearch ? 'https://svgshare.com/i/LVu.svg' : 'https://svgshare.com/i/LWD.svg'

  return (
    <header className="site-search-header">
      <nav className="site-search-header__nav">
        <Link to="/">
          <img className="site-search-header__nav-logo" src={'https://svgshare.com/i/LNj.svg'} alt="logo" />
        </Link>
        <img onClick={() => setOpenSearch(!openSearch)} className="site-search-header__nav-button" src={iconSearch} alt="menu"></img>
      </nav>
      <div className="site-search-header__search-container" style={{display: searchDisplay}}>
        <SearchInput className="site-search-header__search-container-input" placeholder="Search for another artist" divClass="search-in-header" />
      </div>
    </header>
  )
}

export default SearchHeader