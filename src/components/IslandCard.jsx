import React from 'react';

export default function IslandCard({ title, description, link }) {
  return (
    <div className="island-card">
      <div className="island-content">
        <h3 className="island-title">{title}</h3>
        <p className="island-description">{description}</p>
        <a href={link} className="island-link">
          Explore
        </a>
      </div>
    </div>
  );
}