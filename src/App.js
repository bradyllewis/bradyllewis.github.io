import React from 'react';
import './App.css';
import Coin from './components/Coin/Coin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className = "App-title">
          Coin Exchange
        </h1>
      </header>
      <table className='coin-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={9999.99} />
          <Coin name="Ethereum" ticker="ETH" price={299.99} />
          <Coin name="Tether" ticker="USDT" price={1.0} />
          <Coin name="Ripple" ticker="XRP" price={0.2} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
