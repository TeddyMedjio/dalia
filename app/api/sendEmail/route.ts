// pages/api/sendEmail.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, object, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "scie.o2switch.net", // ou mail.o2switch.net
      port: 465,
      secure: true,
      auth: {
        user: process.env.SWITCH_USER!, // exemple: contact@votredomaine.com
        pass: process.env.SWITCH_PASS!, // mot de passe
      },
    });

    await transporter.sendMail({
      from: `${email}`,
      to: `${process.env.SWITCH_USER}`,
      subject: "Nouveau message depuis le formulaire",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Objet:</strong> ${object}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur d'envoi :", error);
    return NextResponse.json(
      { success: false, error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}

// export async function POST(req: NextRequest) {
//   try {
//     const { name, email, object, message } = await req.json();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASS,
//       },
//     });
//     const mail = {
//       from: `${email}`,
//       to: `${process.env.GMAIL_USER}`,
//       subject: "Nouveau message depuis le formulaire",
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Objet:</strong> ${object}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//     };
//     await transporter.sendMail(mail);
//     return NextResponse.json({ success: true }, { status: 200 });
//   } catch (err) {
//     console.error("Email error:", err);
//     return NextResponse.json(
//       { error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }
