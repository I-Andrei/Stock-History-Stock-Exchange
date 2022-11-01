import './App.css';
import React, { useState } from 'react';
import moment from 'moment';
import MyChart from './components/MyChart';

function App() {
  
  const [cryptoData, setCryptoData] = useState([])

  function getCryptoData(crypto) {
    fetch('https://api.coingecko.com/api/v3/coins/' + crypto + '/market_chart?vs_currency=USD&days=10&interval=hourly')
    .then((response) => response.json())
    .then((data) => {
      setCryptoData(data.prices);
    });
  }
  
  const labelsCrypto = []
    for (var i = 0; i < cryptoData.length; ++i)
      labelsCrypto.push(moment(cryptoData[i][0]).format("DD-MM-YYYY h:mm:ss"))

  return (
    <div className="App">
      <MyChart cryptoData={cryptoData} labelsCrypto={labelsCrypto}/>
      <select>
        <option>Choose Crypto</option>
        <option onClick={() => getCryptoData('ethereum')}>Ethereum</option>
        <option onClick={() => getCryptoData('bitcoin')}>Bitcoin</option>
      </select>
    </div>
  );
}

export default App;