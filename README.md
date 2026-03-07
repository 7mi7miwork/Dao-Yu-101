# Dao-Yu-101 - Lernplattform

Eine Astro + React Lernplattform mit Minecraft-Insel-Stil, optimiert für GitHub Pages.

## Features

- **Archipel-/Insel-Design** mit Minecraft-Ästhetik
- **Responsive Navigation** mit Hamburger-Menü
- **Karten-Komponenten** für Module
- **GitHub Pages Deployment** fähig
- **SPA-kompatibel** mit korrektem Routing

## Installation

1. Clone das Repository:
   ```bash
   git clone https://github.com/7mi7miwork/Dao-Yu-101.git
   cd Dao-Yu-101
   ```

2. Installiere die Dependencies:
   ```bash
   npm install
   ```

## Entwicklung

Starte den Entwicklungsserver:
```bash
npm run dev
```

Öffne `http://localhost:3000` im Browser.

## Build & Deployment

Erstelle die Produktionsversion:
```bash
npm run build
```

Die gebaute Version befindet sich im `dist/` Ordner und ist bereit für GitHub Pages Deployment.

## GitHub Pages Deployment

1. Erstelle eine GitHub Pages Seite für dein Repository
2. Führe den Deploy-Skript aus:
   ```bash
   npm run deploy
   ```
   Dies baut die Seite, committet alle Änderungen und pusht zu GitHub

## Projektstruktur

```
dao-yu-101/
├── public/assets/           # Statische Assets
├── src/components/          # React Komponenten
│   ├── Navbar.jsx          # Navigation
│   ├── Footer.jsx          # Footer
│   └── Card.jsx            # Karten-Komponente
├── src/pages/              # Astro Seiten
│   ├── index.astro         # Startseite
│   ├── lesson1.astro       # Lektion 1
│   └── lesson2.astro       # Lektion 2
├── src/styles/             # CSS Styles
│   └── main.css           # Hauptstylesheet
├── astro.config.mjs        # Astro Konfiguration
├── package.json           # Dependencies & Scripts
└── README.md              # Diese Datei
```

## Design System

- **Farben**: Himmel (#87CEEB), Wasser (#1E90FF), Sand (#F4E1B3), Block (#A0522D), Grün (#228B22)
- **Schriftart**: 'Press Start 2P' (Pixel-Font)
- **Stil**: Minecraft-Insel mit klaren Block-Rändern und leichten Schatten

## Features

- Mobile-First Responsive Design
- Hover-Effekte auf Karten
- Fixierte Navigation und Footer
- Glatte Animationen und Übergänge
- Barrierefreiheit (Accessibility) berücksichtigt

## Lizenz

MIT License - Siehe LICENSE Datei für Details.