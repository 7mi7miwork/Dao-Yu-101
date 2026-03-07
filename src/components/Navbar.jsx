import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h1>Dao-Yu-101</h1>
        </div>
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/">🏠 Start</a></li>
          <li><a href="/lesson1">📚 Lektion 1</a></li>
          <li><a href="/lesson2">📚 Lektion 2</a></li>
        </ul>
      </div>
    </nav>
  );
}