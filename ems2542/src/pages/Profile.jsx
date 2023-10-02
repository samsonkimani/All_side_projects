import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserProfile from "../components/Profile/UserProfile";
import FundsComponent from "../components/Profile/FundsComponent";
import TransactionComponent from "../components/Profile/TransactionComponent";
import TransactionHistoryComponent from "../components/Profile/TransactionHistoryComponent";
import axios from "axios";
import { useState, useEffect } from "react";
import { get } from "request";


const Profile = () => {

  // get the user profile from the /api/profile endpoint
  const url = "http://localhost:3000/api/v1/views/profile";
  const transactionsurl = "http://localhost:3000/api/v1/views/transactions";
  const [userProfile, setUserProfile] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [showCreateTransactionModal, setShowCreateTransactionModal] = useState(false);

  const fetchdata = () => {
    axios.get(url)
      .then(response => {
        setUserProfile(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const getTransactions = () => {
    axios.get(transactionsurl)
      .then(response => {
        setUserProfile(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }


  useEffect(() => {
    fetchdata();
    getTransactions();
  }, [])


  rreturn (
    <Container>
      <Row>
        <Col className="mr-2">
          <UserProfile userProfile={userProfile} />
        </Col>
        <Col xs={12} md={8}>
          <FundsComponent userProfile={userProfile} />
          <TransactionComponent
            transactions={transactions.filter(transaction => transaction.status === "pending")}
          />
          <TransactionHistoryComponent
            completedTransactions={transactions.filter(transaction => transaction.status === "completed" || transaction.status === "failed")}
          />
        </Col>
      </Row>
    </Container>
  );
};


export default Profile;
