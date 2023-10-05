import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import StripeWelcomeEmail from '@/app/emails/NewsLetter';

const resend = new Resend(process.env.NEXT_PUBLIC_EMAIL_SENDER_ID);

export async function POST(request) {
  const {mail} = await request.json()
  console.log(mail)
  resend.sendEmail({
    from: 'onboarding@resend.dev',
    to: 'harisakbar80970@gmail.com',
    subject: 'News Letter',
    react: StripeWelcomeEmail({
      mail
    }),
  }).then((error)=>{console.log(error)});
  return NextResponse.json({
      status: 'send'
  })
}