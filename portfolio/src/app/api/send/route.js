import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail=process.env.FROM_EMAIL;
export async function POST(req,res) {
  const {body} =req
  const {email,subject,message}=body
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['aboood.dan2@gmail.com',email],
      subject: subject,
      react: <>
      <h1> {subject} </h1>
      <p>think you for contacting us</p>
      <p>{message}</p>
      </>,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
