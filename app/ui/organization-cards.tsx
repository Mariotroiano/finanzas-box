import React from 'react';
import Image from 'next/image';

const organizations = [
  {
    name: "Comisión Nacional de Valores",
    image: "/cnv.jpg", // Ruta correcta de la imagen
    description: "La CNV es el organismo encargado de la regulación y supervisión de los mercados de valores en Argentina. Fundada en 1968.",
    link: "https://www.cnv.gov.ar", // Enlace real de la CNV
  },
  {
    name: "Universidad de Buenos Aires",
    image: "/uni-bs.png", // Ruta correcta de la imagen
    description: "La UBA es una de las universidades más prestigiosas de América Latina, reconocida por su excelencia académica. Fundada en 1821.",
    link: "https://www.uba.ar", // Enlace real de la UBA
  },
];

export default function OrganizationCards() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 py-10 px-4 bg-gray-1 mt-10 mb-10"> {/* Asegura el centrado */}
      {organizations.map((organization) => (
        <div 
          key={organization.name} 
          className="bg-white rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl flex flex-col items-center md:flex-row md:items-start w-full md:max-w-2xl lg:max-w-3xl h-auto md:h-[400px]" // Altura fija solo en pantallas grandes
        >
          <div className="relative w-full md:w-1/2 h-64 md:h-full"> {/* Altura ajustada para pantallas pequeñas */}
            <Image 
              className="object-contain w-full h-full" // Asegura el ajuste de la imagen
              src={organization.image} 
              alt={organization.name} 
              layout="fill" 
              objectFit="contain" 
            />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between items-center text-center md:text-left md:items-start"> {/* Centrado en mobile */}
            <div>
              <h3 className="font-bold text-lg md:text-2xl mb-2 text-gray-800">{organization.name}</h3>
              <p className="text-gray-600 text-base mb-4">
                {organization.description}
              </p>
            </div>
            <div className="w-full">
              <a 
                href={organization.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-8 rounded-full w-full" // Botón más largo
              >
                Ir a la página
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
