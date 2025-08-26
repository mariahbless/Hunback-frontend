import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaHome, FaSearch, FaFileAlt, FaPenNib } from 'react-icons/fa';
import landImage from '../Picture/land.jpg'; // replace with your image

const LandTitlePage = () => {
  return (
    <Container fluid className="p-5" style={{ backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <Row className="align-items-center mb-5">
        <Col md={6} className="text-center mb-3 mb-md-0">
          <img 
            src={landImage} 
            alt="Land Title Illustration" 
            className="img-fluid shadow rounded" 
            style={{ maxHeight: '300px' }}
          />
        </Col>
        <Col md={6}>
          <h1 style={{ color: '#053362' }}>Land Title Services</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
            We provide professional services for land title registration, verification, and management. 
            Our goal is to ensure your property ownership is documented accurately and securely, giving you peace of mind.
          </p>
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
            Get Started
          </Button>
        </Col>
      </Row>

      {/* Key Services */}
      <h2 className="mb-4" style={{ color: '#053362' }}>Our Services</h2>
      <Row className="mb-5">
        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaHome size={40} color="#ed850eff" />
            <Card.Body>
              <Card.Title>Title Registration</Card.Title>
              <Card.Text>Assistance in registering your land to ensure legal ownership.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaSearch size={40} color="#8d088dff" />
            <Card.Body>
              <Card.Title>Title Verification</Card.Title>
              <Card.Text>Check and confirm the authenticity of existing land titles.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaFileAlt size={40} color="#053362" />
            <Card.Body>
              <Card.Title>Document Preparation</Card.Title>
              <Card.Text>Help prepare and organize all necessary legal documents.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaPenNib size={40} color="#ed850eff" />
            <Card.Body>
              <Card.Title>Transfer & Updating</Card.Title>
              <Card.Text>Manage title transfers or update land ownership records.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Step-by-Step Process */}
      <h2 className="mb-4" style={{ color: '#053362' }}>How It Works</h2>
      <Row className="mb-5">
        <Col md={3} className="mb-3">
          <Card className="shadow-sm h-100 p-3 text-center" style={{ borderRadius: '12px' }}>
            <FaHome size={50} color="#ed850eff" />
            <Card.Body>
              <Card.Title>Consultation & Assessment</Card.Title>
              <Card.Text>Understand your land ownership situation and required services.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="shadow-sm h-100 p-3 text-center" style={{ borderRadius: '12px' }}>
            <FaFileAlt size={50} color="#8d088dff" />
            <Card.Body>
              <Card.Title>Document Collection</Card.Title>
              <Card.Text>Gather all relevant land documents, including previous deeds and maps.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="shadow-sm h-100 p-3 text-center" style={{ borderRadius: '12px' }}>
            <FaSearch size={50} color="#053362" />
            <Card.Body>
              <Card.Title>Processing & Verification</Card.Title>
              <Card.Text>We verify documents with government offices and ensure correctness.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="shadow-sm h-100 p-3 text-center" style={{ borderRadius: '12px' }}>
            <FaPenNib size={50} color="#ed850eff" />
            <Card.Body>
              <Card.Title>Finalization</Card.Title>
              <Card.Text>Receive your verified or newly issued land title, ready for use or transfer.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
};

export default LandTitlePage;
