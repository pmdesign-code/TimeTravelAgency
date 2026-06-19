import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { DestinationsSection } from "@/components/destinations-section"
import { AiAssistant } from "@/components/ai-assistant"
import { QuizSection } from "@/components/quiz-section"
import { BookingSection } from "@/components/booking-section"
import { SiteFooter } from "@/components/site-footer"
import { ChronosBubble } from "@/components/chronos-bubble"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteHeader />
      <Hero />
      <DestinationsSection />
      <AiAssistant />
      <QuizSection />
      <BookingSection />
      <SiteFooter />
      <ChronosBubble />
    </main>
  )
}
