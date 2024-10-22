import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-3 text-white">
      <div className="max-w-screen-lg pt-6 px-4 sm:px-6 text-gray-4 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
          <div className="p-4 sm:w-2/12 border-r sm:border-gray-4 border-0">
            <div className="text-sm uppercase text-gray-4 font-bold">Menu</div>
            <ul className="mt-2">
              <li className="my-2">
                <a className="hover:text-gray-4" href="/">Home</a> 
              </li>
              <li className="my-2">
                <a className="hover:text-gray-4" href="/contact">Consultas</a>
              </li>
              <li className="my-2">
                <a className="hover:text-gray-4" href="/tools">Herramientas</a> 
              </li>
            </ul>
          </div>
          <div className="p-5 sm:w-7/12 text-center">
            <h3 className="font-bold text-xl text-gray-4 mb-4">Finanzas Box</h3>
            <p className="text-gray-4 text-sm mb-10">
              "Invertir en conocimiento siempre paga los mejores intereses."
            </p>
          </div>
          <div className="p-5 sm:w-3/12 text-center sm:text-left ">
            <div className="text-sm uppercase text-gray-4 font-bold">Contáctanos</div>
            <ul className="mt-2">
              <li className="my-2">
                <a className="hover:text-gray-4" href="#">Bs As Argentina</a>
              </li>
              <li className="my-2">
                <a className="hover:text-gray-4" href="mailto:maurociprianotrader4@gmail.com">maurociprianotrader4@gmail.com</a> {/* Enlace de correo */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="flex justify-center items-center mt-2">
          <a 
            href="https://www.facebook.com/mauro.cipriano.980" 
            className="w-10 mx-2 text-gray-4" 
            aria-label="Facebook" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaFacebookF size={30} /> 
          </a>
          <a 
            href="https://www.instagram.com/finanzas.box/" 
            className="w-10 mx-2 text-gray-4" 
            aria-label="Instagram" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} /> 
          </a>
          <a 
            href="https://www.linkedin.com/in/mauro-cipriano-03ab36207/" 
            className="w-10 mx-2 text-gray-4" 
            aria-label="LinkedIn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={30} /> 
          </a>
        </div>
        <div className="my-5 text-center">© Copyright 2024. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;
