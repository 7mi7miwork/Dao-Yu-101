import React from 'react';
import IslandCard from './IslandCard.jsx';
import islandsData from '../../design/islands.json';

export default function IslandMap() {
  return (
    <section className="island-map-section">
      <div className="island-map-container">
        <h2 className="island-map-title">Archipel der Kenntnisse</h2>
        <div className="island-grid">
          {islandsData.map((island, index) => (
            <IslandCard 
              key={island.id}
              title={island.title}
              description={island.description}
              link={island.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}