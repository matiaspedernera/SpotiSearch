import React, { useState, useEffect } from 'react'
import config from '../../config/config'

const AlbumTitle = ({albumId}) => {

  const Auth = config.Auth

  const myHeaders = {
    'Authorization': `Bearer ${Auth}`,
    'Content-Type': 'application/json'
  }

  const [name, setName] = useState('')
  const [artist, setArtist] = useState('')
  const [logo, setLogo] = useState('')
  const [year, setYear] = useState('')

  const getAlbum = async () => {
    const response = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
      headers: myHeaders
    })
    const data = await response.json()
    setName(data.name)
    setArtist(data.artists[0].name)
    setLogo(data.images[0].url)
    setYear(data.release_date.slice(0,-6))
  }

  useEffect(() => {
    getAlbum()
  }, [])
  return (
    <>
      <div className="album">
        <img className="album__logo" src={logo} alt={name} />
        <h2 className="album__name">{name}</h2>
        <h3 className="album__artist">{artist} - {year}</h3>
      </div>
      <p className="index">Home > Artists > {artist} > {name}</p>
    </>
  )
}

export default AlbumTitle