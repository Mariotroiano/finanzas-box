'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Asegúrate de instalar react-icons

const ContactCard = () => {
  const whatsappLink = 'https://api.whatsapp.com/send/?phone=526241376483&text&type=phone_number&app_absent=0'; // Reemplaza con tu número

  return (
    <main className='flex bg-gray-1 p-6 mt-5 mb-5'>
      <div className="bg-white rounded-lg shadow-lg p-10 flex flex-col items-center max-w-lg mx-auto my-4 h-80"> {/* Cambiado a max-w-lg y h-80 para mayor tamaño */}
        <h2 className="text-2xl font-bold mb-4 text-center">¡ESCRIBENOS PARA QUE TE ASESOREMOS GRATIS!</h2> {/* Aumentado a text-2xl */}
        <div className="text-center mb-4">
          <p className="text-gray-700 text-center text-lg">Estamos aquí para ayudarte. Haz clic en el icono de WhatsApp para contactarnos.</p> {/* Aumentado a text-lg */}
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full" // Aumentado px a 8
        >
          <FaWhatsapp className="mr-2" /> {/* Icono de WhatsApp */}
          Escríbenos
        </a>
      </div>
    </main>
  );
};

export default ContactCard;
