import { H2 } from "../Elements/Texts"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

const FAQs = () => {
  const faqItems = [
    {
      question: "Is my data secure?",
      answer: "Yes—end-to-end encryption, role-based access, and read-only connectors by default."
    },
    {
      question: "How long does setup take?",
      answer: "Most customers go from sign-up to first reconciliation in under 48 hours."
    },
    {
      question: "Can I choose self-hosted or cloud-hosted?",
      answer: "Absolutely—pick Mantis-managed cloud or host on-premises for full control."
    },
    {
      question: "What's included in the waitlist?",
      answer: "Early access invites, priority demos, launch discounts, and product roadmap input."
    }
  ]

  return (
    <section className="mb-16 md:mb-40">
      <div className="mx-7.4">
        <H2 content="Frequently Asked Questions" />
        <div className="mt-16 md:mt-40">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-SF text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQs 