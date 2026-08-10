"use client";

import { useState, type FormEvent } from "react";

const COPY = {
  es: {
    name: "Nombre",
    namePh: "Tu nombre",
    email: "Correo electrónico",
    emailPh: "correo@ejemplo.com",
    tel: "Teléfono",
    telPh: "Tu teléfono",
    type: "Tipo de evento",
    typePh: "Selecciona una opción",
    wedding: "Boda",
    social: "Evento social",
    conference: "Congreso y reuniones",
    submit: "Enviar",
    subject: "Cotización de evento",
    body: (name: FormDataEntryValue | null, email: FormDataEntryValue | null, tel: FormDataEntryValue | null, evento: FormDataEntryValue | null) =>
      `Nombre: ${name}%0ACorreo: ${email}%0ATeléfono: ${tel}%0ATipo de evento: ${evento}`,
  },
  en: {
    name: "Name",
    namePh: "Your name",
    email: "Email",
    emailPh: "name@example.com",
    tel: "Phone",
    telPh: "Your phone number",
    type: "Event type",
    typePh: "Select an option",
    wedding: "Wedding",
    social: "Social event",
    conference: "Conference and/or Business Meeting",
    submit: "Send",
    subject: "Event quote request",
    body: (name: FormDataEntryValue | null, email: FormDataEntryValue | null, tel: FormDataEntryValue | null, evento: FormDataEntryValue | null) =>
      `Name: ${name}%0AEmail: ${email}%0APhone: ${tel}%0AEvent type: ${evento}`,
  },
};

export function EventInquiryForm({ locale = "es" }: { locale?: "es" | "en" }) {
  const [type, setType] = useState("");
  const t = COPY[locale];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = t.body(data.get("name"), data.get("email"), data.get("tel"), data.get("evento"));
    window.location.href = `mailto:info@hotelcostadeoro.mx?subject=${encodeURIComponent(t.subject)}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto grid max-w-[740px] grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-extrabold text-[#25383b]">
          {t.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={t.namePh}
          className="w-full rounded-md border border-[#7f6957] bg-[#8f7560] px-4 py-3 text-white placeholder-white/80 outline-none focus:ring-2 focus:ring-brand-gold-dark"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-extrabold text-[#25383b]">
          {t.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t.emailPh}
          className="w-full rounded-md border border-[#7f6957] bg-[#8f7560] px-4 py-3 text-white placeholder-white/80 outline-none focus:ring-2 focus:ring-brand-gold-dark"
        />
      </div>
      <div>
        <label htmlFor="tel" className="mb-1.5 block text-sm font-extrabold text-[#25383b]">
          {t.tel}
        </label>
        <input
          id="tel"
          name="tel"
          type="tel"
          required
          placeholder={t.telPh}
          className="w-full rounded-md border border-[#7f6957] bg-[#8f7560] px-4 py-3 text-white placeholder-white/80 outline-none focus:ring-2 focus:ring-brand-gold-dark"
        />
      </div>
      <div>
        <label htmlFor="evento" className="mb-1.5 block text-sm font-extrabold text-[#25383b]">
          {t.type}
        </label>
        <select
          id="evento"
          name="evento"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full rounded-md border border-[#7f6957] bg-[#8f7560] px-4 py-3 text-white outline-none focus:ring-2 focus:ring-brand-gold-dark"
        >
          <option value="" disabled hidden>
            {t.typePh}
          </option>
          <option value="Boda">{t.wedding}</option>
          <option value="Evento social">{t.social}</option>
          <option value="Congreso y reuniones">{t.conference}</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-fit rounded-md bg-brand-gold-dark px-10 py-3 font-extrabold text-white shadow-lg shadow-black/20 transition hover:bg-brand-gold-accent sm:col-span-2"
      >
        {t.submit}
      </button>
    </form>
  );
}
