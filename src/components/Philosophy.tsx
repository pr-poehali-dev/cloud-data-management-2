import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "15 лет на рынке",
    description:
      "С 2010 года ведём бухгалтерию компаний разного масштаба — от индивидуальных предпринимателей до производств.",
  },
  {
    title: "Отраслевая экспертиза",
    description:
      "Знаем специфику торговли, строительства, услуг и IT. Учитываем все нюансы именно вашей сферы.",
  },
  {
    title: "Спокойствие за отчётность",
    description:
      "Берём ответственность на себя. Вы не думаете про ФНС, сроки и штрафы — этим занимаемся мы.",
  },
  {
    title: "Дистанционно и удобно",
    description: "Работаем по всей России. Электронный документооборот — никуда ездить не нужно.",
  },
]

export function Philosophy() {
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
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Title and image */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">О компании</p>
            <h2 className="text-5xl md:text-5xl font-semibold leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
              Чтобы вы спали
              <br />
              <HighlightedText>спокойно</HighlightedText>
            </h2>

            <div className="relative hidden lg:block mt-8">
              <img
                src="https://cdn.poehali.dev/projects/72124934-9ca1-4f88-8d5b-66fa8e83d731/files/d36c2b0a-d8cb-4c95-bea0-84bf1730dde3.jpg"
                alt="Команда бухгалтеров БухПрофи"
                className="opacity-95 relative z-10 w-full object-cover aspect-[4/5]"
              />
            </div>
          </div>

          {/* Right column - Description and advantages */}
          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Мы не просто считаем налоги. Мы делаем так, чтобы вы не думали про ФНС. С 2010 года сопровождаем бизнес — от ИП до производственных компаний. В штате только аттестованные бухгалтеры с опытом в торговле, строительстве, услугах и IT.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}