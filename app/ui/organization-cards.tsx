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
    <div className="flex flex-wrap justify-center gap-10 py-10 px-4 bg-gray-100 mt-10 mb-10">
      {organizations.map((organization) => (
        <div 
          key={organization.name} 
          className="bg-white rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl flex flex-col md:flex-row w-full md:max-w-2xl lg:max-w-3xl h-[400px]" // Altura fija
        >
          <div className="relative w-full md:w-1/2 h-full">
            <Image 
              className="object-contain w-full h-full" // Cambiado a contain
              src={organization.image} 
              alt={organization.name} 
              layout="fill" // Usar layout fill para que la imagen se ajuste
              objectFit="contain" // Asegurarse de que la imagen no se recorte
            />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg md:text-2xl mb-2 text-gray-800">{organization.name}</h3>
              <p className="text-gray-600 text-base mb-4">
                {organization.description}
              </p>
            </div>
            <div className="text-center">
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
