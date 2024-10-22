import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
      </div>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#catalog-grains">Catálogo de Grãos</a></li>
          <li><a href="#catalog-spices">Catálogo de Temperos</a></li>
          <li><a href="#catalog-herbs">Catálogo de Ervas</a></li>
          <li><a href="#catalog-snacks">Catálogo de Petiscos</a></li>
          <li><a href="#catalog-beauty">Catálogo de Beleza e Saúde</a></li>
          <li><a href="#catalog-flours">Catálogo de Farinhas</a></li>
          <li><a href="/quem-somos">Quem Somos?</a></li>
          <li><a href="/fale-conosco">Fale Conosco</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;