import React from 'react'

export default function TrustedBy({ t }) {
  const logos = [
    'CoolAir Co.', 'ThermoPro', 'HVAC Masters', 'BreezeFlow', 'ClimateWorks'
  ]
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm text-slate-400 mb-6">{t.trustedBy}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 opacity-70">
          {logos.map((l) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/5 py-4 text-center text-slate-300">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
