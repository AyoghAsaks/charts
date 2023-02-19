//rafce + enter

import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-sm" style={{ backgroundColor: '#D3D3D3'}}>
            <Container>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand fst-italic fw-bold text-color-primary">CryptoFinder</Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#">Find</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/search/trending'}className="nav-link active" aria-current="page">Trending</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/coins/markets'} className="nav-link active" aria-current="page">Markets</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/coins/:id'} className="nav-link active" aria-current="page">Chart</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'/coins/table'} className="nav-link active" aria-current="page">Table</Link>
                        </li>
                    </ul>
                    <ul>
                        {/*}
                        <li className="nav-item">
                            <Link to={'/coins/:id'} className="nav-link active" aria-current="page">Detail</Link>
                        </li>
                        */}
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </Container>
        </nav>
    </React.Fragment>
  )
}

export default Home;