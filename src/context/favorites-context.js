import React, {useState, createContext, useEffect} from 'react'

export const FavoritesContext = createContext()

export const FavoritesProvider = props => {
  const [favorites, setFavorites] = useState(() => {
    const localData = localStorage.getItem('favorites')
    return localData ? JSON.parse(localData) : []
  })
  
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  },[favorites])

  return (
    <FavoritesContext.Provider value={[favorites,setFavorites]}>
      {props.children}
    </FavoritesContext.Provider>
  )
}