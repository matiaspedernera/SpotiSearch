import React, {useContext} from 'react'
import SearchInput from '../search-input'
import { SearchContext } from '../../context/search-context'

const SearchResultsTitle = () => {

  const [results, ] = useContext(SearchContext)

  return (
    <div className="container">
      <h1 className="container__title">Artist</h1>
      <h2 className="container__subtitle">{`You are currently searching: "${results}"`}</h2>
      <SearchInput placeholder="Search for your favorite artist here" className="search__input" divClass="search"/>
      <p className="container__index">Home > Artists</p>
    </div>
  )
}

export default SearchResultsTitle