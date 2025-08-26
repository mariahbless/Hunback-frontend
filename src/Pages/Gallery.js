import React, { useState } from "react";
import "./Gallery.css"; // we’ll style separately
import Image1 from '../Picture/image1.jpg';
import Image2 from '../Picture/image2.jpg';
import Image3 from '../Picture/image3.jpg';
import Image4 from '../Picture/image4.jpg';
import Image5 from '../Picture/image5.jpg';
import Image6 from '../Picture/image6.jpg';
import Image7 from '../Picture/image7.jpg';
import Image8 from '../Picture/image8.jpg'; 


const images = [
  { id: 1, src: Image1, category: "Loans", caption: "Client Loan Issuance" },
  { id: 2, src: Image2, category: "Land Titles", caption: "Land Title Verification" },
  { id: 3, src: Image3, category: "Logbooks", caption: "Logbook Processing" },
  { id: 4, src: Image4, category: "Loans", caption: "Consultation Session" },
  { id: 5, src: Image5, category: "Lifestyle", caption: "Watching Sports" },
  { id: 6, src: Image6, category: "Lifestyle", caption: "Movie Time" },
  { id: 7, src: Image7, category: "Loans", caption: "Financial Guidance" },
  { id: 8, src: Image8, category: "Lifestyle", caption: "Hanging Out" },
];

export function Gallery() {
  const [filter, setFilter] = useState("All");

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">My Journey in Pictures</h2>

      {/* Filter Buttons */}
      <div className="gallery-filters">
        {["All", "Loans", "Land Titles", "Logbooks", "Lifestyle"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="gallery-grid">
        {filteredImages.map((img) => (
          <div key={img.id} className="gallery-item">
            <img src={img.src} alt={img.caption} />
            <div className="overlay">
              <p>{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
