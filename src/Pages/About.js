import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaHandshake, FaUsers, FaFilm, FaFutbol, FaLandmark } from 'react-icons/fa';
import profileImage from '../Picture/logo2.jpg'; // replace with actual profile image

const AboutPage = () => {
  return (
    <Container fluid className="p-4" style={{ backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
      {/* Header Section */}
      <Row className="align-items-center mb-5 flex-column flex-md-row text-center text-md-start">
        <Col xs={12} md={5} className="mb-4 mb-md-0">
          <img
            src={profileImage}
            alt="Profile"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: '250px', width: '100%', height: 'auto' }}
          />
        </Col>
        <Col xs={12} md={7}>
          <h1 style={{ color: '#053362', fontWeight: 'bold' }}>About Me</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
            With several years of experience in managing loans, log books, and land titles,
            I combine professionalism with a passion for excellence. I value integrity and hard work
            above all and remain committed to delivering accurate, trustworthy financial services.
          </p>
          <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#555' }}>
            Outside work, I enjoy watching movies, keeping up with sports, and spending quality time with friends.
          </p>
        </Col>
      </Row>

      {/* Core Values */}
      <h2 className="mb-4 text-center text-md-start" style={{ color: '#053362' }}>Core Values</h2>
      <Row className="mb-5">
        <Col xs={12} md={4} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaHandshake size={50} color="#ed850eff" />
            <Card.Body>
              <Card.Title>Integrity</Card.Title>
              <Card.Text>Always honest, fair, and trustworthy in every transaction.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaUsers size={50} color="#8d088dff" />
            <Card.Body>
              <Card.Title>Hard Work</Card.Title>
              <Card.Text>Committed to delivering professional and accurate services.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaLandmark size={50} color="#053362" />
            <Card.Body>
              <Card.Title>Professionalism</Card.Title>
              <Card.Text>Maintains high standards in all dealings with clients.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Personal Interests */}
      <h2 className="mb-4 text-center text-md-start" style={{ color: '#053362' }}>Hobbies & Interests</h2>
      <Row className="mb-5">
        <Col xs={12} md={4} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaFilm size={40} color="#ed850eff" />
            <Card.Body>
              <Card.Title>Movies</Card.Title>
              <Card.Text>Enjoys relaxing with a good movie after work.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaFutbol size={40} color="#8d088dff" />
            <Card.Body>
              <Card.Title>Sports</Card.Title>
              <Card.Text>Keeping active and following favorite sports teams.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaUsers size={40} color="#053362" />
            <Card.Body>
              <Card.Title>Friends & Social</Card.Title>
              <Card.Text>Loves hanging out with friends and networking.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* CTA */}
      <div className="text-center">
        <Button
          href="/contact"
          style={{
            backgroundColor: '#ed850eff',
            border: 'none',
            padding: '0.7rem 2rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
          }}
        >
          Get in Touch
        </Button>
      </div>
    </Container>
  );
};

export default AboutPage;
