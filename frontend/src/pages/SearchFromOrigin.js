import React from 'react'
import { useAirportsData } from '../hooks/useAirportsData'
import { Route } from '../components/Route'
export const SearchFromOrigin = ({
  originCode
}) => {
  const {loading,error,routes} = useAirportsData()
  const airports = {
    loading,
    error,
    routes: routes.filter((routes) => routes.code == originCode)
  }
  return(
    <Route {...airports}>
    </Route>
  )
}