//rafce + enter

import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { ChartService } from '../services/ChartService';

const Markets = () => {

  // GET: Request URL: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  // Or, you could use: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
  //      I placed "/coins/markets" in <Route><Route/> in App.js and <Link to={'/coins/markets'}></Link> in NavBar.js

  let [state, setState] = useState({
    loading: false,
    markets: [],
    errorMessage: ''
  }); 

  const fetchMarkets = async () => {
    try {
      setState({...state, loading: true}); //Only changes "loading" to true while leaving "markets" & "errorMessage" unchanged
      let response = await ChartService.getAllMarkets(); // get "markets" data from API
      setState({
        ...state,
        loading: false,
        trending: response.data,
      }); //Changes "loading" to false & "markets" is loaded with "response.data" but "errorMessage" is unchanged.

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
    fetchMarkets();
  }, []) 

  console.log(state.markets); //SECOND METHOD OF PRINTING RESULTS FROM API.
  
  return (
    <React.Fragment>
        <section>
            <Container>
                <Row>
                    <Col>
                    <p className='display-5 fst-italic fw-bold text-color text-center'>Markets</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='lead fst-italic fw-bold text-success'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus libero esse temporibus laudantium consequuntur ad facilis reprehenderit porro. Voluptates libero neque dolorum vel est animi sequi sint dolores tenetur!
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col>
                        Market Data
                    </Col>
                </Row>
            </Container>
        </section>
    </React.Fragment>
  )
}

export default Markets;