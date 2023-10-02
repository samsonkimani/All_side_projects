import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

function Registration() {
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    location: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [flashMessage, setFlashMessage] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/api/v1/views/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log(responseData);
        setFlashMessage(`Registration successful!`);
      } else {
        setFlashMessage(`Registration failed: ${responseData.message}`);
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <Container fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
      <div className='mask gradient-custom-3'></div>
      <Card className='m-5' style={{ maxWidth: '600px' }}>
        <Card.Body className='px-5'>
          {flashMessage && (
            <Alert variant='danger' onClose={() => setFlashMessage(null)} dismissible>
              {flashMessage}
            </Alert>
          )}
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control size="md" type="email" name='email' placeholder="Email" value={formData.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>First Name</Form.Label>
              <Form.Control size="md" type="text" name='first_name' placeholder="First Name" value={formData.first_name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Last Name</Form.Label>
              <Form.Control size="md" type="text" name='last_name' placeholder="Last Name" value={formData.last_name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control size="md" type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Location</Form.Label>
              <Form.Control size="md" type="text" name='location' placeholder="Location" value={formData.location} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control size="md" type="password" name='password' placeholder="Password" value={formData.password} onChange={handleInputChange} />
            </Form.Group>
            <Button className='mb-4 w-100 gradient-custom-4' size='lg' type="submit">Register</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Registration;
