// Dao-Yu-101 Lernplattform - JavaScript
// Navigation und Interaktivität für die Lernplattform

console.log('Dao-Yu-101 Lernplattform - JavaScript geladen');

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navigation ein-/ausblenden
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // ARIA-Attribute aktualisieren
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Navigation schließen, wenn ein Link geklickt wird
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Navigation schließen, wenn außerhalb geklickt wird
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Smooth Scrolling für Anker-Links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Aktiven Link aktualisieren
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
    
    // Kurs-Button Interaktionen
    const kursButtons = document.querySelectorAll('.kurs-button');
    kursButtons.forEach(button => {
        button.addEventListener('click', function() {
            const kursTitle = this.closest('.kurs-card').querySelector('h3').textContent;
            console.log(`Kurs "${kursTitle}" wurde ausgewählt`);
            
            // Visuelles Feedback
            this.textContent = 'Ausgewählt ✓';
            this.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
            
            setTimeout(() => {
                this.textContent = 'Jetzt starten';
                this.style.background = '';
            }, 2000);
        });
    });
    
    // Scroll-Position für aktive Navigation
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});

// TODO: Zukünftige Funktionen implementieren:
// - Benutzer-Interaktionen
// - Kurs-Navigation
// - Lernfortschritt-Tracking
// - Dynamische Inhalte
// - Formular-Validierung
// - Animationen und Übergänge
