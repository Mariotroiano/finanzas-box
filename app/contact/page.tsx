'use client'

import React, { useState } from 'react';
import { AtSymbolIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/button';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess('¡Tu mensaje ha sido enviado con éxito!');
        setName('');
        setEmail('');
        setMessage('');
        setError('');
      } else {
        setError(data.error || 'Hubo un problema al enviar tu mensaje.');
      }
    } catch (err) {
      setError('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    }
  };

  return (
    <main className='bg-gray-2 p-6 mt-4'>
      <form className="space-y-3 bg-white rounded-lg shadow-lg mx-auto max-w-md" onSubmit={handleSubmit}>
        <div className="flex-1 rounded-lg px-6 pb-4 pt-8">
          <h1 className="mb-3 text-2xl">Contáctanos</h1>
          {error && (
            <div className="flex items-center text-red-500">
              <ExclamationCircleIcon className="h-5 w-5 mr-2" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="flex items-center text-green-500">
              <span>{success}</span>
            </div>
          )}
          <div>
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="name">
              Nombre
            </label>
            <input
              className="block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500"
              id="name"
              type="text"
              name="name"
              placeholder="Escribe tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="email">
              Correo electrónico
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Escribe tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="message">
              Mensaje
            </label>
            <textarea
              className="block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500"
              id="message"
              name="message"
              placeholder="Escribe tu mensaje"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="text-center mt-10">
            <button className="bg-gray-4 hover:bg-gray-5 text-white font-bold py-2 px-4 rounded-full w-full">
              Enviar Mensaje
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
