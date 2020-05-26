import React, { useState, useEffect } from 'react'
import config from '../../config/config'

const ArtistTitle = ({ artistId }) => {

  const Auth = config.Auth

  const myHeaders = {
    'Authorization': `Bearer ${Auth}`,
    'Content-Type': 'application/json'
  }

  const [name, setName] = useState('')
  const [genres, setGenres] = useState([])
  const [logo, setLogo] = useState([{}])

  const getArtist = async () => {
    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
      headers: myHeaders
    })
    const data = await response.json()
    setName(data.name)
    setGenres(data.genres)
    setLogo(data.images)
  }

  useEffect(() => {
    getArtist()
  }, [])

  return (
    <>
      <div className="artist">
        <img className="artist__logo" src={logo[0]? logo[0].url : "https://svgshare.com/i/LR9.svg"} alt={name} />
        <h2 className="artist__name">{name}</h2>
        <h3 className="artist__genre">{genres[0]}</h3>
      </div>
      <p className="index">Home > Artists > {name}</p>
    </>
  )
}

export default ArtistTitle