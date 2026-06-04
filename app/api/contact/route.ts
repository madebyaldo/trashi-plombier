import { NextResponse } from "next/server";
import { Resend } from "resend";

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
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

        <!-- Header -->
        <tr><td style="background:#0c1c35;border-radius:12px 12px 0 0;padding:28px 32px;">
          <p style="margin:0;font-size:11px;font-weight:700;color:rgba(255,255,255,0.4);letter-spacing:0.15em;text-transform:uppercase;">Trashi Plombier · Metz</p>
          <p style="margin:8px 0 0;font-size:22px;font-weight:900;color:#ffffff;">Nouvelle demande de devis</p>
        </td></tr>

        <!-- Orange bar -->
        <tr><td style="background:#EA580C;height:4px;"></td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:32px;border-radius:0 0 12px 12px;">

          <!-- Service badge -->
          <p style="margin:0 0 24px;"><span style="background:#EA580C;color:#fff;font-size:12px;font-weight:700;padding:4px 12px;border-radius:99px;">${service}</span></p>

          <!-- Info rows -->
          <table width="100%" cellpadding="0" cellspacing="0">
            ${[
              ["Prénom", prenom],
              ["Nom", nom],
              ["Téléphone", telephone],
              ["Email", email || "—"],
            ].map(([label, value]) => `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;width:120px;font-size:12px;font-weight:700;color:#71717a;text-transform:uppercase;letter-spacing:0.08em;">${label}</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:15px;color:#18181b;font-weight:500;">${value}</td>
            </tr>`).join("")}
          </table>

          ${message ? `
          <!-- Message -->
          <div style="margin-top:24px;background:#f9fafb;border-radius:8px;padding:16px;">
            <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#71717a;text-transform:uppercase;letter-spacing:0.1em;">Message</p>
            <p style="margin:0;font-size:14px;color:#18181b;line-height:1.6;white-space:pre-wrap;">${message}</p>
          </div>` : ""}

          <!-- CTA -->
          <div style="margin-top:28px;padding-top:24px;border-top:1px solid #f0f0f0;text-align:center;">
            <a href="tel:${BUSINESS.phoneClean}" style="display:inline-block;background:#EA580C;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:10px;">
              Rappeler ${prenom} →
            </a>
          </div>

        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 0;text-align:center;">
          <p style="margin:0;font-size:12px;color:#a1a1aa;">Trashi Plombier · Metz 57000 · trashi-plombier.fr</p>
        </td></tr>

      </table>
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
