import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-xl font-semibold tracking-tight text-primary">
                Бух<span className="text-accent">Профи</span>
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Бухгалтерское сопровождение бизнеса с 2010 года. Никаких штрафов, никаких срывов отчётности — только порядок в цифрах.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary">Компания</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition-colors">
                  Вопросы
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+79287451725" className="hover:text-accent transition-colors">
                  +7 (928) 745-17-25
                </a>
              </li>
              <li>г. Москва, ул. Примерная, д. 1</li>
              <li className="flex gap-4 pt-2">
                <a href="#" aria-label="Телеграм" className="hover:text-accent transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="#" aria-label="ВКонтакте" className="hover:text-accent transition-colors">
                  <Icon name="Share2" size={20} />
                </a>
                <a href="#" aria-label="WhatsApp" className="hover:text-accent transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 БухПрофи. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
