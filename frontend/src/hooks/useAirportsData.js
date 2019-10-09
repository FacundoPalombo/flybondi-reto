import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAirportsData = () =>{
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
