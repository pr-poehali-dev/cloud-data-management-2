import { useState, FormEvent } from "react"
import { ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"
import { HighlightedText } from "./HighlightedText"

export function CallToAction() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 md:py-29 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - text + phone */}
          <div>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-8">Бесплатная консультация</p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight mb-8 text-balance">
              Наведём <HighlightedText>порядок</HighlightedText>
              <br />
              в ваших цифрах
            </h2>

            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10 max-w-md">
              Оставьте заявку — перезвоним в течение рабочего дня, разберёмся в задаче и предложим решение.
            </p>

            <a
              href="tel:+79287451725"
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-accent hover:text-white transition-colors"
            >
              <Icon name="Phone" size={28} />
              +7 (928) 745-17-25
            </a>
          </div>

          {/* Right - form */}
          <div className="bg-white text-foreground p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-accent/15 text-accent rounded-full">
                  <Icon name="Check" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Заявка отправлена!</h3>
                <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-semibold mb-2">Оставить заявку</h3>
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Как к вам обращаться"
                    className="w-full border border-border px-4 py-3 outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-border px-4 py-3 outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Краткое описание задачи</label>
                  <textarea
                    rows={3}
                    placeholder="Например: нужна бухгалтерия для ООО на УСН"
                    className="w-full border border-border px-4 py-3 outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide hover:bg-accent hover:text-primary transition-colors duration-300 group"
                >
                  Отправить заявку
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
