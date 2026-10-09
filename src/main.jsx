import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Gem,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import './styles.css'

const assets = {
  hero: `${import.meta.env.BASE_URL}assets/rasus-hero.jpg`,
  treatment: `${import.meta.env.BASE_URL}assets/rasus-treatment.jpg`,
  wellness: `${import.meta.env.BASE_URL}assets/rasus-wellness.jpg`,
}

function useScrollReveal() {
  useEffect(() => {
    document.documentElement.style.setProperty('--rasus-hero-image', `url("${assets.hero}")`)
    document.documentElement.style.setProperty('--rasus-palm-image', `url("${import.meta.env.BASE_URL}assets/palm-shadow.svg")`)
    document.documentElement.classList.add('js-motion')
    const nodes = [...document.querySelectorAll('[data-reveal]')]
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' })

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

function Header() {
  return (
    <header>
      <nav className="nav wrap" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Rasus, inicio">Rasus</a>
        <div className="links">
          <a href="#inicio">Inicio</a>
          <a href="#tratamientos">Tratamientos</a>
          <a href="#rasus">Sobre Rasus</a>
          <a href="#resultados">Resultados</a>
          <a href="#preguntas">FAQ</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a className="pill" href="#contacto">Pide tu cita <span className="round" aria-hidden="true">→</span></a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero-content">
        <div className="eyebrow">Estética avanzada · masajes · depilación láser</div>
        <h1 className="serif">Tu bienestar<br />en manos expertas.</h1>
        <p>En Rasus cuidamos de ti con tratamientos de estética avanzada, masajes y depilación láser personalizados en Logroño. Tecnología, experiencia y cercanía para que te veas bien, te sientas mejor y recuperes tu confianza.</p>
        <div className="hero-actions">
          <a className="btn-main" href="#contacto">Reserva tu cita <span className="round" aria-hidden="true">→</span></a>
          <a className="watch" href="#rasus"><span className="play" aria-hidden="true">▶</span><span>Conócenos<br />en 1 min</span></a>
        </div>
      </div>
      <div className="hero-note" aria-hidden="true">Belleza real,<br />bienestar de verdad</div>
    </section>
  )
}

const metrics = [
  ['10+', 'Años de experiencia'],
  ['2.500+', 'Clientes satisfechos'],
  ['15+', 'Tratamientos especializados'],
  ['98%', 'Satisfacción'],
]

function Metrics() {
  return (
    <div className="stats" aria-label="Rasus en cifras">
      <div className="wrap stats-row">
        {metrics.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
        <div className="stat-tag">Estética · salud · bienestar</div>
      </div>
    </div>
  )
}

function SectionLabel({ children }) {
  return <p className="font-geist text-[10px] uppercase tracking-[0.25em] text-rasus-copper">{children}</p>
}

function About() {
  return (
    <section className="section-surface section-light palm-shadow-left py-6 md:py-6" id="rasus">
      <div className="ambient-glow rasus-shadow -right-40 top-0" aria-hidden="true" />
      <div className="curve-line -right-28 top-20" aria-hidden="true" />
      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 reveal" data-reveal>
          <SectionLabel>Sobre Rasus</SectionLabel>
          <h2 className="editorial-heading about-heading mt-5">Una referencia en<br className="about-break" /> estética avanzada en Logroño</h2>
          <p className="mt-4 max-w-lg font-geist text-sm leading-relaxed text-rasus-muted md:text-[15px]">Experiencia, tecnología y un trato cercano se unen en tratamientos adaptados a ti. Cuidamos de tu cuerpo, realzamos tu belleza natural y te acompañamos para que te sientas mejor cada día.</p>
          <a className="outline-cta mt-5 inline-flex items-center gap-3" href="#resultados">Conócenos <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" /></a>
          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
            <div className="principle"><span className="icon"><Gem size={20} strokeWidth={1.4} /></span><span>Atención<br />personalizada</span></div>
            <div className="principle"><span className="icon"><UsersRound size={20} strokeWidth={1.4} /></span><span>Equipo profesional<br />cualificado</span></div>
            <div className="principle"><span className="icon"><Sparkles size={19} strokeWidth={1.4} /></span><span>Tecnología<br />avanzada</span></div>
          </div>
        </div>
        <div className="relative lg:col-span-6 reveal" data-reveal>
          <div className="about-collage grid grid-cols-12 grid-rows-2 gap-3 md:gap-4">
            <figure className="editorial-image reveal-image relative col-span-7 row-span-2">
              <img src={assets.hero} alt="Un momento de calma y bienestar" style={{ objectPosition: '72% center' }} />
              <figcaption className="photo-caption">Más que estética,<br />bienestar</figcaption>
            </figure>
            <figure className="editorial-image reveal-image relative col-span-5">
              <img src={assets.wellness} alt="Un espacio de descanso bañado por luz natural" />
              <figcaption className="photo-caption !text-base">Un espacio para cuidarte</figcaption>
            </figure>
            <figure className="editorial-image reveal-image relative col-span-5">
              <img src={assets.treatment} alt="Tratamiento facial con aparatología estética" />
              <figcaption className="photo-caption !text-base">Tecnología y atención experta</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

const treatments = [
  { title: 'Tratamientos faciales', image: assets.treatment, description: 'Luminosidad y cuidado a medida', className: 'col-span-12 md:col-span-7 min-h-[330px] md:min-h-[490px]', position: 'center 46%' },
  { title: 'Tratamientos corporales', image: assets.hero, description: 'Rituales para sentirte bien', className: 'col-span-12 md:col-span-5 min-h-[270px] md:min-h-[410px]', position: '72% center' },
  { title: 'Masajes y osteopatía', image: assets.wellness, description: 'Pausa, equilibrio y bienestar', className: 'col-span-12 md:col-span-5 min-h-[270px] md:min-h-[390px]', position: '70% center' },
  { title: 'Depilación láser', image: assets.treatment, description: 'Tecnología avanzada y asesoramiento', className: 'col-span-12 md:col-span-7 min-h-[330px] md:min-h-[430px]', position: 'left center' },
]

function Treatments() {
  return (
    <section className="section-surface section-paper palm-shadow-right py-20 md:py-32" id="tratamientos">
      <div className="ambient-glow rasus-shadow -left-48 top-1/3" aria-hidden="true" />
      <div className="section-container">
        <div className="mb-12 grid grid-cols-1 items-end gap-7 md:mb-16 md:grid-cols-12">
          <div className="reveal md:col-span-8" data-reveal>
            <SectionLabel>Nuestros tratamientos</SectionLabel>
            <h2 className="editorial-heading mt-5 max-w-4xl">Tratamientos personalizados para realzar tu belleza y bienestar</h2>
          </div>
          <p className="reveal max-w-md font-geist text-sm leading-relaxed text-rasus-muted md:col-span-4 md:pb-1 md:text-[15px]" data-reveal>Un enfoque integral que combina estética avanzada, salud y bienestar, con tratamientos seguros y adaptados a ti.</p>
        </div>
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          {treatments.map((treatment, index) => (
            <a className={`photo-tile reveal ${treatment.className}`} data-reveal href="#contacto" key={treatment.title} aria-label={`Consultar ${treatment.title}`}>
              <img className="reveal-image" src={treatment.image} alt="" style={{ objectPosition: treatment.position }} />
              <div className="photo-tile-content"><p className="mb-2 font-geist text-xs uppercase tracking-[0.2em] text-white/75">0{index + 1} · Rasus</p><h3>{treatment.title}</h3><p className="mt-2 max-w-[19rem] font-geist text-sm text-white/85">{treatment.description}</p><span className="tile-arrow" aria-hidden="true"><ArrowUpRight size={19} strokeWidth={1.4} /></span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Results() {
  return (
    <section className="section-surface section-light palm-shadow-left py-20 md:py-32" id="resultados">
      <div className="ambient-glow rasus-shadow -right-40 top-0" aria-hidden="true" />
      <div className="section-container grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-5" data-reveal>
          <SectionLabel>El cuidado se nota</SectionLabel>
          <h2 className="editorial-heading mt-5">La confianza<br />se nota</h2>
          <div className="quote-mark mt-8" aria-hidden="true">“</div>
          <blockquote className="-mt-2 max-w-md font-geist text-sm italic leading-relaxed tracking-[-0.01em] text-rasus-muted md:text-[15px]">Profesionales, cercanos y con resultados visibles. Desde que confío en Rasus me siento mejor por dentro y por fuera.</blockquote>
          <div className="mt-6 flex items-center gap-3 font-geist text-sm"><span className="avatar">LM</span><span><span className="block font-medium text-rasus-ink">Laura M.</span><span className="text-rasus-muted">Cliente verificada · <span className="text-rasus-copper" aria-label="5 de 5 estrellas">★★★★★</span></span></span></div>
          <p className="mt-7 max-w-md font-geist text-sm leading-relaxed text-rasus-muted md:text-[15px]">Cada visita empieza escuchando lo que necesitas. Nuestro equipo te acompaña con criterio profesional y atención cercana durante todo el proceso.</p>
        </div>
        <div className="relative lg:col-span-7">
          <div className="curve-line -right-20 -top-16" aria-hidden="true" />
          <figure className="editorial-image reveal reveal-image relative z-10 h-[360px] md:h-[540px]" data-reveal>
            <img src={assets.treatment} alt="Sesión de cuidado facial personalizado en Rasus" />
            <figcaption className="photo-caption flex items-end justify-between gap-5"><span>Atención experta<br />en cada detalle</span><span className="mb-1 inline-flex items-center gap-2 font-geist text-xs uppercase tracking-[0.18em]">Cuidado personalizado <ArrowUpRight size={17} /></span></figcaption>
          </figure>
          <div className="relative z-10 mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="care-note"><ShieldCheck size={21} strokeWidth={1.4} /><span><strong>Seguridad y profesionalidad</strong><small>Tu bienestar en manos expertas.</small></span></div>
            <div className="care-note"><Heart size={21} strokeWidth={1.4} /><span><strong>Atención personalizada</strong><small>Un plan adaptado a tus necesidades.</small></span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="section-surface section-warm palm-shadow-right py-16 md:py-24" id="contacto">
      <div className="ambient-glow rasus-shadow -left-36 top-0" aria-hidden="true" />
      <div className="section-container grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="reveal relative z-10 lg:col-span-5" data-reveal>
          <SectionLabel>¿Lista para dar el siguiente paso?</SectionLabel>
          <h2 className="editorial-heading mt-5">Tu mejor versión te espera</h2>
          <p className="mt-5 max-w-lg font-geist text-sm leading-relaxed text-rasus-muted md:text-[15px]">Reserva una cita en Rasus y descubre un tratamiento personalizado para ti en nuestro centro de Logroño.</p>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
            <span className="contact-line"><CalendarDays size={17} /> Horarios flexibles</span>
            <span className="contact-line"><ShieldCheck size={17} /> Atención discreta</span>
            <span className="contact-line"><Sparkles size={17} /> Asesoramiento experto</span>
          </div>
          <a className="btn-main mt-8" href="https://api.whatsapp.com/send?phone=34672857016&text=Hola%2C%20quiero%20pedir%20una%20cita" target="_blank" rel="noreferrer">Pide tu cita <span className="round" aria-hidden="true">→</span></a>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <a className="contact-line" href="tel:+34941048032"><Phone size={16} /> 941 048 032</a>
            <a className="contact-line" href="mailto:centrorasus@gmail.com"><Mail size={16} /> Correo</a>
            <a className="contact-line" href="https://api.whatsapp.com/send?phone=34672857016" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-visible lg:col-span-7 lg:min-h-[560px]">
          <div className="curve-line -right-14 top-6" aria-hidden="true" />
          <figure className="editorial-image reveal reveal-image absolute inset-0 z-10" data-reveal>
            <img src={assets.wellness} alt="Un momento de descanso y bienestar con luz natural" />
            <figcaption className="photo-caption">Ciencia estética<br />para sentirte bien</figcaption>
          </figure>
          <div className="absolute -bottom-4 -left-4 z-20 flex items-center gap-3 rounded-full border border-rasus-line bg-rasus-cream px-4 py-3 shadow-lg shadow-[#5d40251a] md:bottom-8 md:-left-8"><span className="icon"><MapPin size={19} strokeWidth={1.4} /></span><span className="font-geist text-xs leading-snug text-rasus-muted">Marqués de Murrieta, 48<br /><strong className="font-medium text-rasus-ink">Logroño</strong></span></div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className="faq section-surface palm-shadow-left py-16 md:py-20" id="preguntas">
      <div className="page-gutter">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4"><SectionLabel>Preguntas frecuentes</SectionLabel><h2 className="editorial-heading mt-4">Antes de tu visita</h2></div>
          <div className="grid gap-3 md:col-span-8 md:grid-cols-3">
            <details><summary>¿Cómo elijo el tratamiento adecuado?</summary><p>Cuéntanos qué te gustaría mejorar y te orientaremos sobre las opciones disponibles en el centro.</p></details>
            <details><summary>¿Puedo pedir cita por WhatsApp?</summary><p>Sí. Escríbenos o llámanos al 941 048 032 para consultar disponibilidad.</p></details>
            <details><summary>¿Dónde está Rasus?</summary><p>Estamos en Calle Marqués de Murrieta 48, 26005 Logroño.</p></details>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return <footer className="py-6"><div className="page-gutter flex flex-wrap items-center justify-between gap-4 font-geist text-sm"><a className="brand !m-0 !text-[27px]" href="#inicio">Rasus</a><span>Estética avanzada · Masajes · Depilación láser</span><small className="text-white/60">© 2026 Rasus · Logroño</small></div></footer>
}

function App() {
  useScrollReveal()
  return (
    <>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <Metrics />
        <About />
        <Treatments />
        <Results />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App

createRoot(document.getElementById('root')).render(<App />)
