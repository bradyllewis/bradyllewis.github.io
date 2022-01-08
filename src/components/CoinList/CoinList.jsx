import React from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.75rem;
`;

export default function CoinList(props) {
    
  return (
      <Table className='coin-table'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Ticker</th>
        <th>Price</th>
        {props.showBalance ? <th>Balance</th> : null}
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        props.coinData.map( ({key, name, ticker, price, balance}) =>
        <Coin key={key} 
          handleRefresh={props.handleRefresh}
          name={name} 
          ticker={ticker} 
          showBalance={props.showBalance}
          balance={balance}
          price={price} 
          tickerId={key} />
        )  
      }
    </tbody>
  </Table>
  );
    
}
