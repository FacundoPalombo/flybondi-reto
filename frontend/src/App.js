import React from 'react';
import { Layout } from './components/Layout';
import { Router } from '@reach/router';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Search } from './pages/Search'
import { SearchFromOrigin } from './pages/SearchFromOrigin'

export const App = () => {
  return (
    <Layout>
      <Router>
        <Home path="/"></Home>
        <Search path='/search' />
        <SearchFromOrigin path='/search/:code' />
        <NotFound default={true}></NotFound>
      </Router>
    </Layout>
  );
};
