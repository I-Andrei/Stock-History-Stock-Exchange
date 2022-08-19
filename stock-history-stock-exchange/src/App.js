import './App.css';
import React, { useState } from 'react';
import SearchStock from './components/search_stock';
import { useEffect } from 'react';



function App() {

  const [stocks, setStocks] = useState(["test1"])

  function exportStocks () {
    return stocks
  }

  function test(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(res => res.json())
        .then((result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(items)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          <div > Hi World <button onClick={test}></button></div>
        </ul>
      )
    }
  }

  return (
    <div className="App">
      <div>Hello Boy <button onClick={test}></button></div>
    </div>
  );

}

export default App;

// <div className="App">
//<div ><SearchStock /></div>
//</div>