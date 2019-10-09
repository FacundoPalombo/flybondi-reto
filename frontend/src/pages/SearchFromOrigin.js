import React from 'react'
import { useAirportsData } from '../hooks/useAirportsData'
import { Route } from '../components/Route'
export const SearchFromOrigin = ({
  code
}) => {
  const {loading,error,routes} = useAirportsData()
  const airports = {
    loading,
    error,
    routes: routes.filter((routes) => routes.code == code)
  }
  return(
    <Route {...airports}>
      Hello route!
    </Route>
  )
}