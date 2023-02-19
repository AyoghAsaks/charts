//rafce + enter
import React from 'react'

const TableDesignMethod = () => {
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
                            
                            <tr>
                                <th scope="row">
                                    <div className=''>
                                        <Container>
                                            <Row>
                                                <Col><img src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png" alt="" className='img-fluid contact-img ms-3'/></Col>
                                                <Col className='d-flex flex-column me-4'>
                                                    <span>Bitcoin</span>
                                                    <span>btc</span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </th>
                                <td>
                                    <div className='d-flex flex-column'>
                                        <span className=''>$30,000</span>
                                        <span className='mb-4'>USD</span>
                                    </div>
                                </td>
                                <td>
                                    <p>$89857</p>
                                </td>
                                <td>
                                    <p>$45778</p>
                                </td>
                                <td>
                                    <p>$56.57</p>
                                </td>
                                <td>
                                    <p>$35677</p>
                                </td>
                                <td>
                                    <span>
                                        <span></span>
                                        <span>Upward Trend</span>
                                    </span>

                                </td>
                            </tr>   
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default TableDesignMethod;