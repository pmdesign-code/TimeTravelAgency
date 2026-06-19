"use client"

import { useEffect, useRef, useState } from "react"
import { Send, Sparkles, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

type Message = { role: "bot" | "user"; text: string }

const suggestions = [
  "Quelle époque pour l'art ?",
  "Je veux une aventure",
  "Quel voyage est le plus luxueux ?",
]

// Simulated reply engine — no external API.
function getReply(input: string): string {
  const t = input.toLowerCase()
  if (/(art|peinture|musée|musee|culture|renaissance|michel)/.test(t)) {
    return "Pour l'art, je recommande Florence 1504 — la Renaissance à son apogée. Vous visiterez les ateliers d'artistes et croiserez Michel-Ange. À partir de 10 800 €."
  }
  if (/(aventure|dinosaure|nature|action|sensation|crétacé|cretace)/.test(t)) {
    return "Envie de frissons ? Le Crétacé -65M est fait pour vous : nature primitive, faune spectaculaire et expéditions encadrées. À partir de 18 500 €."
  }
  if (/(luxe|luxueux|premium|élégan|elegan|raffin)/.test(t)) {
    return "Notre voyage le plus raffiné est Paris 1889, en pleine Belle Époque : boulevards illuminés, Exposition Universelle et soirées d'exception. À partir de 12 900 €."
  }
  if (/(prix|coût|cout|tarif|budget|combien)/.test(t)) {
    return "Nos voyages débutent à 10 800 € (Florence 1504), 12 900 € (Paris 1889) et 18 500 € (Crétacé -65M), tout inclus."
  }
  if (/(bonjour|salut|hello|coucou)/.test(t)) {
    return "Bonjour ! Ravi de vous accompagner. Préférez-vous l'art, l'aventure ou le grand luxe ?"
  }
  return "Excellente question ! Selon vos envies, je peux vous orienter vers Paris 1889 (élégance), le Crétacé -65M (aventure) ou Florence 1504 (art). Quelle ambiance vous attire le plus ?"
}

export function AiAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Bonjour, je suis Chronos, votre conseiller temporel. Quel type d'époque souhaitez-vous explorer ?",
    },
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, typing])

  const send = (value: string) => {
    const text = value.trim()
    if (!text) return
    setMessages((m) => [...m, { role: "user", text }])
    setInput("")
    setTyping(true)
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: getReply(text) }])
      setTyping(false)
    }, 800)
  }

  return (
    <section id="assistant" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Assistant IA
          </span>
          <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Discutez avec <span className="text-gradient-gold">Chronos</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground text-pretty">
            Votre conseiller temporel personnel vous guide vers l'époque idéale.
            Posez vos questions et laissez-vous porter.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Recommandations personnalisées en temps réel",
              "Conseils sur le luxe, l'art et l'aventure",
              "Disponible à toute heure de l'histoire",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Chat widget */}
        <div className="glass overflow-hidden rounded-3xl shadow-2xl shadow-black/40">
          <div className="flex items-center gap-3 border-b border-border px-5 py-4">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
              <Bot className="size-5 text-primary" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold">Chronos</p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                En ligne · Conseiller temporel
              </p>
            </div>
          </div>

          <div ref={scrollRef} className="h-72 space-y-3 overflow-y-auto p-5">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground"
                    : "mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm text-foreground"
                }
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="mr-auto flex max-w-[60%] gap-1 rounded-2xl rounded-bl-sm bg-muted px-4 py-3">
                <span className="size-2 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:0ms]" />
                <span className="size-2 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:150ms]" />
                <span className="size-2 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:300ms]" />
              </div>
            )}
          </div>

          <div className="border-t border-border p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question sur les voyages temporels…"
                aria-label="Message à Chronos"
                className="flex-1 rounded-full border border-border bg-input/40 px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary/50"
              />
              <Button
                type="submit"
                size="icon"
                className="size-10 shrink-0 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                aria-label="Envoyer"
              >
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
