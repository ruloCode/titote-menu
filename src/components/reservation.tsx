'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/context/language-context';

export function Reservation() {
  const { t, locale } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const message =
      locale === 'es'
        ? `Hola! Me gustaria hacer una reserva:\n\n` +
          `Fecha: ${formData.date}\n` +
          `Hora: ${formData.time}\n` +
          `Personas: ${formData.guests}\n` +
          `Nombre: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Telefono: ${formData.phone}\n` +
          (formData.notes ? `Notas: ${formData.notes}` : '')
        : `Hello! I would like to make a reservation:\n\n` +
          `Date: ${formData.date}\n` +
          `Time: ${formData.time}\n` +
          `Guests: ${formData.guests}\n` +
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone}\n` +
          (formData.notes ? `Notes: ${formData.notes}` : '');

    // Open WhatsApp (replace with actual number)
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const timeSlots = [
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
  ];

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservar" className="bg-gradient-mesh-gold relative overflow-hidden py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-titote-gold/10 absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
        <div className="bg-titote-red/5 absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />
      </div>

      {/* Decorative lines */}
      <div className="via-titote-gold/30 absolute top-32 left-10 h-px w-24 bg-gradient-to-r from-transparent to-transparent" />
      <div className="via-titote-gold/30 absolute right-10 bottom-32 h-px w-32 bg-gradient-to-r from-transparent to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="bg-titote-gold/10 border-titote-gold/20 text-titote-gold mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium tracking-widest uppercase">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {locale === 'es' ? 'Reservaciones' : 'Reservations'}
          </span>
          <h2 className="text-display-md text-titote-red-dark mb-4 font-bold">
            {t.reservation.title}
          </h2>
          <p className="text-titote-brown/70 mx-auto max-w-lg text-lg">{t.reservation.subtitle}</p>
        </div>

        {/* Form Card - Premium Glass Effect */}
        <div className="glass-premium relative overflow-hidden rounded-[2rem] p-8 shadow-2xl sm:p-12">
          {/* Card inner glow */}
          <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Name & Email */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-titote-brown flex items-center gap-2 text-sm font-semibold">
                  <svg
                    className="text-titote-red h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {t.reservation.name}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="input-premium border-titote-red/10 placeholder:text-titote-brown/40 w-full rounded-2xl border-2 bg-white/50 px-5 py-4 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-titote-brown flex items-center gap-2 text-sm font-semibold">
                  <svg
                    className="text-titote-red h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {t.reservation.email}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="input-premium border-titote-red/10 placeholder:text-titote-brown/40 w-full rounded-2xl border-2 bg-white/50 px-5 py-4 focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Phone & Guests */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-titote-brown flex items-center gap-2 text-sm font-semibold">
                  <svg
                    className="text-titote-red h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {t.reservation.phone}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="input-premium border-titote-red/10 placeholder:text-titote-brown/40 w-full rounded-2xl border-2 bg-white/50 px-5 py-4 focus:outline-none"
                  placeholder="+57 300 123 4567"
                />
              </div>
              <div className="space-y-2">
                <label className="text-titote-brown flex items-center gap-2 text-sm font-semibold">
                  <svg
                    className="text-titote-red h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {t.reservation.guests}
                </label>
                <select
                  required
                  value={formData.guests}
                  onChange={e => setFormData({ ...formData, guests: e.target.value })}
                  className="input-premium border-titote-red/10 w-full cursor-pointer appearance-none rounded-2xl border-2 bg-white/50 px-5 py-4 focus:outline-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23A51508'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.25rem',
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                    <option key={n} value={n}>
                      {n}{' '}
                      {n === 1
                        ? locale === 'es'
                          ? 'persona'
                          : 'person'
                        : locale === 'es'
                          ? 'personas'
                          : 'people'}
                    </option>
                  ))}
                  <option value="10+">
                    10+ ({locale === 'es' ? 'grupo grande' : 'large group'})
                  </option>
                </select>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-titote-brown flex items-center gap-2 text-sm font-semibold">
                  <svg
                    className="text-titote-red h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {t.reservation.date}
                </label>
                <input
                  type="date"
                  required
                  min={today}
                  value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                  className="input-premium border-titote-red/10 w-full rounded-2xl border-2 bg-white/50 px-5 py-4 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-titote-brown flex items-center gap-2 text-sm font-semibold">
                  <svg
                    className="text-titote-red h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {t.reservation.time}
                </label>
                <select
                  required
                  value={formData.time}
                  onChange={e => setFormData({ ...formData, time: e.target.value })}
                  className="input-premium border-titote-red/10 w-full cursor-pointer appearance-none rounded-2xl border-2 bg-white/50 px-5 py-4 focus:outline-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23A51508'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.25rem',
                  }}
                >
                  <option value="">{locale === 'es' ? 'Seleccionar hora' : 'Select time'}</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="text-titote-brown flex items-center gap-2 text-sm font-semibold">
                <svg
                  className="text-titote-red h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                {t.reservation.notes}
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                className="input-premium border-titote-red/10 placeholder:text-titote-brown/40 w-full resize-none rounded-2xl border-2 bg-white/50 px-5 py-4 focus:outline-none"
                placeholder={t.reservation.notesPlaceholder}
              />
            </div>

            {/* Submit Button - Premium */}
            <button
              type="submit"
              className="group glow-gold-hover relative w-full overflow-hidden rounded-2xl py-5 text-lg font-bold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Animated gradient background */}
              <div className="from-titote-gold via-titote-gold-light to-titote-gold animate-shimmer absolute inset-0 bg-gradient-to-r bg-[length:200%_100%]" />
              <div className="relative flex items-center justify-center gap-3">
                <svg
                  className="h-6 w-6 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {t.reservation.submit}
              </div>
            </button>
          </form>

          {/* Divider */}
          <div className="my-10 flex items-center gap-4">
            <div className="via-titote-red/20 h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
            <span className="text-titote-brown/50 text-sm font-medium">
              {t.reservation.whatsapp}
            </span>
            <div className="via-titote-red/20 h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
          </div>

          {/* WhatsApp Direct - Premium */}
          <a
            href={`https://wa.me/573001234567?text=${encodeURIComponent(t.whatsapp.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#25D366] py-5 text-lg font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#25D366]/30"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <svg
              className="relative h-7 w-7 transition-transform group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="relative">{t.reservation.whatsappBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
