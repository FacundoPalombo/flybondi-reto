import React from 'react'
import { A, Nav } from './styles'
export const Navigation = () => {
  return (
    <Nav>
      <A to='/'>Home</A>
      <A to='/flights'>Flights</A>
      <A to='/search'>Search</A>
    </Nav>
  )
}