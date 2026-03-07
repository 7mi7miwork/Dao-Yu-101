import React from 'react';
import IslandCard from './IslandCard.jsx';

export default function IslandMap() {
  const islands = [
    { title: 'Grundlagen', description: 'Einführung in die Grundlagen', link: '/lesson1' },
    { title: 'Theorie', description: 'Vertiefung der Theorie', link: '/lesson2' },
    { title: 'Praxis', description: 'Praktische Anwendung', link: '/lesson3' },
    { title: 'Projekte', description: 'Projektarbeit', link: '/projects' },
    { title: 'Zertifikat', description: 'Abschlussprüfung', link: '/certificate' },
    { title: 'Community', description: 'Austausch mit anderen', link: '/community' }
  ];

  return (
    <section className="island-map-section">
      <div className="island-map-container">
        <h2 className="island-map-title">Archipel der Kenntnisse</h2>
        <div className="island-grid">
          {islands.map((island, index) => (
            <IslandCard 
              key={index}
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