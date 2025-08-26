import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaFileAlt, FaCheckCircle, FaMoneyBillWave, FaUserShield } from 'react-icons/fa';
import loanImage from '../Picture/loan.jpg'; // replace with your image

const LoanIssuancePage = () => {
  return (
    <Container fluid className="p-5" style={{ backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
      {/* Header Section */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h1 style={{ color: '#053362' }}>Loan Issuance Services</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
            We provide professional loan issuance services with accuracy, integrity, and transparency. 
            Whether you are applying for personal, business, or land-related loans, our team ensures a smooth process from application to disbursement.
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
            Apply Now
          </Button>
        </Col>
        <Col md={6} className="text-center">
          <img 
            src={loanImage} 
            alt="Loan Illustration" 
            className="img-fluid shadow rounded" 
            style={{ maxHeight: '300px' }}
          />
        </Col>
      </Row>

      {/* Loan Process Steps */}
      <h2 className="mb-4" style={{ color: '#053362' }}>Loan Process</h2>
      <Row className="mb-5">
        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaFileAlt size={50} color="#ed850eff" />
            <Card.Body>
              <Card.Title>Application Submission</Card.Title>
              <Card.Text>Fill out your loan application with all required personal and financial information.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaCheckCircle size={50} color="#8d088dff" />
            <Card.Body>
              <Card.Title>Verification & Documentation</Card.Title>
              <Card.Text>Our team reviews your documents carefully, including log books and land titles, ensuring accuracy and compliance.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaUserShield size={50} color="#053362" />
            <Card.Body>
              <Card.Title>Approval Process</Card.Title>
              <Card.Text>We evaluate your application and provide clear feedback, keeping you informed every step of the way.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaMoneyBillWave size={50} color="#ed850eff" />
            <Card.Body>
              <Card.Title>Disbursement</Card.Title>
              <Card.Text>Once approved, funds are released promptly, securely, and efficiently.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Key Benefits */}
      <h2 className="mb-4" style={{ color: '#053362' }}>Why Choose Our Services?</h2>
      <Row className="mb-5">
        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaCheckCircle size={40} color="#ed850eff" />
            <Card.Body>
              <Card.Title>Transparent Process</Card.Title>
              <Card.Text>No hidden charges or delays.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaMoneyBillWave size={40} color="#8d088dff" />
            <Card.Body>
              <Card.Title>Fast Turnaround</Card.Title>
              <Card.Text>Quick evaluation and approval.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaUserShield size={40} color="#053362" />
            <Card.Body>
              <Card.Title>Expert Advice</Card.Title>
              <Card.Text>Guidance from an experienced accountant.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3" style={{ borderRadius: '12px' }}>
            <FaFileAlt size={40} color="#ed850eff" />
            <Card.Body>
              <Card.Title>Secure Handling</Card.Title>
              <Card.Text>Sensitive documents handled with utmost care.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoanIssuancePage;
