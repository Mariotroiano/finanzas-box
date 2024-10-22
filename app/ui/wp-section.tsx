'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactCard = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=541165433847&text=Hola%2C%20quiero%20mas%20informaci%C3%B3n%20para%20invertir%20en%20bolsa';

  return (
    <main className='flex justify-center p-6 mt-5 mb-5 bg-gray-100'>
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center max-w-lg mx-auto min-h-[120px] sm:min-h-[300px]">
        <h2 className="text-2xl font-bold mb-4 text-center">¡ESCRÍBENOS PARA QUE TE ASESOREMOS GRATIS!</h2>
        <p className="text-gray-700 text-center text-lg mb-6">
          Estamos aquí para ayudarte. Haz clic en el icono de WhatsApp para contactarnos.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full w-full sm:w-auto transition duration-200"
        >
          <FaWhatsapp className="mr-2" />
          Escríbenos
        </a>
      </div>
    </main>
  );
};

export default ContactCard;
