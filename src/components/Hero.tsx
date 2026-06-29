import { useEffect, useState } from "react"
import Icon from "@/components/ui/icon"

const features = [
  { icon: "Globe", label: "Поиск и подбор\nтовара" },
  { icon: "FileCheck", label: "Таможенное\nоформление" },
  { icon: "Truck", label: "Международные\nперевозки" },
  { icon: "Handshake", label: "Полное\nсопровождение" },
]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 pt-20 overflow-hidden">
      {/* Space background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_#0d1f4a_0%,_#060d1f_50%,_#020812_100%)]" />

      {/* Stars layer */}
      <div className="absolute inset-0 opacity-60" style={{
        backgroundImage: `radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.8) 0%, transparent 100%),
          radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,0.7) 0%, transparent 100%),
          radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.6) 0%, transparent 100%),
          radial-gradient(1px 1px at 10% 60%, rgba(255,255,255,0.5) 0%, transparent 100%),
          radial-gradient(1px 1px at 90% 80%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(2px 2px at 45% 20%, rgba(255,255,255,0.9) 0%, transparent 100%),
          radial-gradient(1px 1px at 70% 45%, rgba(255,255,255,0.6) 0%, transparent 100%),
          radial-gradient(1px 1px at 30% 85%, rgba(255,255,255,0.5) 0%, transparent 100%)`
      }} />

      {/* Planet Earth glow at bottom */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[140%] h-[60%] rounded-[50%] bg-[radial-gradient(ellipse_at_50%_80%,_#1a3a7a_0%,_#0a1a3d_40%,_transparent_70%)] blur-sm" />
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[120%] h-[50%] rounded-[50%] border border-blue-400/20" />

      {/* Golden route line A→B */}
      <div className="absolute bottom-[22%] left-0 right-0 h-[2px] overflow-visible pointer-events-none">
        <svg className="w-full h-20 absolute bottom-0" viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M100,70 Q600,10 1100,70" stroke="url(#routeGold)" strokeWidth="1.5" fill="none" strokeDasharray="6,4"/>
          {/* Point A */}
          <circle cx="100" cy="70" r="5" fill="#d4af37"/>
          <text x="100" y="60" textAnchor="middle" fill="#d4af37" fontSize="14" fontFamily="sans-serif" fontWeight="bold">A</text>
          {/* Point B */}
          <circle cx="1100" cy="70" r="5" fill="#d4af37"/>
          <text x="1100" y="60" textAnchor="middle" fill="#d4af37" fontSize="14" fontFamily="sans-serif" fontWeight="bold">B</text>
          <defs>
            <linearGradient id="routeGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4"/>
              <stop offset="50%" stopColor="#f5d76e" stopOpacity="1"/>
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo emblem large */}
        <div
          className={`flex justify-center mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <svg viewBox="0 0 80 80" fill="none" className="w-24 h-24 drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">
            <path d="M16 12 L16 68" stroke="url(#heroGold)" strokeWidth="6" strokeLinecap="round"/>
            <path d="M28 12 L64 12 L64 40 L28 40 L28 68" stroke="url(#heroGold)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 76 Q40 62 72 76" stroke="url(#heroGold)" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <defs>
              <linearGradient id="heroGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af37"/>
                <stop offset="100%" stopColor="#f5d76e"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Company name */}
        <div
          className={`mb-3 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="font-sans font-bold text-4xl md:text-6xl tracking-[0.25em] uppercase text-white">
            Интеллект
          </h1>
          <h1 className="font-sans font-light text-4xl md:text-6xl tracking-[0.35em] uppercase text-gold mt-1">
            Логистик
          </h1>
        </div>

        {/* Gold divider */}
        <div
          className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-1.5 h-1.5 bg-gold rotate-45" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Tagline */}
        <p
          className={`text-base md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Интеллектуальная логистика и<br />профессионализм без границ
        </p>

        {/* 4 Feature icons */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {features.map((f) => (
            <div key={f.icon} className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center group-hover:border-gold/80 transition-colors duration-300 bg-white/5 backdrop-blur-sm">
                <Icon name={f.icon} size={24} className="text-gold" />
              </div>
              <span className="text-xs text-white/70 tracking-wide text-center whitespace-pre-line leading-relaxed">
                {f.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA + Phone */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-[#060d1f] text-sm tracking-widest uppercase font-semibold hover:bg-gold/90 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            Рассчитать доставку
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="tel:+79145707006"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm text-gold tracking-wide border border-gold/40 hover:border-gold hover:bg-gold/5 transition-all duration-300"
          >
            <Icon name="Phone" size={16} className="text-gold" />
            +7 (914) 570-70-06
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
