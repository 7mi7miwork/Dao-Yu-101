import React from 'react';

export default function LearningPath() {
  return (
    <section className="learning-path-section">
      <div className="learning-path-container">
        <h2 className="learning-path-title">Lernpfad</h2>
        <div className="learning-path-visual">
          <div className="path-steps">
            <div className="path-step">
              <div className="step-number">1</div>
              <div className="step-info">
                <h3>Grundlagen</h3>
                <p>Starte deine Reise</p>
              </div>
            </div>
            <div className="path-step">
              <div className="step-number">2</div>
              <div className="step-info">
                <h3>Theorie</h3>
                <p>Vertiefe dein Wissen</p>
              </div>
            </div>
            <div className="path-step">
              <div className="step-number">3</div>
              <div className="step-info">
                <h3>Praxis</h3>
                <p>Wende an was du gelernt hast</p>
              </div>
            </div>
            <div className="path-step">
              <div className="step-number">4</div>
              <div className="step-info">
                <h3>Projekte</h3>
                <p>Erstelle eigene Projekte</p>
              </div>
            </div>
          </div>
          <div className="path-line"></div>
        </div>
      </div>
    </section>
  );
}