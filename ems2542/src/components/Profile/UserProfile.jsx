import React from "react";
import { Col, Image, Card } from "react-bootstrap";
import "../../style.css";

const UserProfile = ({userProfile}) => {

  return (
    <Col className="mr-2">
      <Card className="user-profile mt-5">
        <div className="text-center">
            <Card.Img
            src="../src/images/woman.jpg"
            alt="User Avatar"
            roundedCircle
            fluid
            className="user-profile-image-setting"
            />
            <Card.Body>
            <Card.Title>{ userProfile.name}</Card.Title>
            <Card.Text>
                Age: {userProfile.age}<br />
                Sex: {userProfile.age}<br />
                Account Number: {userProfile.account_number}<br />
            </Card.Text>
            </Card.Body>
        </div>
      </Card>
    </Col>
  );
};

export default UserProfile;
