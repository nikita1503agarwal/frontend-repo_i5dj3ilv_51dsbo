import React from 'react'

export default function FAQ({ t }) {
  return (
    <section id="faq" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-8">{t.faqTitle}</h2>
        <div className="space-y-4">
          {t.faq.map((item, idx) => (
            <details key={idx} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <summary className="cursor-pointer list-none text-white/90 font-medium flex items-center justify-between">
                {item.q}
                <span className="ml-4 text-slate-400 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-2 text-slate-400">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
