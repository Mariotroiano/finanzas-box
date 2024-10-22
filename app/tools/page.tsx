'use client';

import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

const ToolsPage = () => {
  const cashFlowLink = 'https://docs.google.com/spreadsheets/d/1sFr8l2mA3bZZWwiq_AqHxcyT14XaqoXR/edit?gid=320690154#gid=320690154';

  const handleDownload = () => {
    window.open(cashFlowLink, '_blank');
  };

  return (
    <main className="bg-gray-1 p-6 flex flex-col mt-4">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row max-w-4xl mx-auto my-4">
          <div className="flex-1 pr-0 md:pr-6 mb-4 md:mb-0">
            <h1 className="text-2xl font-bold mb-4">Descarga tu Cash Flow</h1>
            <p className="text-gray-700 mb-6">
              El Cash Flow es una herramienta fundamental tanto para empresas como para individuos, ya que permite
              controlar y gestionar los ingresos y gastos a lo largo del tiempo. Con un seguimiento adecuado, puedes
              tomar decisiones financieras más informadas, planificar tu presupuesto y asegurar la salud financiera,
              ya sea para tu hogar o tu negocio.
            </p>
            <div className="text-center mt-6">
              <button className="bg-gray-4 hover:bg-gray-5 text-white font-bold py-2 px-4 rounded-full w-full" onClick={handleDownload}>
                DESCARGA TU CASH FLOW
              </button>
            </div>
          </div>
          <div className="flex-shrink-0 hidden md:block">
            <Image
              src="/cash-flow-finanzas-box.jpg" 
              alt="Descripción de la imagen"
              width={300} 
              height={50}
              className="rounded-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>

    </main>
  );
};

export default ToolsPage;
