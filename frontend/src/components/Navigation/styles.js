import styled from 'styled-components'
import { Link } from '@reach/router'
import { SUNSET } from '../../assets/styles/color'

export const Nav = styled.nav`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3,1fr);
  background: grey;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: center;
  justify-self: center;
  text-align:center;
  width: 100%;
  &[aria-current] {
    color: blue;
  }
  &:hover {
    text-shadow: 0 0 0 rgba(0,0,0,0.3);
  }
  &:active {
    box-shadow: 0 0 0 #${SUNSET};
  }
`