//rafce + enter
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { SingleCoin } from '../config/api';
//import CryptoContext from '../context/CryptoContext';

const CoinPage = () => {
  const { id } = useParams;

  //const { currency, symbol } = CryptoContext(); //from CryptoContext.js

  const [coin, setCoin] = useState();

  /*-----------------Get API or Coin Object ---------------*/
  const fetchCoin = async () => {
    const {coinData} = await axios.get(SingleCoin(id));

    setCoin(coinData);
  }

  console.log(coin);

  useEffect(() => {
    fetchCoin()
  })
  /*-----------------Get API or Coin Object ---------------*/

  
  return (
    <React.Fragment>
        
        <div>CoinPage</div>
    </React.Fragment>
  )
}

export default CoinPage;