import './App.css';
import React, { useState } from 'react';
import moment from 'moment';
import MyChart from './components/chart';

function App() {
  
  const [stocks, setStocks] = useState([])

  function getEthereumData() {
    fetch('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=USD&days=10&interval=hourly')
    .then((response) => response.json())
    .then((data) => {
      setStocks(data.prices);
    });
  }

  function getBitcoinData() {
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=10&interval=hourly')
    .then((response) => response.json())
    .then((data) => {
      setStocks(data.prices);
    });
  }
  
  const labelsEthereum = []
    for (var i = 0; i < stocks.length; ++i)
      labelsEthereum.push(moment(stocks[i][0]).format("DD-MM-YYYY h:mm:ss"))

  const labelsBitcoin = []
    for (var i = 0; i < stocks.length; ++i)
      labelsBitcoin.push(moment(stocks[i][0]).format("DD-MM-YYYY h:mm:ss"))

  return (
    <div className="App">
      <MyChart stocks1={stocks} labelsEthereum={labelsEthereum} labelsBitcoin={labelsBitcoin}/>
      <select>
        <option onClick={getEthereumData}>Ethereum</option>
        <option onClick={getBitcoinData}>Bitcoin</option>
      </select>
    </div>
  );
}

export default App;