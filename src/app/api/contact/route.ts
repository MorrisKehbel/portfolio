import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  try {
    const { firstName, lastName, email, company, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        {
          success: false,
        },
        { status: 400 },
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
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

        <!-- Header -->
        <tr><td style="background-color:#18181b;padding:32px 40px;">
          <h1 style="margin:0;font-size:20px;font-weight:600;color:#ffffff;letter-spacing:-0.3px;">Neue Nachricht</h1>
          <p style="margin:6px 0 0;font-size:13px;color:#a1a1aa;">via Portfolio Kontaktformular</p>
        </td></tr>

        <!-- Contact Info -->
        <tr><td style="padding:32px 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:12px 16px;background-color:#fafafa;border-radius:8px;border-left:3px solid #18181b;">
                <p style="margin:0 0 2px;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#71717a;font-weight:600;">Absender</p>
                <p style="margin:0;font-size:15px;color:#18181b;font-weight:500;">${fullName}</p>
              </td>
            </tr>
            <tr><td height="10"></td></tr>
            <tr>
              <td style="padding:12px 16px;background-color:#fafafa;border-radius:8px;border-left:3px solid #18181b;">
                <p style="margin:0 0 2px;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#71717a;font-weight:600;">E-Mail</p>
                <a href="mailto:${email}" style="font-size:15px;color:#2563eb;text-decoration:none;font-weight:500;">${email}</a>
              </td>
            </tr>
            ${
              company
                ? `<tr><td height="10"></td></tr>
            <tr>
              <td style="padding:12px 16px;background-color:#fafafa;border-radius:8px;border-left:3px solid #18181b;">
                <p style="margin:0 0 2px;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#71717a;font-weight:600;">Firma</p>
                <p style="margin:0;font-size:15px;color:#18181b;font-weight:500;">${company}</p>
              </td>
            </tr>`
                : ""
            }
          </table>
        </td></tr>

        <!-- Divider -->
        <tr><td style="padding:24px 40px 0;"><hr style="border:none;border-top:1px solid #e4e4e7;margin:0;"></td></tr>

        <!-- Message -->
        <tr><td style="padding:24px 40px 36px;">
          <p style="margin:0 0 12px;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#71717a;font-weight:600;">Nachricht</p>
          <p style="margin:0;font-size:15px;color:#27272a;line-height:1.7;">${message.replace(/\n/g, "<br>")}</p>
        </td></tr>

      </table>

      <!-- Footer -->
      <p style="margin:24px 0 0;font-size:12px;color:#a1a1aa;text-align:center;">morriskehbel.de</p>
    </td></tr>
  </table>
</body>
</html>
`;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      replyTo: `"${fullName}" <${email}>`,
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
