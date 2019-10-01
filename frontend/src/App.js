import React from 'react'
import { Layout } from './components/Layout'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Flights } from './pages/Flights'
import { Search } from './pages/Search'
export const App = () => {
  return (
  <Layout>
    <Router>
      <Home path='/'></Home>
      <Home path='/home'></Home>
      <Flights path='/flights'></Flights>
      <Search path='/search'></Search>
      <NotFound default={true}></NotFound>
    </Router>
  </Layout>
    )
}