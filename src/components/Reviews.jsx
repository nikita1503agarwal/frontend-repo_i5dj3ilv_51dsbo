import React from 'react'
import { Star } from 'lucide-react'

const ReviewCard = ({ name, role, text }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
    <div className="flex items-center gap-1 text-amber-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400" />
      ))}
    </div>
    <p className="mt-3 text-slate-300">“{text}”</p>
    <p className="mt-4 text-sm text-slate-400">— {name}, {role}</p>
  </div>
)

export default function Reviews({ t }) {
  const items = t.reviews
  return (
    <section id="reviews" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-8">{t.reviewsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  )
}
