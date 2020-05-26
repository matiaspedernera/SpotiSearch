import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { SearchContext } from '../../context/search-context'

const SearchInput = ({ placeholder, className, divClass, history }) => {

  const [ , setResults] = useContext(SearchContext)
  const [search, setSearch] = useState('')

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const saveValue = e => {
    e.preventDefault()
    setResults(search)
    setSearch('')
    history.push('/results')
  }

  return (
    <form className={divClass} onSubmit={saveValue}>
      {/* <i className="fa fa-search icon"></i> */}
      <input required={true}
        value={search}
        onChange={updateSearch}
        type="text"
        placeholder={placeholder}
        className={className} />
    </form>
  )
}

export default withRouter(SearchInput)
