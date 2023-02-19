//rafce + enter

import { Reorder } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
//import { ChartService } from '../services/ChartService';
import axios from "./apiRankingTable/apiRankTable";


  const Ranking_Table = () => {


    //initialize variables
    /*********
    let [state, setState] = useState({
        loading: false,
        rankingTable: [],
        errorMessage: ''
    }); 
    **********/

    /**************************************************************************************************************************
    const fetchRankingTable = async () => {
        try {
            setState({...state, loading: true}); //Only changes "loading" to true while leaving "rankingTable" & "errorMessage" unchanged
            let response = await ChartService.getRankingTable(); // get "markets" data from API
            setState({
            ...state,
            loading: false,
            rankingTable: response.data,
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
        const interval = setInterval(() => {
            fetchRankingTable();
            console.log("Table Updated");
        }, 5000);
        return () => clearInterval(interval);
    }, [state.rankingTable]) 

    console.log(state.rankingTable); //SECOND METHOD OF PRINTING RESULTS FROM API.

    let { rankingTable } = state; //Destructure the object "state" to get its individual objects.
    **************************************************************************************************************************/
    /*
    useEffect(() => {
    fetchRankingTable();
    }, [state.rankingTable]) 
    */

    const RANKING_TABLE ='/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=false&price_change_percentage=24h';
    const [rankingTable, setRankingTable] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
   
    useEffect(() => {
      const interval = setInterval(() => {
        setLoading(true);
        axios.get(RANKING_TABLE)
            .then((response) => {
                setRankingTable(response.data);
                setLoading(false);
                console.log("Update");
                console.log(response.data)
            })
            .catch((error) => {
            setLoading(false);
            setErrMsg(error.message);
            })
        }, 3000);
        return () => clearInterval(interval);
    }, [rankingTable]);
    //console.log("Ok");
    //console.log(JSON.stringify(rankingTable));

    return (
        <section>
            <Container>
                <Row>
                    <Col className='text-center m-3'>
                        <p className='h4 fw-bold fst-italic'>Ranking_Table</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Reorder.Group values={rankingTable} onReorder={setRankingTable}>
                            <table className="table table-striped text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Cryptocurrency</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Market Cap</th>
                                        <th scope="col">Total Volume</th>
                                        <th scope="col">Price Change 24h</th>
                                        <th scope="col">Price Percentage 24h</th>
                                        <th scope="col">Price Trend</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {rankingTable.map((cryptocurrency) => (
                                        <Reorder.Item as='tr' key={cryptocurrency.id} value={cryptocurrency.id}>
                                            <th scope="row">
                                                <div className=''>
                                                    <Container>
                                                        <Row>
                                                            
                                                            <Col><img src={cryptocurrency.image} alt="" className='img-fluid contact-img ms-3'/></Col>
                                                            <Col className='d-flex flex-column me-4'>
                                                                <span>{cryptocurrency.name}</span>
                                                                <span>{cryptocurrency.symbol}</span>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </div>
                                            </th>
                                            <td>
                                                <div className='d-flex flex-column'>
                                                    <span className=''>${cryptocurrency.current_price}</span>
                                                    <span className='mb-4'>USD</span>
                                                </div>
                                            </td>
                                            <td>
                                                <p>{cryptocurrency.market_cap}</p>
                                            </td>
                                            <td>
                                                <p>{cryptocurrency.total_volume}</p>
                                            </td>
                                            <td>
                                                <p>{cryptocurrency.price_change_24h}</p>
                                            </td>
                                            <td>
                                                <p>{cryptocurrency.price_change_percentage_24h}% = {cryptocurrency.name}</p>
                                            </td>
                                            
                                            { cryptocurrency.price_change_percentage_24h > 0 ? (
                                                    <td>
                                                        <span>
                                                            <span></span>
                                                            <span className='bg-success colored-section px-2 py-1'>Upward Trend</span>
                                                        </span>
        
                                                    </td>
                                                ) : (
                                                    <td>
                                                        <span>
                                                            <span></span>
                                                            <span className='bg-danger colored-section p-1'>Downward Trend</span>
                                                        </span>
        
                                                    </td>
                                                )
                                            }
                                        </Reorder.Item>   
                                    ))}   
                                </tbody>
                            </table>
                        </Reorder.Group>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Ranking_Table;