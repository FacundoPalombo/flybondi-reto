import {useState, useEffect} from 'react';
import axios from 'axios';

export const useLocalApi = async (url = '/api') => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false)
  try{
    useEffect(() => {
      setLoading(true)
      axios.get(url)
      .then(res => {
        setLoading(false)
        setData(res.data)
      })
    },[])
  }catch (e) {
    console.error(e)
  }
  return [data,loading]
}