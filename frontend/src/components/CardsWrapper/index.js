import React, { useState } from 'react'
import { Container } from './styles'
import { Title, Span } from '../../assets/styles/styles'
import { MdExpandMore, MdExpandLess} from 'react-icons/md'

export const CardsWrapper = ({
  name,
  destination,
  origin,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }
  return (
    <Container>
      <Title>{name} ({origin})</Title>
      {
        isOpen ? 
        <MdExpandLess size='30px'onClick={handleOpen} /> 
        : 
        <MdExpandMore size='30px' onClick={handleOpen} />
      }
      {isOpen ? children : null}
    </Container>
  )
}