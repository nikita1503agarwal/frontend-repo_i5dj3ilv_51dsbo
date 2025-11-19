import React from 'react'
import { Clock, FileCheck2, Wrench, Rocket } from 'lucide-react'

export default function Steps({ t }) {
  const steps = [
    {
      icon: <FileCheck2 className="w-5 h-5" />, title: t.steps[0].title, desc: t.steps[0].desc
    },
    {
      icon: <Wrench className="w-5 h-5" />, title: t.steps[1].title, desc: t.steps[1].desc
    },
    {
      icon: <Clock className="w-5 h-5" />, title: t.steps[2].title, desc: t.steps[2].desc
    },
    {
      icon: <Rocket className="w-5 h-5" />, title: t.steps[3].title, desc: t.steps[3].desc
    }
  ]
  return (
    <section id="process" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-8">{t.processTitle}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center gap-3 text-slate-200">
                <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center">{s.icon}</div>
                <span className="text-sm font-medium tracking-wide">{String(i+1).padStart(2,'0')}</span>
              </div>
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
