//rafce + enter

import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import { useParams } from 'react-router-dom';

const useAxios = () => {
  
  // GET: 'https://api.coingecko.com/api/v3/search/trending'
  axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  //let { id } = useParams();

  const fetchData = async (param) => {
    try {
        setLoading(true);
        const result = await axios(param);
        setResponse(result.data);
    }
    catch(err) {
        setError(err);
    }
    finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>useAxios</div>
  )
}

export default useAxios;