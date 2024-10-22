import { EmailTemplate } from '@/app/emails/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const to = process.env.EMAIL_USER as string;
const from = `Finanzas Box Web <${process.env.RESEND_VALID_DOMAIN}>`

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: from,
      to: [to],
      subject: `Nueva consulta`,
      react: EmailTemplate({name, email, message}),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Correo enviado con éxito', data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
