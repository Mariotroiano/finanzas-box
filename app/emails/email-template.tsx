import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message,
  name,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f7f7f7', color: '#4a4a4a' }}>
    <div style={{ backgroundColor: '#e0e0e0', padding: '20px', borderRadius: '5px' }}>
      <h1 style={{ color: '#333', fontSize: '24px' }}>Nueva Consulta de {name} </h1>
      <p style={{ fontSize: '16px' }}>
        Has recibido una nueva consulta a través del formulario de contacto:
      </p>
      <h2 style={{ color: '#333', fontSize: '20px', marginTop: '20px' }}>Detalles del Cliente</h2>
      <p style={{ fontSize: '16px' }}>
        <strong>Nombre:</strong> {name}
        <br />
        <strong>Email:</strong> {email}
      </p>
      <h2 style={{ color: '#333', fontSize: '20px', marginTop: '20px' }}>Mensaje</h2>
      <p style={{ fontSize: '16px' }}>
        {message}
      </p>
    </div>
    <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px', color: '#777' }}>
      © 2024 Finanzas Box. Todos los derechos reservados.
    </div>
  </div>
);
