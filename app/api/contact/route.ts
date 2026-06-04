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
        <h2>Nouvelle demande de devis</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td><strong>Prénom</strong></td><td>${prenom}</td></tr>
          <tr><td><strong>Nom</strong></td><td>${nom}</td></tr>
          <tr><td><strong>Téléphone</strong></td><td>${telephone}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email || "—"}</td></tr>
          <tr><td><strong>Service</strong></td><td>${service}</td></tr>
          <tr><td><strong>Message</strong></td><td style="white-space:pre-wrap">${message || "—"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
