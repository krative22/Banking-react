import React from 'react'
import Transaction from './Transaction';
import './Transaction.css'
import { Link } from 'react-router-dom';


const TransactionPage = () => {
  return (
    <div action="/transaction">
      <div className="text-center transaction__content">
        <h1 className="main-title home-page-title">Transaction Summary</h1>
        <Link to="/Account">
          <button className="home-button">Account</button>
          </Link>
   

<div className="ui middle aligned divided list">
          <Transaction />
 <Transaction/>
          <Transaction />
          <Transaction />
          <Transaction/>
 <Transaction/>
          <Transaction />
          <Transaction/>

</div>
      </div>
         </div>
  )
}

export default TransactionPage