import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Fechar o menu ao clicar no link
  };
  
  return (
    <header className="header">
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
      </div>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#catalogo-grãos" onClick={handleLinkClick}>Catálogo de Grãos</a></li>
          <li><a href="#catalogo-temperos" onClick={handleLinkClick}>Catálogo de Temperos</a></li>
          <li><a href="#catalogo-ervas" onClick={handleLinkClick}>Catálogo de Ervas</a></li>
          <li><a href="#catalogo-petiscos" onClick={handleLinkClick}>Catálogo de Petiscos</a></li>
          <li><a href="#catalogo-beleza-e-saude" onClick={handleLinkClick}>Catálogo de Beleza e Saúde</a></li>
          <li><a href="#catalogo-farinhas" onClick={handleLinkClick}>Catálogo de Farinhas</a></li>
          <li><a href="/quem-somos">Quem Somos?</a></li>
          <li><a href="/fale-conosco">Fale Conosco</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;