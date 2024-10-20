// import { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     // Crea un transportador usando tu proveedor de correo electrónico
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.example.com', // Cambia esto a tu SMTP
//       port: 587,
//       auth: {
//         user: 'tu-email@example.com', // Tu correo electrónico
//         pass: 'tu-contraseña', // Tu contraseña
//       },
//     });

//     try {
//       await transporter.sendMail({
//         from: email,
//         to: 'destinatario@example.com', // Cambia esto al correo del destinatario
//         subject: `Mensaje de ${name}`,
//         text: message,
//         html: `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Mensaje: ${message}</p>`,
//       });

//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
