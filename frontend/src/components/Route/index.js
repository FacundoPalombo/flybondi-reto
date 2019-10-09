import React, { useState } from 'react'
import { Loading } from '../Loading' 
import { Error } from '../Error' 
import { Card } from '../Card'
import { CardsWrapper } from '../CardsWrapper'
import { Article, StyledLink } from './styles'
import { Link } from '@reach/router'


export const Route = (props) => {
  const {
    loading,
    error,
    routes,
    children
  } = props
  const [isOrigin, setIsOrigin] = useState(false)
  const handleOrigin = e => {
    e.preventDefault()
    setIsOrigin(!isOrigin)
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
            <Article key={key}>
              <CardsWrapper 
              name={origin.description} 
              onClick={handleOrigin} 
              origin={origin.code}
              >
                {
                  origin.destinations.map((destination, key) => (
                    <StyledLink key={key} to={destination.code}>
                      <Card 
                      name={destination.description} 
                      origin={origin.code} 
                      destination={destination.code}
                      />
                    </StyledLink>
                  ))
                }
              </CardsWrapper>
            </Article>
          )
        })
      }
    </ul>
    {children}
    </>
  )
}