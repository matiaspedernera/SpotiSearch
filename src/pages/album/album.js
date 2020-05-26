import React from 'react';
import LayoutSearcher from '../../components/layout-searcher'
import AlbumTitle from '../../components/album-title'
import AlbumSongs from '../../components/album-songs';
import './album.scss'

const Album = ({match}) => {
  return (
    <LayoutSearcher>
      <AlbumTitle albumId={match.params.id}/>
      <AlbumSongs albumId={match.params.id}/>
    </LayoutSearcher>
  )
}

export default Album