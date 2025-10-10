import { Resend } from 'resend';
import { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { subject, html} = req.body;

    const data = await resend.emails.send({
      from:'Portfolio <onboarding@resend.dev>',
      to: 'ryan04.dev@gmail.com',
      subject: subject,
      html: `<p>${html}</p>`,
    });

    res.status(200).json({ success: true, data });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    res.status(500).json({ error: errorMessage });
  }
}