import Image from 'next/image';
import React from 'react';

const QuoteComponent = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 px-4"> {/* Contenedor externo para controlar el margen superior */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden"> 
        <div className="md:w-1/2 relative w-full h-80 md:h-96"> {/* Ajustada la altura en mobile */}
          <Image
            src="/Mauro-cipriano-finanzas.jpg" 
            alt="Mauro Cipriano"
            layout="fill" // Usar layout fill para que la imagen se ajuste al contenedor
            objectFit="cover" // Mantiene la proporción y recorta la imagen si es necesario
            className="rounded-l-lg"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center"> {/* Padding interno */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Finanzas Box Founder</h2> {/* Tamaño de texto ajustado */}
          <p className="text-base md:text-lg text-gray-600">
            Soy Mauro Cipriano, Licenciado en Administración por la Universidad de Buenos Aires y Asesor Idóneo por la Comisión Nacional de Valores, Matrícula Nº1939.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteComponent;
