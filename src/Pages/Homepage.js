import React from 'react';
import Image from '../Picture/hun.jpg'; // adjust path to your image

function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        gap: '20px',
        flexWrap: 'wrap', // ensures wrapping on smaller screens
        textAlign: 'center', // centers text on mobile
      }}
    >
      {/* Left Side - Text */}
      <div
        style={{
          flex: '1',
          minWidth: '300px',
          maxWidth: '600px',
          margin: 'auto',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '15px' }}>
          Welcome to my Portfolio Website
        </h1>
        <p
          style={{
            fontSize: '18px',
            lineHeight: '1.6',
            textAlign: 'justify',
          }}
        >
          I am delighted to present a curated showcase of my professional journey,
          reflecting years of hands-on expertise in loan issuance, land title
          processing, and comprehensive accounting solutions. My career has been
          defined by a commitment to precision, integrity, and strategic
          problem-solving, ensuring every client receives tailored, results-driven
          service.
          <br />
          <br />
          With a proven ability to navigate complex financial landscapes and legal
          documentation, I combine strong analytical skills with careful attention
          to detail, delivering results that build trust and lasting relationships.
        </p>
      </div>

      {/* Right Side - Image */}
      <div
        style={{
          flex: '1',
          minWidth: '280px',
          maxWidth: '500px',
          margin: 'auto',
        }}
      >
        <img
          src={Image}
          alt="Welcome"
          style={{
            width: '100%',
            maxWidth: '400px',
            borderRadius: '10px',
            objectFit: 'cover',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
}

export default HomePage;
