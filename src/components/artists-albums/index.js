import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config/config'

const ArtistAlbums = ({ artistId }) => {

  const Auth = config.Auth

  const myHeaders = {
    'Authorization': `Bearer ${Auth}`,
    'Content-Type': 'application/json'
  }

  const [albums, setAlbums] = useState([])

  const getResults = async () => {
    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?limit=8`, {
      headers: myHeaders
    })
    const data = await response.json()
    setAlbums(data.items)
  }

  useEffect(() => {
    getResults()
  }, [])

  return (
    <section className="albums-container">
      {albums.map(album => (
        <Link to={`/album/${album.id}`} className="album" key={album.id}>
          <img src={album.images[0].url} alt={album.name} className="album__picture" />
          <h3 className="album__name">{album.name}</h3>
          <h4 className="album__year">{album.release_date.slice(0,-6)}</h4>
        </Link>
      ))}
    </section>
  )
}

export default ArtistAlbums

/*
  < section className = "albums-container" >
  {
    albums.map(album => (
      <article className="album">
        <img src={album.images[0].url} alt={album.name} className="album__picture" />
        <h3 className="album__name">{album.name}</h3>
        <h4 className="album__year">{album.release_date}</h4>
      </article>
    ))
  }
    </section > */