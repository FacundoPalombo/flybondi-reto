import React from 'react'
import { Container } from './styles'
import { Title, Span } from '../../assets/styles/styles'
import { DummyImage } from '../DummyImage'
export const Card = ({
  name,
  destination,
  origin,
  children
}) => {
  return (
    <Container>
      <Title>{name} ({origin})</Title>
      <DummyImage size={'64px'}/>
      <Span>{destination}</Span>
      {children}
    </Container>
  )
}