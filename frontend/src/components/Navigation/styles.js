import styled from 'styled-components'
import { Link } from '@reach/router'
import { SUNSET } from '../../assets/styles/color'
export const Nav = styled.nav`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  background: grey;


`

export const A = styled(Link)`
  text-decoration: none;
  align-self: center;
  justify-self: center;
  text-align:center;
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