import { Resend } from "resend";
import {redirect} from  'next/navigation'


// EMAIL SENDGING FUCTIONALITY 
// ADD RESEND_API_KEY IN YOUR .ENV FILE 
const resend = new Resend(process.env.RESEND_API_KEY);
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");
  if (!message) {
    return {
      error: "Invalid message",
    };
  }
  await resend.emails.send({
    from: "Portfolio Website İletişim <onboarding@resend.dev>",
    to: `ahmet2.faruk5@gmail.com`,
    subject: `${name} adlı kişiden mesaj.`,
    reply_to: `${SenderEmail}`,
    text: `Gönderen E-posta: ${SenderEmail} 
    ${name}:"${message}"`,
  });

return redirect('/')
 
  
};
