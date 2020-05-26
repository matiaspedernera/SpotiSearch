import React, { useContext, useEffect, useState } from 'react'
import FavoritesArray from '../../services/favorites/favoritesMock.json'
import { FavoritesContext } from '../../context/favorites-context'
import config from '../../config/config'

const Favorites = () => {

  //INTENTO DE USAR FAVORITES CON CONSOLE.LOG
  const [favorites, ] = useContext(FavoritesContext)
  const [data, setData] = useState([])

  const Auth = config.Auth

  const myHeaders = {
    'Authorization': `Bearer ${Auth}`,
    'Content-Type': 'application/json'
  }


  useEffect(() => {
    favorites.map(async trackId => {
      const res = await fetch(`	https://api.spotify.com/v1/tracks/${trackId}`, {
        headers: myHeaders
      })
      const dat = await res.json()
      console.log(dat)
      setData([...data, dat])
    })
  }, [])

  return (
    <section className="favorites-section">
      <h2 className="favorites-section__title">Favorites Songs</h2>
      <div className="favorites-section__container">
        {favorites.map(fav => (
          <article className="favorite" key={fav.id}>
            <img src={fav.album.images[0].url} alt="logomusica" className="favorite__logo" />
            <h3 className="favorite__title">{fav.name}</h3>
            <h4 className="favorite__artist">Artist: {fav.artists[0].name}</h4>
            <h5 className="favorite__album">Album: {fav.album.name}</h5>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Favorites