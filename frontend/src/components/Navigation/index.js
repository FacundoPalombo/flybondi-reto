import React from 'react'
import { StyledLink, Nav } from './styles'
import { MdHome, MdSearch, MdAirplanemodeActive } from 'react-icons/md'
export const Navigation = () => {
  return (
    <Nav>
      <StyledLink to='/'><MdHome size='30px'/> </StyledLink>
      <StyledLink to='/search'><MdSearch size='30px' /></StyledLink>
      <StyledLink to='/flights'><MdAirplanemodeActive size='30px' /></StyledLink>
    </Nav>
  )
}