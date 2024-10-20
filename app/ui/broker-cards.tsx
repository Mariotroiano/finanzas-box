import React from 'react';

const brokers = [
  {
    name: "Inviu",
    image: "/inviu.png", // Asegúrate de tener esta imagen en tu proyecto
    description: "Simplifica tu acceso a los mercados financieros con Inviu. La plataforma perfecta para inversores principiantes que buscan una solución rápida y moderna.",
  },
  {
    name: "Balanz",
    image: "/balanz.jpg", // Asegúrate de tener esta imagen en tu proyecto
    description: "Con Balanz, tienes una plataforma robusta que te brinda herramientas avanzadas para gestionar tu portafolio de inversiones de forma eficiente.",
  },
  {
    name: "Bull Market",
    image: "/bull-market.jpg", // Asegúrate de tener esta imagen en tu proyecto
    description: "Accede a una amplia variedad de activos con Bull Market, una solución ágil que te conecta con oportunidades en tiempo real.",
  },
];

export default function BrokerCards() {
  return (
    <div className="bg-gray-1 py-10 px-4 mt-20">
      <h2 className="text-4xl font-bold text-gray-4 text-center mb-6">
        TRABAJAMOS DE MANERA INDEPENDIENTE<br />
        <div style={{height: '20px'}}></div>
        CON LOS SIGUIENTES BROKERS DE BOLSA<br />
        <p className="text-xl font-normal mt-10 b-10">(Abrite cuenta ahora y solicítame como asesor es GRATIS)</p>
      </h2>
      <div className="flex justify-center flex-wrap gap-8">
        {brokers.map((broker) => (
          <div key={broker.name} className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
            <img className="w-full h-48 object-cover" src={broker.image} alt={broker.name} />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-3 text-gray-4">{broker.name}</h3>
              <p className="text-gray-4 text-base mb-6 min-h-[150px]">
                {broker.description}
              </p>
              <div className="text-center">
                <button className="bg-gray-4 hover:bg-gray-5 text-white font-bold py-2 px-4 rounded-full w-full">
                  ABRIR CUENTA GRATIS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
