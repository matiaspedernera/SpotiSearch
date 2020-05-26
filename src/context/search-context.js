import React, { useState, createContext } from 'react'

export const SearchContext = createContext()

export const SearchProvider = props => {
  const [results, setResults] = useState('r')

  return (
    <SearchContext.Provider value={[results, setResults]}>
      {props.children}
    </SearchContext.Provider>
  )
} 