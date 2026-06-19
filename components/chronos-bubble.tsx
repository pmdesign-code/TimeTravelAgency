"use client"

import { MessageCircle } from "lucide-react"

export function ChronosBubble() {
  return (
    <a
      href="#assistant"
      aria-label="Discuter avec Chronos, l'assistant IA"
      className="animate-pulse-glow group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-xl shadow-primary/20 transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">Parler à Chronos</span>
    </a>
  )
}
