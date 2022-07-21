import React from 'react'
import { GrMoney } from 'react-icons/gr'
import { faker } from '@faker-js/faker';
const TransactionDescription = faker.finance.transactionDescription();

const Transaction = () => {
  return (
  <div className="item">
    <div className="right floated content">
    </div>
    <div className="content">
      <GrMoney/> { TransactionDescription}
    </div>
  </div>
  )
}

export default Transaction