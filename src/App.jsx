import React, { useMemo, useState } from 'react'
import { Menu } from 'lucide-react'
import Hero from './components/Hero'
// import TrustedBy from './components/TrustedBy'
import Steps from './components/Steps'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import LanguageToggle from './components/LanguageToggle'

const EMAIL = 'renee@vexai.nl'

const copy = {
  nl: {
    nav: { home: 'Home', process: 'Stappen', reviews: 'Reviews', faq: 'FAQ', contact: 'Boek een call' },
    badge: 'Gespecialiseerd in installatie bedrijven',
    heroTitle: 'Vexai, AI receptionisten die jouw telefoontjes opnemen en je agenda vullen met gekwalificeerde klussen.',
    heroSubtitle: 'Wij bouwen en implementeren een support agent die afspraken plant, offertes kwalificeert en 24/7 reageert. Live in 2 weken.',
    ctaPrimary: 'Boek een call',
    ctaSecondary: 'Bekijk reviews',
    timeframe: 'Doorlooptijd: gemiddeld 10-14 dagen',
    // trustedBy removed per request
    processTitle: 'Van nul naar live in 4 duidelijke stappen',
    steps: [
      { title: 'Intake & doelstellingen', desc: 'We analyseren processen, scripts en systemen. We bepalen KPI’s en succescriteria.' },
      { title: 'Setup & integraties', desc: 'We koppelen telefonie, agenda, CRM en websitechat. We maken flows en tone-of-voice.' },
      { title: 'Training & testen', desc: 'We trainen het model op jouw data en draaien praktijktesten met echte leads.' },
      { title: 'Livegang & optimalisatie', desc: 'We lanceren, monitoren en sturen bij. Jij krijgt transparante rapportages.' },
    ],
    reviewsTitle: 'Wat klanten zeggen',
    reviews: [
      { name: 'Sander de Vries', role: 'Eigenaar, KlimaatGroep', text: 'Binnen twee weken nam de agent 60% van onze inkomende telefoontjes over en plande direct afspraken in.' },
      { name: 'Linda Jansen', role: 'Commercieel manager, CoolAir Co.', text: 'Leads worden nu 24/7 opgevolgd. Conversie uit websitechat verdubbelde. Supportteam is ontlast.' },
      { name: 'Tom Peters', role: 'Operations, ThermoPro', text: 'Integratie met ons CRM en agenda werkte naadloos. Heldere samenwerking en snelle iteraties.' },
    ],
    faqTitle: 'Veelgestelde vragen',
    faq: [
      { q: 'Voor welke kanalen werkt Vexai?', a: 'Telefonie, websitechat, WhatsApp en e-mail. We integreren met jouw bestaande tools.' },
      { q: 'Hoe waarborgen jullie merktoon en kwaliteit?', a: 'We trainen op jouw scripts, cases en tone-of-voice. Alles wordt getest en gemonitord.' },
      { q: 'Wat kost het?', a: 'Vaste opstart + maandabonnement afhankelijk van volume en kanalen. Vraag een offerte aan.' },
      { q: 'Hoe snel kunnen we starten?', a: 'Planning kan meestal binnen 1 week. Live in 10-14 dagen.' },
    ],
    footerCta: 'Klaar om te starten? Boek een call',
  },
  en: {
    nav: { home: 'Home', process: 'Process', reviews: 'Reviews', faq: 'FAQ', contact: 'Book a call' },
    badge: 'Specialized in HVAC',
    heroTitle: 'Vexai, AI receptionists that answer your calls and fill your schedule with qualified jobs.',
    heroSubtitle: 'We build and deploy a support agent that schedules appointments, qualifies quotes and replies 24/7. Live in 2 weeks.',
    ctaPrimary: 'Book a call',
    ctaSecondary: 'See reviews',
    timeframe: 'Timeline: 10-14 days on average',
    // trustedBy removed per request
    processTitle: 'From zero to live in 4 clear steps',
    steps: [
      { title: 'Intake & objectives', desc: 'We analyze processes, scripts and systems. We define KPIs and success.' },
      { title: 'Setup & integrations', desc: 'We connect telephony, calendar, CRM and webchat. We craft flows and tone of voice.' },
      { title: 'Training & testing', desc: 'We train on your data and run real-world tests with actual leads.' },
      { title: 'Go live & optimization', desc: 'We launch, monitor and iterate. You get transparent reporting.' },
    ],
    reviewsTitle: 'What clients say',
    reviews: [
      { name: 'Alex Carter', role: 'Owner, ClimateWorks', text: 'Within two weeks the agent handled 60% of inbound calls and booked jobs directly.' },
      { name: 'Maya Singh', role: 'Commercial Manager, BreezeFlow', text: 'Leads get followed up 24/7. Website chat conversion doubled. Support team is relieved.' },
      { name: 'Jordan Lee', role: 'Operations, HVAC Masters', text: 'CRM and calendar integration worked flawlessly. Clear collaboration and quick iterations.' },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'Which channels does Vexai support?', a: 'Telephony, website chat, WhatsApp and email. We integrate with your existing tools.' },
      { q: 'How do you ensure brand tone and quality?', a: 'We train on your scripts, cases and tone of voice. Everything is tested and monitored.' },
      { q: 'What does it cost?', a: 'Fixed setup + monthly subscription based on volume and channels. Request a quote.' },
      { q: 'How fast can we start?', a: 'Usually within a week. Go live in 10-14 days.' },
    ],
    footerCta: 'Ready to start? Book a call',
  }
}

export default function App() {
  const [lang, setLang] = useState('nl')
  const t = useMemo(() => copy[lang], [lang])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_25%)]"></div>

      <header className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-500"></div>
            <span className="font-semibold tracking-wide text-white">Vexai</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#" className="hover:text-white">{t.nav.home}</a>
            <a href="#process" className="hover:text-white">{t.nav.process}</a>
            <a href="#reviews" className="hover:text-white">{t.nav.reviews}</a>
            <a href="#faq" className="hover:text-white">{t.nav.faq}</a>
            <a href={`mailto:${EMAIL}`} className="ml-2 inline-flex items-center rounded-lg bg-white/10 hover:bg-white/20 px-3 py-1.5 text-white">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageToggle lang={lang} setLang={setLang} />
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <Hero t={t} email={EMAIL} />
        {/* TrustedBy removed per request */}
        <Steps t={t} />
        <Reviews t={t} />
        <FAQ t={t} />

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-center rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 transition shadow-lg shadow-indigo-500/20">
              {t.footerCta}
            </a>
            <p className="mt-3 text-sm text-slate-400">{EMAIL}</p>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Vexai - All rights reserved
        </div>
      </footer>
    </div>
  )
}
