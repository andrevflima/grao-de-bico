import Header from '../components/Header';
import { useState, useRef } from 'react';
import catalogData from '../utils/catalogUtils';
import './Home.css';

const Home = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionsRef = useRef([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedItems((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSelectAll = (items) => {
    const allSelected = items.every((item) => selectedItems.includes(item));
    if (allSelected) {
      setSelectedItems((prev) =>
        prev.filter((item) => !items.includes(item))
      );
    } else {
      setSelectedItems((prev) => [...prev, ...items.filter((item) => !prev.includes(item))]);
    }
  };

  const removeItem = (item) => {
    setSelectedItems((prev) => prev.filter((selected) => selected !== item));
  };

  const removeAllItems = () => {
    setSelectedItems([]); 
  };

  const sendWhatsAppMessage = () => {
    const message = `Itens selecionados: ${selectedItems.join(', ')}`;
    const whatsappUrl = `https://wa.me/558194069803?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="home">
      <Header />
      <section className="home-intro">
        <div className="home-logo">
          <img src="../assets/logo.webp" alt="logo grão de bico" />
        </div>
      </section>
        <div className="home-description">
          <img src="../assets/seta.svg" alt="seta" />
          <span>Arraste para ver o nosso catálogo</span>
        </div>

      {Object.entries(catalogData).map(([category, items], index) => (
        <section
          key={index}
          id={`catalogo-${category
            .toLowerCase()
            .replace(/ /g, "-") // Substitui espaços por hífens
            .replace(/[^a-z0-9-áàãâéêíóôõúç-]/g, "")}`}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="catalog-section"
        >
          <img src="../assets/folhabg.webp" className='folhabg' alt="seta" />
          <div className='content'>
            <h2>{`Catálogo de ${category}`}</h2>
            <p>Aqui você encontra produtos selecionados do catálogo de {category}.</p>
          

            <button
              onClick={() => handleSelectAll(items)}
              className="select-all-button"
            >
              {items.every((item) => selectedItems.includes(item))
                ? 'Desmarcar Todos'
                : 'Selecionar Todos'}
            </button>

            <div className="catalog-items">
              {items.map((item, idx) => (
                <label key={idx} className="catalog-item">
                  <input
                    type="checkbox"
                    value={item}
                    checked={selectedItems.includes(item)}
                    onChange={handleCheckboxChange}
                  />
                  {item}
                </label>
              ))}
            </div>
            </div>
        </section>
      ))}

      {selectedItems.length > 0 && (
        <div className="fixed-footer">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? 'Fechar Menu' : 'Mostrar Itens Selecionados'}
          </button>

          {isMenuOpen && (
            <div className="selected-items-menu">
              <h3>Itens Selecionados:</h3>
              <ul>
                {selectedItems.map((item, idx) => (
                  <li key={idx}>
                    {item} 
                    <button onClick={() => removeItem(item)}>Remover</button>
                  </li>
                ))}
              </ul>
              
              <button onClick={removeAllItems}>
                Remover Tudo
              </button>

              <button onClick={sendWhatsAppMessage}>Continuar</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;