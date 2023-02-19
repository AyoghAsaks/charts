//rafce + enter


import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ChartService } from '../services/ChartService';
import axios from 'axios';
//import axios from '../services/HistoryService';

const HistoryChart = () => {

    //let { bitcoin } = useParams();

    const HISTORY_URL = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily`;

    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
   
    useEffect(() => {
      setLoading(true);
      axios.get(HISTORY_URL)
        .then((response) => {
            setHistory(response.data);
            setLoading(false);
            console.log(response.data)
        })
        .catch((error) => {
          setLoading(false);
          setErrMsg(error.message);
        })
    }, []);


    /**********************************Good Code 1
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

   
    useEffect(() => {
      setLoading(true);
      axios.get(HISTORY_URL)
        .then((response) => {
            setHistory(response.data);
            setLoading(false);
            console.log(response.data)
        })
        .catch((error) => {
          setLoading(false);
          setErrMsg(error.message);
        })
    }, [history]);
    *******************************************/
    

    /*********** Good Code 2
    const loadHistory = async () => {
      try {
        let response = await axios.get(
          HISTORY_URL
        );
        console.log(response.data);
        setSuccess(true);
      }
      catch(err) {
        if (!err?.response) {
          setErrMsg('No Server Response');
        }
      
        else {
          setErrMsg('Registration Failed');
        }
      }
    };
    useEffect(() => {
      loadHistory();
    }, []);

    console.log(history);
    ***********/



    //"state" is an object and we define it as follows: state = {loading: false, contacts: [], errorMessage: ''}
    /*
    let [state, setState] = useState({
      loading: false,
      history: [],
      errorMessage: ''
    }); 
    */
  
    /*----------------------------------SECTION: Get One Data from ContactService.js using contactId or id------------------------*/
    //"loadHistory" is an async function
    /*
    const loadHistory = async () => {
      try {
        setState({...state, loading: true}); //Only changes "loading" to true while leaving "history" & "errorMessage" unchanged
        let response = await ChartService.getPastPrices(id); // get "history" data from API
        console.log(response);
        setState({
          ...state,
          loading: false,
          history: response.data
        }); //Changes "loading" to false & "history" is loaded with "response.data" but "errorMessage" is unchanged.
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
     loadHistory();
  }, [state.history])

  console.log(state.history);
  */

  return (
    <React.Fragment>
        <section>
            <Container>
                <Row>
                    <Col>
                        HistoryChart has the link called "Chart"
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col>
 
                    </Col>
                </Row>
            </Container>
        </section>
    </React.Fragment>
  )
}

export default HistoryChart;