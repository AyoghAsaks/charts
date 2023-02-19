//rafce + emter

import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ChartService } from '../services/ChartService';

const Trending = () => {

  // GET: 'https://api.coingecko.com/api/v3'
  //       I placed "/search/trending" in <Route><Route/> in App.js and <Link to={'/search/trending'}></Link> in NavBar.js

  let [state, setState] = useState({
    loading: false,
    trending: [],
    errorMessage: ''
  });

  const fetchCoins = async () => {
    try {
      setState({...state, loading: true}); //Only changes "loading" to true while leaving "trending" & "errorMessage" unchanged
      let response = await ChartService.getAllCoins(); // gets "coin" data from API/Backend
      setState({
        ...state,
        loading: false,
        trending: response.data,
      }); //Changes "loading" to false & "trending" is loaded with "response.data" but "errorMessage" is unchanged.

      console.log(response.data); //FIRST METHOD OF PRINTING RESULTS FROM API
    }
    catch (error) {
      setState({
        ...state,
        loading: false,
        errorMessage: error.message
      }); //If there is an error, then "loading" is changed to false & "errorMessage" is changed from empty string with "error.message".
    }
  }
  
  
  useEffect(() => {
    fetchCoins();
  }, []) 

  console.log(state.trending); //SECOND METHOD OF PRINTING RESULTS FROM API

 
  return (
   <React.Fragment>
        <section>
            <Container>
                <Row>
                    <Col>
                        <p className='display-5 fst-italic fw-bold text-color'>Trending Coins</p>
                    </Col>

                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col>
                        Trending
                    </Col>
                </Row>
            </Container>
        </section>

        <section></section>
   </React.Fragment>
  )
}

export default Trending;