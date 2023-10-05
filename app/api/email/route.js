import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import Email from '@/app/emails/welcome';

const resend = new Resend(process.env.NEXT_PUBLIC_EMAIL_SENDER_ID);

// export async function Get(){
//   // const {name} = await request.json()
//     resend.sendEmail({
//       from: 'onboarding@resend.dev',
//       to: 'stanker801@gmail.com',
//       subject: 'hello world',
//       react: Email(),
//     });
//     return NextResponse.json({
//         status: 'send'
//     })
// }
export async function POST(request) {
  const {name, usergmail, subject, message} = await request.json()
  resend.sendEmail({
    from: 'onboarding@resend.dev',
    to: 'harisakbar80970@gmail.com',
    subject: 'Message',
    react: Email({
      name,
      usergmail,
      subject,
      message
    }),
  }).then((error)=>{console.log(error)});
  return NextResponse.json({
      status: 'send'
  })
}