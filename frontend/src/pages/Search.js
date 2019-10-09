import React, { useState, useEffect} from 'react';
import { Link } from '@reach/router';
import { Section, Article, Main } from '../assets/styles/styles'
import axios from 'axios'
import { Routes } from '../components/Routes'

const useAirportsData = () =>{
  const [routes, setRoutes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => {
    setLoading(true)
    axios.get('/api/mocks/routes.json')
      .then(({data}) => setRoutes(data.routes))
      .catch((e) => setError(e.message))
    setLoading(false)
  },[])
  return {loading, error, routes}
}

export const Search = () => {
  const [isOrigin, setIsOrigin] = useState(true);
  const airportData = useAirportsData()
  return (
    <Main>
      <Article>
        <h1>Select your {isOrigin ? 'origin' : 'destination'}</h1>
        <Section>
          <p>
            Here should be a card approach list of all available origin
            airports. When an origin airport is selected, the list should
            display all available destination for given selection. The card
            should have:
          </p>
          <Routes {...airportData}>
            Hello routes!
          </Routes>
        </Section>
        <Link to="/flights">
        Start your journey
        </Link>
      </Article>
    </Main>
  );
}
