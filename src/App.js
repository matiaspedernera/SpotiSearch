import React from 'react';
import Home from './pages/home/home';
import SearchResults from './pages/search-results/search-results';
import Artist from './pages/artist/artist';
import Album from './pages/album/album'
import { SearchProvider } from './context/search-context'
import { FavoritesProvider } from './context/favorites-context'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <SearchProvider>
      <FavoritesProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/results" component={SearchResults} />
            <Route path="/artist/:id" component={Artist} />
            <Route path="/album/:id" component={Album} />
          </Switch>
        </Router>
      </FavoritesProvider>
    </SearchProvider>
  )
}
export default App;
