import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { subject, html, from } = req.body;

    const data = await resend.emails.send({
      from:'Portfolio <onboarding@resend.dev>',
      to: 'ryan04.dev@gmail.com',
      subject: subject,
      html: `<p>${html}</p>`,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}