import { useState, useEffect, useRef } from "react"
import Icon from "@/components/ui/icon"

const advantages = [
  {
    title: "Аттестованные профи",
    description: "В команде только сертифицированные бухгалтеры. Каждый знает свою отрасль досконально.",
    icon: "BadgeCheck",
  },
  {
    title: "Всегда в курсе",
    description: "Мониторим изменения в законах 24/7. Вы узнаёте о важном до того, как оно станет проблемой.",
    icon: "RefreshCw",
  },
  {
    title: "Под ваш бизнес",
    description: "Не продаём типовые пакеты. Сначала разбираемся в ваших процессах, потом предлагаем решение.",
    icon: "UserCheck",
  },
]

export function Projects() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="advantages" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Почему мы</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Три причины доверить нам цифры
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              data-index={index}
              className={`bg-card border border-border p-8 transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-accent/15 text-accent mb-6">
                <Icon name={item.icon} size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
