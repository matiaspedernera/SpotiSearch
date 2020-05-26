import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '../../context/search-context'
import config from '../../config/config'

const SearchResultsArtists = () => {

  const [results, ] = useContext(SearchContext)

  const Auth = config.Auth

  const myHeaders = {
    'Authorization': `Bearer ${Auth}`,
    'Content-Type': 'application/json'
  }

  const [artists, setArtists] = useState([])

  const getResults = async () => {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${results}&type=artist&limit=8`, {
      headers: myHeaders
    })
    const data = await response.json()
    setArtists(data.artists.items)
  }

  useEffect(() => {
    getResults()
  })

  return (
    <section className="artists-container">
      {artists.map(artist => (
        <Link to={`/artist/${artist.id}`} className="artist" key={artist.id}>
          <img src={artist.images[0] ? artist.images[0].url : './logo/cantante.svg'} alt={artist.name} className="artist__logo" />
          <h3 className="artist__name">{artist.name}</h3>
        </Link>
      ))}
    </section>
  )
}

export default SearchResultsArtists
