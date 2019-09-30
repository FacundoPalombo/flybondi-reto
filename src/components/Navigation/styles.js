import styled from 'styled-components'
import { Link } from '@reach/router'
import { SUNSET } from '../../assets/styles/color'
export const Nav = styled.nav`
display: flex;
align-content: center;
justify-content: center;


`

export const A = styled(Link)`
  text-align:center;
  &:hover {
    text-shadow: 0 0 0 rgba(0,0,0,0.3);
  }
  &:active {
    box-shadow: 0 0 0 #${SUNSET};
  }
`