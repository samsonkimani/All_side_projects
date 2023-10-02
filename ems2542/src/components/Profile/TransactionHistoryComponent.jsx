import React from "react";
import { Table } from "react-bootstrap";

// you can pass a prop to this component to render the transaction data
// i ignored it so if brad or nderitu wants to use it please pass a prop
// to this component
// i have commented out the transaction data so that you can see how the
// table looks like
const TransactionHistoryComponent = ({transactions}) => {
  return (
    <div>
      <h4 className="mt-5">Transaction History</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Receiver Account</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transactions.receiverAccount}</td>
              <td>{transactions.amount}</td>
              <td>{transactions.date}</td>
              <td>{transactions.items}</td>

            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionHistoryComponent;
