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
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f7f7f7', color: 'var(--gray-4)' }}>
    <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}>
      <h1 style={{ color: 'var(--gray-4)', fontSize: '28px', marginBottom: '10px', textAlign: 'center' }}>
        Nueva Consulta de {name}
      </h1>
      <p style={{ fontSize: '16px', lineHeight: '1.5', color: 'var(--gray-4)' }}>
        Has recibido una nueva consulta a través del formulario de contacto:
      </p>
      
      <div style={{ borderTop: '2px solid #e0e0e0', margin: '20px 0' }}></div>
      
      <h2 style={{ color: 'var(--gray-5)', fontSize: '22px', marginTop: '20px' }}>Detalles del Cliente</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
        <strong>Nombre:</strong> {name}
        <br />
        <strong>Email:</strong> {email}
      </p>
      
      <h2 style={{ color: 'var(--gray-5)', fontSize: '22px', marginTop: '20px' }}>Mensaje</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.5', backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '5px' }}>
        {message}
      </p>
      
      <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '14px', color: '#777' }}>
        <p style={{ marginBottom: '5px' }}>Si tienes preguntas, no dudes en contactarnos.</p>
        <p>© 2024 Finanzas Box. Todos los derechos reservados.</p>
      </div>
    </div>
  </div>
);
