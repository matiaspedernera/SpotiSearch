import React from 'react';
import Layout from '../../components/layout';
import Intro from '../../components/intro'
import SearchInput from '../../components/search-input'
import Favorites from '../../components/favorites'
import './home.scss'

const Home = () => {
  return (
    <Layout >
      <Intro />
      <SearchInput placeholder="Type the name of your favorite artist" className="search__input" divClass="search"/>
      <Favorites />
    </Layout>
  )
}

export default Home