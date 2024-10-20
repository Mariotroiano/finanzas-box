import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './icons';

const Footer = () => {
  return (
    <footer className="bg-gray-3 text-white py-6">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-4 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
          <div className="p-5 sm:w-2/12 border-r sm:border-gray-4 border-0">
            <div className="text-sm uppercase text-gray-4 font-bold">Menu</div>
            <ul className="mt-2">
              <li className="my-2">
                <a className="hover:text-gray-4" href="#">Home</a>
              </li>
              <li className="my-2">
                <a className="hover:text-gray-4" href="#">Services</a>
              </li>
              <li className="my-2">
                <a className="hover:text-gray-4" href="#">Products</a>
              </li>
              <li className="my-2">
                <a className="hover:text-gray-4" href="#">Pricing</a>
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
            <div className="text-sm uppercase text-gray-4 font-bold">Contact Us</div>
            <ul className="mt-2">
              <li className="my-2">
                <a className="hover:text-gray-4" href="#">XXX XXXX, Floor 4 San Francisco, CA</a>
              </li>
              <li className="my-2">
                <a className="hover:text-gray-4" href="#">contact@maurocipriano.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="flex justify-center items-center mt-2">
          <a href="https://www.facebook.com/MauroCipriano" className="w-6 mx-1" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/MauroCipriano" className="w-6 mx-1" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/maurocipriano" className="w-6 mx-1" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com/MauroCipriano" className="w-6 mx-1" aria-label="Twitter">
            <TwitterIcon />
          </a>
        </div>
        <div className="my-5 text-center">© Copyright 2024. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;
