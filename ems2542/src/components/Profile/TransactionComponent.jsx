import React, { useState } from "react";
import { Col, Card, Button, Table } from "react-bootstrap";
import CreateNewTransactionComponent from "./CreateNewTransactionComponent";
import axios from "axios";

const TransactionComponent = ({ transactions, onCreateTransaction, onShowCreateTransactionModal }) => {
  const [showModal, setShowModal] = useState(false);
  const [approvalStatus, setApprovalStatus] = useState({});

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleApprove = (transactionId) => {
    axios
      .post(`http://localhost:5000/api/v1/views/approve-transaction/${transactionId}`)
      .then((response) => {
        setApprovalStatus({ [transactionId]: "approved" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancel = (transactionId) => {

    axios
      .post(`http://localhost:5000/api/v1/views/cancel-transaction/${transactionId}`)
      .then((response) => {
        setApprovalStatus({ [transactionId]: "cancelled" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Col className="mr-2 mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Transactions</Card.Title>
          <Button variant="primary" onClick={handleShowModal} className="mt-2">
            Create New Transaction
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Receiver Account</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Items</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.receiverAccount}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.items}</td>
                  <td>{transaction.status}</td>
                  <td>
                    {transaction.status === "pending" && (
                      <>
                        <Button
                          variant="success"
                          onClick={() => handleApprove(transaction.id)}
                          disabled={approvalStatus[transaction.id] === "approved"}
                        >
                          Approve
                        </Button>{" "}
                        <Button
                          variant="danger"
                          onClick={() => handleCancel(transaction.id)}
                          disabled={approvalStatus[transaction.id] === "cancelled"}
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <CreateNewTransactionComponent
        show={showModal}
        onHide={() => {
          handleCloseModal();
          onShowCreateTransactionModal();
        }}
        onCreateTransaction={onCreateTransaction}
      />
    </Col>
  );
};

export default TransactionComponent;
