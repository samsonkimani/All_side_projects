import React, { useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";

const CreateNewTransactionComponent = ({ show, onHide }) => {
  const [receiverAccount, setReceiverAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [items, setItems] = useState("");

  const handleCreateTransaction = () => {
    // hndle transaction logic here
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Transaction</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="receiverAccount">
            <Form.Label>Receiver Account:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter receiver's account"
              value={receiverAccount}
              onChange={(e) => setReceiverAccount(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="amount">
            <Form.Label>Amount:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date:</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="items">
            <Form.Label>Items:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter items"
              value={items}
              onChange={(e) => setItems(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCreateTransaction}>
          Create Transaction
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateNewTransactionComponent;
