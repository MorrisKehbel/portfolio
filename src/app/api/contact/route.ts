import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

const { SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_EMAIL, SITE_URL } = process.env;
if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL || !SITE_URL) {
  throw new Error(
    "Missing required environment variables: SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_EMAIL, SITE_URL",
  );
}

const rateLimit = new Map<string, { count: number; reset: number }>();

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email: string;
  company?: string;
  message: string;
}

const sanitizeHeader = (str: string): string => str.replace(/[\r\n]/g, "");

const escapeHtml = (str: string): string =>
  str.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[c] ?? c,
  );

const isRateLimited = (ip: string): boolean => {
  const now = Date.now();

  if (rateLimit.size > 1000) {
    for (const [k, v] of rateLimit) {
      if (now > v.reset) rateLimit.delete(k);
    }
  }

  const entry = rateLimit.get(ip);

  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count++;
  return false;
};

const isInvalid = ({
  firstName,
  lastName,
  email,
  company,
  message,
}: ContactPayload): boolean =>
  !email ||
  !message ||
  !EMAIL_REGEX.test(email) ||
  (firstName?.length ?? 0) > 20 ||
  (lastName?.length ?? 0) > 20 ||
  email.length > 50 ||
  (company?.length ?? 0) > 50 ||
  message.length > 5000;

const buildTextEmail = (
  fullName: string,
  email: string,
  company: string | undefined,
  message: string,
): string =>
  [
    `Name: ${fullName}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : "",
    "",
    "Message:",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

const infoRow = (label: string, content: string): string => `
    <tr>
      <td style="padding:12px 16px;background-color:#fafafa;border-radius:8px;border-left:3px solid #18181b;">
        <p style="margin:0 0 2px;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#71717a;font-weight:600;">${label}</p>
        ${content}
      </td>
    </tr>`;

const buildHtmlEmail = (
  fullName: string,
  safeEmail: string,
  safeCompany: string | undefined,
  safeMessage: string,
): string => {
  const companyRow = safeCompany
    ? `<tr><td height="10"></td></tr>${infoRow("Firma", `<p style="margin:0;font-size:15px;color:#18181b;font-weight:500;">${safeCompany}</p>`)}`
    : "";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

        <tr><td style="background-color:#18181b;padding:32px 40px;">
          <h1 style="margin:0;font-size:20px;font-weight:600;color:#ffffff;letter-spacing:-0.3px;">Neue Nachricht</h1>
          <p style="margin:6px 0 0;font-size:13px;color:#a1a1aa;">via Portfolio Kontaktformular</p>
        </td></tr>

        <tr><td style="padding:32px 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${infoRow("Absender", `<p style="margin:0;font-size:15px;color:#18181b;font-weight:500;">${fullName}</p>`)}
            <tr><td height="10"></td></tr>
            ${infoRow("E-Mail", `<a href="mailto:${safeEmail}" style="font-size:15px;color:#2563eb;text-decoration:none;font-weight:500;">${safeEmail}</a>`)}
            ${companyRow}
          </table>
        </td></tr>

        <tr><td style="padding:24px 40px 0;"><hr style="border:none;border-top:1px solid #e4e4e7;margin:0;"></td></tr>

        <tr><td style="padding:24px 40px 36px;">
          <p style="margin:0 0 12px;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#71717a;font-weight:600;">Nachricht</p>
          <p style="margin:0;font-size:15px;color:#27272a;line-height:1.7;">${safeMessage}</p>
        </td></tr>

      </table>
      <p style="margin:24px 0 0;font-size:12px;color:#a1a1aa;text-align:center;">morriskehbel.de</p>
    </td></tr>
  </table>
</body>
</html>`;
};

export const POST = async (req: NextRequest) => {
  const origin = req.headers.get("origin");
  if (!origin || origin !== SITE_URL) {
    return NextResponse.json({ success: false }, { status: 403 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ success: false }, { status: 429 });
  }

  try {
    const { firstName, lastName, email, company, message } =
      (await req.json()) as ContactPayload;

    if (isInvalid({ firstName, lastName, email, company, message })) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const fullName = escapeHtml(
      lastName ? `${firstName ?? ""} ${lastName}`.trim() : (firstName ?? ""),
    );
    const safeEmail = escapeHtml(email);
    const safeCompany = company ? escapeHtml(company) : undefined;
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      replyTo: `"${sanitizeHeader(fullName)}" <${sanitizeHeader(email)}>`,
      to: CONTACT_EMAIL,
      subject: sanitizeHeader(`Neue Nachricht von ${fullName}`),
      text: buildTextEmail(fullName, email, company, message),
      html: buildHtmlEmail(fullName, safeEmail, safeCompany, safeMessage),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(
      "Contact form error:",
      err instanceof Error ? err.message : "unknown error",
    );
    return NextResponse.json({ success: false }, { status: 500 });
  }
};
