import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/v1/contact/create', formData);
      if (response.status === 200) {
        setStatus({ type: 'success', message: 'successfully signed in, check your email for reply!' });
        setFormData({ firstname: '', lastname: '', email: '', contact: '', message: '' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'danger', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Card
        style={{
          maxWidth: '900px',
          width: '100%',
          boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <Row className="g-0">
          {/* Left: Contact Form */}
          <Col
            md={6}
            style={{
              backgroundColor: '#ffffff',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3 className="mb-4 text-primary" style={{ textAlign: 'center', color: 'darkblue' }}>
              Contact Us
            </h3>

            {status.message && (
              <Alert variant={status.type}>{status.message}</Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formFirstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  placeholder="Enter firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  placeholder="Enter lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="text"
                  name="contact"
                  placeholder="Enter contact number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Type your message here"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" style={{ width: '100%' }}>
                Send
              </Button>
            </Form>
          </Col>

          {/* Right: Contact Details */}
          <Col
            md={6}
            style={{
              backgroundColor: '#053362',
              color: 'white',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3 className="mb-4">My Contact Information</h3>
            <p><strong>Email:</strong> olarakenneth2020@gmail.com</p>
            <p><strong>Phone1:</strong> 0770996204</p>
            <p><strong>Phone2:</strong> 0764861796</p>
            <p><strong>Phone3:</strong> 0750225322</p>
            <p><strong>Address:</strong> Ntinda, Kampala-Uganda</p>
            <p><strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM</p>
            <p>Feel free to reach me using the above details or send a message using the form.</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
}


// import React from 'react';
// import { Card, Form, Button, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function ContactPage() {
//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         backgroundColor: '#f4f4f4',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: '20px',
//       }}
//     >
//       <Card
//         style={{
//           maxWidth: '900px',
//           width: '100%',
//           boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
//           borderRadius: '12px',
//           overflow: 'hidden',
//         }}
//       >
//         <Row className="g-0">
//           {/* Left: Contact Form */}
//           <Col
//             md={6}
//             style={{
//               backgroundColor: '#ffffff',
//               padding: '30px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//             }}
//           >
//             <h3 className="mb-4 text-primary" style={{ textAlign: 'center', color: 'darkblue' }}>
//               Contact Us
//             </h3>
//             <Form>
//               <Form.Group className="mb-3" controlId="formFirstname">
//                 <Form.Label>Firstname</Form.Label>
//                 <Form.Control type="text" placeholder="Enter firstname" />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formLastname">
//                 <Form.Label>Lastname</Form.Label>
//                 <Form.Control type="text" placeholder="Enter lastname" />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formEmail">
//                 <Form.Label>Email Address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formContact">
//                 <Form.Label>Contact</Form.Label>
//                 <Form.Control type="text" placeholder="Enter contact number" />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formMessage">
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control as="textarea" rows={4} placeholder="Type your message here" />
//               </Form.Group>

//               <Button variant="primary" type="submit" style={{ width: '100%' }}>
//                 Send Message
//               </Button>
//             </Form>
//           </Col>

//           {/* Right: Contact Details */}
//           <Col
//             md={6}
//             style={{
//               backgroundColor: '#053362',
//               color: 'white',
//               padding: '30px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//             }}
//           >
//             <h3 className="mb-4">My Contact Information</h3>
//             <p><strong>Email:</strong> olarakenneth2020@gmail.com</p>
//             <p><strong>Phone1:</strong> 0770996204</p>
//             <p><strong>Phone2:</strong> 0764861796</p>
//             <p><strong>Phone3:</strong> 0750225322</p>
//             <p><strong>Address:</strong> Ntinda, Kampala-Uganda</p>
//             <p><strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM</p>
//             <p>Feel free to reach me using the above details or send a message using the form.</p>
//           </Col>
//         </Row>
//       </Card>
//     </div>
//   );
// }
