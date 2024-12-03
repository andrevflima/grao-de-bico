import React, { useState } from 'react';
import './Header.css';
import catalogData from '../utils/catalogUtils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Fechar o menu ao clicar no link
  };

  const CatalogMenu = () => {
    const handleLinkClick = (event) => {
      event.preventDefault();
      // Lógica ao clicar no link, se necessário
      console.log(`Você clicou no link: ${event.target.textContent}`);
    };
    };
  
  return (
    <header className="header">
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
      </div>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          {Object.keys(catalogData).map((category, index) => (
              <li key={index}>
                <a href={`#catalogo-${category.toLowerCase().replace(/ /g, '-')}`} onClick={handleLinkClick}>
                  Catálogo de {category}
                </a>
              </li>
            ))}
          <li><a href="/quem-somos">Quem Somos?</a></li>
          <li><a href="/fale-conosco">Fale Conosco</a></li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;