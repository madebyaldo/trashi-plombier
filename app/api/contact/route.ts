import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BUSINESS } from "@/lib/seo-data";

const TO_EMAIL = "renaldotrashi2@gmail.com";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { prenom, nom, telephone, email, service, message } = body;

    if (!prenom || !nom || !telephone || !service) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Trashi Plombier <contact@trashi-plombier.fr>",
      to: TO_EMAIL,
      subject: `Nouvelle demande – ${service} (${prenom} ${nom})`,
      html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#ffffff;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#18181b;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <tr><td>

      <!-- Top bar -->
      <div style="width:40px;height:4px;background:#EA580C;border-radius:2px;margin-bottom:28px;"></div>

      <!-- Title -->
      <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#a1a1aa;letter-spacing:0.12em;text-transform:uppercase;">Trashi Plombier</p>
      <p style="margin:0 0 32px;font-size:24px;font-weight:900;color:#0c1c35;">Nouvelle demande — ${service}</p>

      <!-- Contact info -->
      <p style="margin:0 0 6px;font-size:18px;font-weight:700;color:#18181b;">${prenom} ${nom}</p>
      <p style="margin:0 0 4px;font-size:15px;color:#18181b;"><a href="tel:${BUSINESS.phoneClean}" style="color:#EA580C;text-decoration:none;font-weight:600;">${telephone}</a></p>
      ${email ? `<p style="margin:0 0 4px;font-size:14px;color:#71717a;">${email}</p>` : ""}

      <div style="margin:28px 0;border-top:1px solid #f0f0f0;"></div>

      ${message ? `
      <!-- Message -->
      <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.1em;">Message</p>
      <p style="margin:0 0 28px;font-size:15px;color:#18181b;line-height:1.7;white-space:pre-wrap;">${message}</p>
      <div style="margin:28px 0;border-top:1px solid #f0f0f0;"></div>
      ` : ""}

      <!-- Footer -->
      <p style="margin:0;font-size:12px;color:#a1a1aa;">Trashi Plombier · Metz 57000</p>

    </td></tr>
  </table>
</body>
</html>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
