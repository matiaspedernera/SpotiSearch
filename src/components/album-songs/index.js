import React, { useState, useEffect, useContext } from 'react'
import config from '../../config/config'
import { Howl } from 'howler'
import {FavoritesContext} from '../../context/favorites-context'

const AlbumSongs = ({ albumId }) => {

  const [songs, setSongs] = useState([{}])
  const [favorites, setFavorites] = useContext(FavoritesContext)
  const [favIcon, setFavIcon] = useState(false)
  const starIcon = favIcon? 'https://svgshare.com/i/LWt.svg' : 'https://svgshare.com/i/LPg.svg'

  const Auth = config.Auth

  const myHeaders = {
    'Authorization': `Bearer ${Auth}`,
    'Content-Type': 'application/json'
  }

  const songPlay = (src) => {
    const sound = new Howl({
      src,
      volume: 0.2,
      html5: true
    })
    sound.play()
  }


  const getSongs = async () => {
    const response = await fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
      headers: myHeaders
    })
    const data = await response.json()
    setSongs(data.items)
    console.log(data.items)
  }

  useEffect(() => {
    getSongs()
  }, [])

  const setFavorite = async (trackId) => {
    setFavIcon(!favIcon)
    const res = await fetch(`	https://api.spotify.com/v1/tracks/${trackId}`, {
      headers: myHeaders
    })
    const dat = await res.json()
    setFavorites([...favorites, dat])
  }

  return (
    <section className="songs-container">
      <h3 className="songs-container__CD">CD 1</h3>
      {songs.map(song => (
        <article className="songs-container__list" key={song.id}>
          <p  className="songs-container__list-title" onClick={() => songPlay(song.preview_url)}>{song.name}</p>
          <img  className="songs-container__list-fav" onClick={() => setFavorite(song.id)} src={starIcon} alt="fav" />
        </article>
      ))}
    </section>
  )
}

export default AlbumSongs