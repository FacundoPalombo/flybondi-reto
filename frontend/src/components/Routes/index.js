import React from 'react'
import { Loading } from '../Loading' 
import { Error } from '../Error' 
import { Card } from '../Card'
import { Link } from '@reach/router'

export const Routes = (props) => {
  const {
    loading,
    error,
    routes,
    children
  } = props
  console.log(loading,error,routes)

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
        routes.map(origin => {
          return (
            <li>
              <Link to={`${origin.code}`}>
                <Card name={origin.description} origin={origin.code} />
              </Link>
            </li>
          )
        })
      }
    </ul>
    {children}
    </>
  )
}