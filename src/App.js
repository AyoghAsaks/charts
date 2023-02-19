
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CoinPage from './components/CoinPage';
import CryptoDetail from './components/CryptoDetail';
//import GetPastPrices from './components/GetPastPrices';
import HistoryChart from './components/HistoryChart';
import Home from './components/Home';
import Markets from './components/Markets';
import NavBar from './components/NavBar';
import Ranking_Table from './components/Ranking_Table';
import Trending from './components/Trending';

//import { Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <p className='display-5 fw-bolder'>Charts</p>
      <p className='h1 fw-bold'>Charts</p>
      <p className='h3'>Charts</p>
      <p className='lead fw-bold'>Charts</p>
      <NavBar />
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/search/trending' element={<Trending />} />
        <Route path='/coins/markets' element={<Markets />} />
        {/*Chart: <HistoryChart.js />*/}
        <Route path='/coins/:id' element={<HistoryChart />} />
        <Route path='/coins/:id' element={<CoinPage />} />
        <Route path='/coins/:id' element={<CryptoDetail />} />
        <Route path='/coins/table' element={<Ranking_Table /> } />
      </Routes>
    </React.Fragment>
  );
}

export default App;
