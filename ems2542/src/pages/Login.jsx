import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    phone_number: '',
    password: '',
  });

  const [flashMessage, setFlashMessage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://6ea7-197-254-107-22.ngrok.io/api/v1/views/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log(responseData);
        const jwtCookie = document.cookie
          .split(';')
          .find((cookie) => cookie.trim().startsWith('jwt='));

        if (jwtCookie) {
          const token = jwtCookie.split('=')[1];


          setFlashMessage(`Logged in successfully! JWT Token: ${token}`);
        } else {
          setFlashMessage('Login successful, but JWT token not found in cookies.');
        }
      } else {

        setFlashMessage(`Login failed: ${responseData.message}`);
      }
    } catch (error) {
      console.error('Login error:', error);
      setFlashMessage('Network error occurred while logging in.');
    }
  };

  return (
    <Container fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
      <div className='mask gradient-custom-3'></div>
      <Card className='m-5' style={{ maxWidth: '400px' }}>
        <Card.Body className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Login</h2>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control size="md" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control size="md" type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control size="md" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
            </Form.Group>

            <Button className='mb-4 w-100 gradient-custom-4' size='lg' type="submit">Login</Button>
          </Form>
        </Card.Body>
      </Card>
      {flashMessage && (
        <Alert variant="info" className="text-center">
          {flashMessage}
        </Alert>
      )}
    </Container>
  );
}

export default Login;
