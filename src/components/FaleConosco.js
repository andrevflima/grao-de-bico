import React from 'react';
import './Home.css';
import { FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const QuemSomos = () => {
  return (
    <section className='quem-somos'>
      <div className='content'>
        <h1>Fale Conosco</h1>
        <a href='/' className='select-all-button'>Voltar para Home</a>
      </div>

      <div className='contact-cards'>
        {/* Card Grão de Bico Delivery Zona Sul */}
        <a
          href='https://wa.me/5581991317006?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20Grão%20de%20Bico%20Delivery%20Zona%20Sul.'
          target='_blank'
          rel='noopener noreferrer'
          className='card'
        >
          <FaMapMarkerAlt className='card-icon' />
          <h3>Grão de Bico Delivery - Zona Sul</h3>
          <p>Mercado de Boa Viagem, 4834 bx. 106</p>
          <p><FaWhatsapp /> +55 81 99131-7006</p>
        </a>

        {/* Card Grão de Bico Boa Viagem */}
        <a
          href='https://wa.me/5581994069803?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20Grão%20de%20Bico%20Boa%20Viagem.'
          target='_blank'
          rel='noopener noreferrer'
          className='card'
        >
          <FaMapMarkerAlt className='card-icon' />
          <h3>Grão de Bico - Boa Viagem</h3>
          <p>Av. Conselheiro Aguiar, 4480 lj. 1</p>
          <p><FaWhatsapp /> +55 81 99406-9803</p>
        </a>

        {/* Card Instagram */}
        <a
          href='https://www.instagram.com/graodebicorecife'
          target='_blank'
          rel='noopener noreferrer'
          className='card'
        >
          <FaInstagram className='card-icon' />
          <h3>Instagram</h3>
          <p>Visitar o Instagram</p>
        </a>
      </div>
    </section>
  );
};

export default QuemSomos;
