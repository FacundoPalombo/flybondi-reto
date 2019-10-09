import React from 'react'
import { Loading } from '../Loading' 
import { Error } from '../Error' 
import { Card } from '../Card'
import { CardsWrapper } from '../CardsWrapper'
import { Item, StyledLink } from './styles'
import { MdArrowForward } from 'react-icons/md'


export const Routes = (props) => {
  const {
    loading,
    error,
    routes,
    isOpen,
    children
  } = props
  const handleOrigin = e => {
    e.preventDefault()
    
  }
  return (
    <>
    {
      loading && <Loading/>
    }
    {
      error && <Error message={error}/>
    }
    <ul>
      {
        routes.map((origin,key) => {
          return (
            <Item key={key}>
              <StyledLink to={origin.code}>
                <MdArrowForward style={{
                  margin: 'auto'
                }} size='50px'/> 
              </StyledLink>
              <CardsWrapper 
              name={origin.description} 
              onClick={handleOrigin} 
              origin={origin.code}
              >
                {
                  origin.destinations.map((destination,key) => (
                    <StyledLink key={key} to={`${origin.code}/${destination.code}`}>
                      <Card 
                      isOpen={isOpen} 
                      name={destination.description} 
                      origin={origin.code} 
                      destination={destination.code}
                      />
                    </StyledLink>
                  ))
                }
              </CardsWrapper>
            </Item>
          )
        })
      }
    </ul>
    {children}
    </>
  )
}