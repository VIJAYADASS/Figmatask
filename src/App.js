import React from 'react';
import './App.css'; 
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Overview from './Components/Overview';
import Transactions from './Components/Transaction';
import PaginationControlled from './Components/Footer';
import Table from './Components/Table';

 
const App = () => {
  return (
    <div className='app-container '>
      <Navbar />
      <div className='content-container '>
        <Header/>
        <Overview />
        <Transactions />
        <Table />
        <PaginationControlled />
        
      </div>
    </div>
  );
}

export default App;
