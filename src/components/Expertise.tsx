import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"
import { HighlightedText } from "./HighlightedText"

const expertiseAreas = [
  {
    title: "Сопровождение ООО и ИП",
    description: "Полное ведение бухгалтерии: первичка, проводки, отчётность в ФНС, фонды и Росстат — точно и в срок.",
    icon: "Building2",
  },
  {
    title: "Налоговое планирование",
    description:
      "Законная оптимизация налогов под вашу систему налогообложения. Платите ровно столько, сколько нужно.",
    icon: "Calculator",
  },
  {
    title: "Восстановление учёта",
    description:
      "Наведём порядок в запущенной бухгалтерии: восстановим документы, исправим ошибки, сдадим корректировки.",
    icon: "FileSearch",
  },
  {
    title: "Кадровый учёт и зарплата",
    description:
      "Расчёт зарплаты, отпускных, больничных, ведение кадровых документов и отчётность по сотрудникам.",
    icon: "Users",
  },
  {
    title: "Консультации",
    description:
      "Ответим на любые бухгалтерские и налоговые вопросы. Поможем принять верное решение для бизнеса.",
    icon: "MessageCircleQuestion",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
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
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши услуги</p>
          <h2 className="text-5xl font-semibold leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Полный <HighlightedText>порядок</HighlightedText>
            <br />
            в ваших финансах
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Берём на себя всю бухгалтерию, чтобы вы могли сосредоточиться на развитии бизнеса.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Icon name={area.icon} size={40} className="mb-4 text-accent" strokeWidth={1.25} />
                <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}