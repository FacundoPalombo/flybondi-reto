import React from 'react'
import { StyledArticle } from './styles'
export const Error = ({ message }) => {
  return(
    <StyledArticle>
      <h1>ERROR!{message}</h1>
    </StyledArticle>
  )
}