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

    // Validación simple
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setSuccess('Your message has been sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setError('');
    } else {
      setError('Failed to send your message. Please try again.');
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-2xl`}>
          Contact Us
        </h1>
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
            Name
          </label>
          <input
            className="block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500"
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mt-4">
          <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="message">
            Message
          </label>
          <textarea
            className="block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500"
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <Button className="mt-4 w-full">
          Send Message
        </Button>
      </div>
    </form>
  );
}
