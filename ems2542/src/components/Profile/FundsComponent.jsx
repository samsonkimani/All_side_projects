import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useState} from "react";
import axios from "axios";

const FundsComponent = ({userProfile}) => {

  const depositurl = "http://localhost:3000/api/v1/views/deposit"
  const withdrawurl = "http://localhost:3000/api/v1/views/withdraw"

  const {depositAmount, setDepositAmount} = useState(0);
  const {withdrawAmount, setWithdrawAmount} = useState(0);

  const handleDeposit = () => {
    axios.post(depositurl)
      .then(response => {
        setDepositAmount(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleWithdraw = () => {
    axios.post(withdrawurl)
      .then(response => {
        setWithdrawAmount(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (

    <Col className="mr-2 mt-5">
      <Card>
        <Card.Body>
            <div className="text-center">
                <Card.Title>Funds</Card.Title>
                <div className="d-flex flex-wrap balances">
                    <div >
                    <Card.Text>
                        Actual Balance: ${userProfile.Total}<br />
                        Money in Transit: ${userProfile.MoneyInTransit}<br />
                    </Card.Text>
                    </div>
                    <div>
                    <input
                  type="number"
                  placeholder="Deposit Amount"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                />
                <Button variant="primary" className="m-2" onClick={handleDeposit}>Deposit</Button>
                <input
                  type="number"
                  placeholder="Withdraw Amount"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
                <Button variant="danger" className="m-2" onClick={handleWithdraw}>Withdraw</Button>
                    </div>
                </div>
            </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FundsComponent;
