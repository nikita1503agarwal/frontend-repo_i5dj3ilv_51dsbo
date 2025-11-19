import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ t, email }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/70 to-slate-950/90 pointer-events-none"></div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {t.badge}
          </div>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug text-white tracking-tight">
            {t.heroTitle}
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            {t.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={`mailto:${email}`} className="inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-3 transition shadow-lg shadow-indigo-500/20">
              {t.ctaPrimary}
            </a>
            <a href="#reviews" className="inline-flex items-center justify-center rounded-lg border border-white/15 hover:border-white/25 text-white/90 hover:text-white px-5 py-3 transition">
              {t.ctaSecondary}
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-400">{t.timeframe}</p>
        </div>
      </div>
    </section>
  )
}
