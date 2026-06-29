export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 shrink-0">
                <path d="M6 5 L6 27" stroke="#d4af37" strokeWidth="3" strokeLinecap="round"/>
                <path d="M11 5 L26 5 L26 16 L11 16 L11 27" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 30 Q16 24 29 30" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
              <div>
                <p className="font-sans font-bold text-sm tracking-[0.15em] uppercase text-foreground leading-tight">Интеллект</p>
                <p className="font-sans font-light text-xs tracking-[0.2em] uppercase text-gold leading-tight">Логистик</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Интеллектуальная международная логистика на основе искусственного интеллекта.
            </p>
            <a href="tel:+79145707006" className="text-gold text-sm font-medium hover:text-gold/80 transition-colors">
              +7 (914) 570-70-06
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#philosophy" className="text-sm text-foreground hover:text-sage transition-colors">
                Подход
              </a>
              <a href="#services" className="text-sm text-foreground hover:text-sage transition-colors">
                Услуги
              </a>
              <a href="#process" className="text-sm text-foreground hover:text-sage transition-colors">
                Технология
              </a>
              <a href="#contact" className="text-sm text-foreground hover:text-sage transition-colors">
                Контакты
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Соцсети</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Instagram
              </a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Pinterest
              </a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Telegram
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Документы</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Политика
              </a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Условия
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Интеллект Логистик. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">Доставляем по всему миру</p>
        </div>
      </div>
    </footer>
  )
}