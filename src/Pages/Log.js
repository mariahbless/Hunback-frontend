
import React from "react";

export function LogBook() {
  return (
    <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Title */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "#012850",
          fontWeight: "bold",
        }}
      >
        Logbook Financing & Processing
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          maxWidth: "850px",
          margin: "0 auto 50px",
          lineHeight: "1.7",
          color: "#333",
        }}
      >
        At <b>DIFA Uganda</b>, we provide secure and reliable logbook services
        to support your financial and ownership needs. Whether you need to
        process a new logbook, transfer ownership, or use your vehicle’s logbook
        as security for a loan, our team ensures fast, transparent, and
        professional service.
      </p>

      {/* Process / Timeline */}
      <div style={{ position: "relative", margin: "50px 0" }}>
        {/* Vertical Line */}
        <div
          className="timeline-line"
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "4px",
            background: "orange",
            transform: "translateX(-50%)",
          }}
        ></div>

        {/* Step 1 */}
        <div className="timeline-step left">
          <div className="timeline-circle">1</div>
          <div className="timeline-content">
            <h3 style={{ color: "#012850" }}>🚗 Logbook Financing</h3>
            <p>
              Use your vehicle’s logbook as collateral to access quick loans.
              Enjoy flexible repayment terms while keeping full use of your car.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="timeline-step right">
          <div className="timeline-circle">2</div>
          <div className="timeline-content">
            <h3 style={{ color: "#012850" }}>📑 Ownership Transfer</h3>
            <p>
              Hassle-free transfer of vehicle ownership through official
              channels. Our team ensures all documentation complies with URA
              standards.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="timeline-step left">
          <div className="timeline-circle">3</div>
          <div className="timeline-content">
            <h3 style={{ color: "#012850" }}>📄 Duplicate & Replacement</h3>
            <p>
              Lost or damaged your logbook? We assist in obtaining a duplicate
              quickly, so you can get back on the road with peace of mind.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div style={{ marginTop: "70px", textAlign: "center" }}>
        <h2
          style={{
            color: "#012850",
            marginBottom: "25px",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Why Choose Us?
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            fontSize: "1.15rem",
            lineHeight: "1.9",
            color: "#444",
            textAlign:"blocked"
          }}
        >
          <li> Transparent processes with no hidden costs</li>
          <li> Quick processing to save your time</li>
          <li> Professional guidance throughout the process</li>
          <li> Guaranteed compliance with Uganda’s transport regulations</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h3 style={{ color: "#012850", fontSize: "1.5rem" }}>
          Secure your vehicle, secure your future.
        </h3>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          For reliable logbook services, visit our office in Kampala or contact
          us today.
        </p>
      </div>

      {/* Styling */}
      <style>
        {`
          .timeline-step {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 70px;
            position: relative;
          }

          .timeline-step.right {
            flex-direction: row-reverse;
          }

          .timeline-content {
            width: 45%;
            padding: 15px;
            background: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          }

          .timeline-circle {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: orange;
            color: #012850;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.2rem;
            z-index: 2;
          }

          /* Responsive: stack */
          @media (max-width: 900px) {
            .timeline-line {
              display: none;
            }
            .timeline-step {
              flex-direction: column;
              text-align: center;
            }
            .timeline-content {
              width: 100%;
              margin-top: 70px;
            }
            .timeline-circle {
              position: static;
              margin-bottom: 15px;
              transform: none;
            }
          }
        `}
      </style>
    </div>
  );
}
