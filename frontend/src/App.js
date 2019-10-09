import React from 'react';
import { Layout } from './components/Layout';
import { Router } from '@reach/router';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Search } from './pages/Search'
import { SearchFromOrigin } from './pages/SearchFromOrigin'
import { Flight } from './pages/Fligth'

export const App = () => {
  return (
    <Layout>
      <Router>
        <Home path="/"></Home>
        <Search path='/search' />
        <SearchFromOrigin path='/search/:originCode' />
        <Flight path='/search/:originCode/:destinationCode' />
        <NotFound default={true}></NotFound>
      </Router>
    </Layout>
  );
};
