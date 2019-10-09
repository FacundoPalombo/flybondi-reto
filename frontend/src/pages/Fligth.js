import React, { useState } from 'react'
import { Flight as FlightComponent } from '../components/Flight'

export const Flight = ({
  uri
}) => {
  const [flight, setFlight] = useState({})
  console.log(uri)
  return(
    <FlightComponent {...flight} />
  )
}