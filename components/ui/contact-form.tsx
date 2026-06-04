"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { BUSINESS } from "@/lib/seo-data";

const SERVICES = [
  "Dépannage urgence",
  "Fuite d'eau",
  "Débouchage canalisation",
  "Installation plomberie",
  "Rénovation salle de bain",
  "Installation chaudière",
  "Entretien chaudière",
  "Plancher chauffant",
  "Pompe à chaleur",
  "Autre",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ prenom: "", nom: "", telephone: "", email: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-12 px-4">
        <CheckCircle className="w-8 h-8 mb-4" style={{ color: "#EA580C" }} />
        <h3 className="font-heading font-black text-ink-900 text-[22px] mb-2">
          Demande envoyée.
        </h3>
        <p className="text-ink-500 text-[15px] leading-relaxed max-w-xs">
          On vous recontacte rapidement. Pour une urgence, appelez-nous directement au{" "}
          <a href={`tel:${BUSINESS.phoneClean}`} className="font-semibold" style={{ color: "#EA580C" }}>
            {BUSINESS.phone}
          </a>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[13px] font-semibold underline underline-offset-2 text-ink-400 hover:text-ink-700 transition-colors"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Prénom + Nom */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-medium text-ink-700 mb-1.5">
            Prénom <span style={{ color: "#EA580C" }}>*</span>
          </label>
          <input
            type="text"
            name="prenom"
            value={form.prenom}
            onChange={handleChange}
            required
            placeholder="Jean"
            className="w-full px-4 py-3 rounded-xl border border-sand-200 text-[14px] text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-[#EA580C] transition-colors bg-white"
          />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-ink-700 mb-1.5">
            Nom <span style={{ color: "#EA580C" }}>*</span>
          </label>
          <input
            type="text"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            required
            placeholder="Dupont"
            className="w-full px-4 py-3 rounded-xl border border-sand-200 text-[14px] text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-[#EA580C] transition-colors bg-white"
          />
        </div>
      </div>

      {/* Téléphone + Email */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-medium text-ink-700 mb-1.5">
            Téléphone <span style={{ color: "#EA580C" }}>*</span>
          </label>
          <input
            type="tel"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            required
            placeholder="06 12 34 56 78"
            className="w-full px-4 py-3 rounded-xl border border-sand-200 text-[14px] text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-[#EA580C] transition-colors bg-white"
          />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-ink-700 mb-1.5">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jean@example.com"
            className="w-full px-4 py-3 rounded-xl border border-sand-200 text-[14px] text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-[#EA580C] transition-colors bg-white"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="block text-[13px] font-medium text-ink-700 mb-1.5">
          Type de demande <span style={{ color: "#EA580C" }}>*</span>
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-sand-200 text-[14px] text-ink-900 focus:outline-none focus:border-[#EA580C] transition-colors bg-white appearance-none"
        >
          <option value="">Choisissez…</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[13px] font-medium text-ink-700 mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Décrivez votre problème ou projet…"
          className="w-full px-4 py-3 rounded-xl border border-sand-200 text-[14px] text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-[#EA580C] transition-colors bg-white resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-[13px] bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Une erreur est survenue. Réessayez ou appelez-nous directement.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[15px] text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ background: "#EA580C" }}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Envoyer
          </>
        )}
      </button>

      <p className="text-[12px] text-ink-400 text-center">
        Réponse sous 24h. Urgence ?{" "}
        <a
          href={`tel:${BUSINESS.phoneClean}`}
          className="font-semibold"
          style={{ color: "#EA580C" }}
        >
          {BUSINESS.phone}
        </a>
      </p>
    </form>
  );
}
