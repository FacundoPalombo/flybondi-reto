import React from 'react'
import {Helmet} from 'react-helmet'
export const Layout = ({children, title = 'Viajes al mejor precio', subtitle = 'Con Flybondi podés comprar vuelos al mejor precio desde tu casa.'}) => {
  return(
    <>
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={subtitle}/>
    </Helmet>
    {children}
    </>
  )
}