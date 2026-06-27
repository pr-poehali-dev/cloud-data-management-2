import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "С какими системами налогообложения вы работаете?",
    answer:
      "Работаем со всеми режимами: ОСНО, УСН (доходы и доходы минус расходы), ПСН, ЕСХН, а также с самозанятыми и совмещением режимов. Подберём оптимальную систему для вашего бизнеса.",
  },
  {
    question: "Сколько стоит бухгалтерское сопровождение?",
    answer:
      "Стоимость зависит от системы налогообложения, количества операций и сотрудников. Мы не продаём типовые пакеты — рассчитываем цену индивидуально после короткой консультации. Первая консультация бесплатна.",
  },
  {
    question: "Можно ли передать вам уже запущенную бухгалтерию?",
    answer:
      "Да. Мы проводим аудит текущего состояния, восстанавливаем недостающие документы, исправляем ошибки и сдаём корректирующую отчётность. После этого ведём учёт в полном порядке.",
  },
  {
    question: "Кто несёт ответственность за ошибки в отчётности?",
    answer:
      "Ответственность за корректность учёта берём на себя. Мы аттестованные бухгалтеры, постоянно отслеживаем изменения в законодательстве, поэтому штрафы и срывы сроков исключены.",
  },
  {
    question: "Как происходит обмен документами?",
    answer:
      "Удобно для вас: электронный документооборот, мессенджеры, облачные сервисы или личные встречи. Вам не нужно никуда ездить — всё работает дистанционно.",
  },
  {
    question: "С чего начать сотрудничество?",
    answer:
      "Оставьте заявку или позвоните по номеру +7 (928) 745-17-25. Мы проведём бесплатную консультацию, разберёмся в вашей ситуации и предложим конкретное решение.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}