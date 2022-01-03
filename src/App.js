import React from 'react';
import './App.css';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 9999.99
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 299.99
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.0
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.2
        },
        {
          name: 'Bitcoin Cash',
          ticker: 'BCH',
          price: 298.99
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className = "App-title">
            Coin Exchange
          </h1>
        </header>
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </div>
    );

  }
  
}

export default App;
