import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocalApi } from '../hooks/useLocalApi'
import { Loading } from '../components/Loading'
import { Flight } from '../components/Flight'
export const Flights = () => {
  const [data,loading] = useLocalApi('/api/mocks')
  return(
    <>
    {
      loading ? 
      <Loading/> :
      <Flight {...data}/>
    }
    </>
  )
}