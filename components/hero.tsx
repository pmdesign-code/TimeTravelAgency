"use client"

import { Sparkles, ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background visual */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-timewarp.png"
          alt=""
          aria-hidden="true"
          className="size-full animate-drift object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_85%)]" />
      </div>

      {/* Floating glow accents */}
      <div className="pointer-events-none absolute left-[8%] top-1/4 size-40 animate-float-slow rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-[10%] size-52 animate-float-slow rounded-full bg-primary/15 blur-3xl [animation-delay:1.5s]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center">
        <div className="animate-fade-up">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/90">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            Expérience temporelle premium
          </span>
        </div>

        <h1 className="mt-6 animate-fade-up font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl [animation-delay:0.1s]">
          Voyagez <span className="text-gradient-gold">au-delà</span> du temps
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted-foreground text-pretty [animation-delay:0.2s]">
          Découvrez des destinations impossibles, guidé par une agence de voyage
          temporel de luxe.
        </p>

        <div className="mt-9 flex animate-fade-up flex-col items-center justify-center gap-3 sm:flex-row [animation-delay:0.3s]">
          <Button
            nativeButton={false}
            render={<a href="#destinations" />}
            size="lg"
            className="group w-full rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90 sm:w-auto"
          >
            Découvrir les destinations
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button
            nativeButton={false}
            render={<a href="#assistant" />}
            size="lg"
            variant="outline"
            className="w-full rounded-full border-border bg-transparent px-7 text-foreground hover:bg-muted sm:w-auto"
          >
            <MessageCircle className="size-4" />
            Parler à l'assistant
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
          Défiler
        </span>
      </div>
    </section>
  )
}
