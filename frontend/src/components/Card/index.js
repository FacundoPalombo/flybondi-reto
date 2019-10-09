import React from 'react'
import { Container, Svg } from './styles'
import { Title, Span } from '../../assets/styles/styles'
export const Card = ({
  name,
  destination,
  origin,
  children
}) => {
  return (
    <Container>
      <Title>{name} ({origin})</Title>
      <Svg size='32px'/>
      <Span>Destination: {destination}</Span>
      {children}
    </Container>
  )
}