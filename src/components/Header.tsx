import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-gold/10">
      <nav className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            {/* IL emblem */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <path d="M8 6 L8 34" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round"/>
                <path d="M14 6 L32 6 L32 20 L14 20 L14 34" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 38 Q20 30 36 38" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4af37"/>
                    <stop offset="100%" stopColor="#f5d76e"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-sans font-bold text-sm tracking-[0.2em] uppercase text-foreground">Интеллект</span>
              <span className="font-sans font-light text-sm tracking-[0.3em] uppercase text-gold">Логистик</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { href: "#philosophy", label: "Подход" },
              { href: "#services", label: "Услуги" },
              { href: "#process", label: "Технология" },
              { href: "#contact", label: "Контакты" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+79145707006"
              className="text-sm font-medium text-gold tracking-wide hover:text-gold/80 transition-colors border border-gold/30 px-4 py-2 hover:border-gold/60"
            >
              +7 (914) 570-70-06
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Открыть меню"
          >
            <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? "max-h-80 pb-8" : "max-h-0"}`}>
          <div className="flex flex-col gap-6 pt-4">
            {[
              { href: "#philosophy", label: "Подход" },
              { href: "#services", label: "Услуги" },
              { href: "#process", label: "Технология" },
              { href: "#contact", label: "Контакты" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="tel:+79145707006" className="text-sm text-gold font-medium">
              +7 (914) 570-70-06
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
