import Image from 'next/image';
import React from 'react';

const QuoteComponent = () => {
  return (
    <main className='flex bg-gray-1 p-6 mt-5'>
      <div className="max-w-6xl mx-auto"> 
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden text-center md:text-left"> 
          {/* Imagen */}
          <div className="md:w-1/2 relative w-full h-80 md:h-96"> 
            <Image
              src="/mauro-cipriano-finanzas-box.jpeg" 
              alt="Mauro Cipriano"
              fill
              objectFit="cover" 
              className="rounded-l-lg"
            />
          </div>
          {/* Contenido */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center md:items-start items-center"> 
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Fundador de Finanzas Box</h2> 
            <p className="text-base md:text-lg text-gray-600">
              Soy Mauro Cipriano, Licenciado en Administración por la Universidad de Buenos Aires y Asesor Idóneo por la Comisión Nacional de Valores, Matrícula Nº1939.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuoteComponent;
