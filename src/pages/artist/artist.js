import React from 'react';
import LayoutSearcher from '../../components/layout-searcher'
import ArtistTitle from '../../components/artist-title'
import ArtistAlbum from '../../components/artists-albums'
import './artist.scss'

const Artist = ({match}) => {
  return (
    <LayoutSearcher>
      <ArtistTitle artistId={match.params.id}/>
      <ArtistAlbum artistId={match.params.id}/>
    </LayoutSearcher>
  )
}

export default Artist