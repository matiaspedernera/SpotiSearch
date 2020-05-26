import React from 'react'
import Layout from '../../components/layout'
import SearchResultsTitle from '../../components/search-results-title'
import SearchResultsArtists from '../../components/search-results-artists'
import './search-results.scss'

const SearchResults = () => {
  return (
    <Layout >
      <SearchResultsTitle />
      <SearchResultsArtists />
    </Layout>
  )
}

export default SearchResults