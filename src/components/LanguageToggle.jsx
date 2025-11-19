import React from 'react'
import { Globe } from 'lucide-react'

export default function LanguageToggle({ lang, setLang }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm text-slate-200/80">
      <Globe className="w-4 h-4" />
      <button
        onClick={() => setLang('nl')}
        className={`px-2 py-1 rounded transition ${lang === 'nl' ? 'text-white bg-white/10' : 'hover:text-white'}`}
        aria-pressed={lang === 'nl'}
      >NL</button>
      <span className="text-slate-500">/</span>
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 rounded transition ${lang === 'en' ? 'text-white bg-white/10' : 'hover:text-white'}`}
        aria-pressed={lang === 'en'}
      >EN</button>
    </div>
  )
}
