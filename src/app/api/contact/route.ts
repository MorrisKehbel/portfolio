import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  try {
    const { firstName, lastName, email, company, message } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fullName = lastName ? `${firstName} ${lastName}` : firstName;

    const mailSubject = `Neue Nachricht von ${fullName}`;
    const mailText = `
Name: ${fullName}
Email: ${email}
${company && `Company: ${company}`}
Message:
${message}
`;

    const mailHtml = `
  <h2>Neue Nachricht vom Kontaktformular</h2>
  <p><strong>Name:</strong> ${fullName}</p>
  <p><strong>Email:</strong> ${email}</p>
  ${company ? `<p><strong>Firma:</strong> ${company}</p>` : ""}
  <p><strong>Nachricht:</strong></p>
  <p>${message.replace(/\n/g, "<br>")}</p>
`;

    await transporter.sendMail({
      from: `"${fullName}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: mailSubject,
      text: mailText,
      html: mailHtml,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
};
