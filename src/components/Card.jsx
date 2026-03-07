import React, { useState } from 'react';

export default function Card({ title, description, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={link} className="card-link">
          {isHovered ? '▶️' : '▶'}
        </a>
      </div>
    </div>
  );
}