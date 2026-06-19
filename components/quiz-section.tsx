"use client"

import { useState } from "react"
import { Compass, RotateCcw, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { destinations, type Destination } from "@/lib/destinations"
import { cn } from "@/lib/utils"

type Question = {
  key: string
  label: string
  options: { label: string; value: string }[]
}

const questions: Question[] = [
  {
    key: "experience",
    label: "Type d'expérience",
    options: [
      { label: "Culturelle", value: "florence-1504" },
      { label: "Aventure", value: "cretace" },
      { label: "Luxe", value: "paris-1889" },
    ],
  },
  {
    key: "periode",
    label: "Période préférée",
    options: [
      { label: "Moderne", value: "paris-1889" },
      { label: "Ancienne", value: "cretace" },
      { label: "Renaissance", value: "florence-1504" },
    ],
  },
  {
    key: "ambiance",
    label: "Ambiance",
    options: [
      { label: "Urbaine", value: "paris-1889" },
      { label: "Nature", value: "cretace" },
      { label: "Artistique", value: "florence-1504" },
    ],
  },
  {
    key: "activite",
    label: "Activité",
    options: [
      { label: "Monuments", value: "paris-1889" },
      { label: "Faune", value: "cretace" },
      { label: "Musées", value: "florence-1504" },
    ],
  },
]

export function QuizSection() {
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const select = (key: string, value: string) =>
    setAnswers((a) => ({ ...a, [key]: value }))

  const reset = () => setAnswers({})

  const complete = Object.keys(answers).length === questions.length

  let recommendation: Destination | null = null
  if (complete) {
    const tally: Record<string, number> = {}
    Object.values(answers).forEach((v) => (tally[v] = (tally[v] ?? 0) + 1))
    const topId = Object.entries(tally).sort((a, b) => b[1] - a[1])[0][0]
    recommendation = destinations.find((d) => d.id === topId) ?? null
  }

  return (
    <section className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Personnalisation
        </span>
        <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Trouvez votre époque idéale
        </h2>
        <p className="mt-4 text-muted-foreground text-pretty">
          Répondez à quatre questions et découvrez la destination temporelle
          faite pour vous.
        </p>
      </div>

      <div className="mt-12 grid gap-5">
        {questions.map((q) => (
          <div key={q.key} className="glass rounded-2xl p-5 sm:p-6">
            <p className="mb-3 text-sm font-medium text-foreground">{q.label}</p>
            <div className="flex flex-wrap gap-2.5">
              {q.options.map((opt) => {
                const active = answers[q.key] === opt.value
                return (
                  <button
                    key={opt.label}
                    onClick={() => select(q.key, opt.value)}
                    aria-pressed={active}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm transition-all",
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-muted/30 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                    )}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Result */}
      <div
        className={cn(
          "mt-8 overflow-hidden rounded-3xl border transition-all",
          recommendation
            ? "border-primary/40 bg-card"
            : "border-dashed border-border bg-muted/20",
        )}
      >
        {recommendation ? (
          <div className="flex flex-col items-center gap-6 p-6 sm:flex-row sm:p-8">
            <img
              src={recommendation.image || "/placeholder.svg"}
              alt={recommendation.name}
              className="h-40 w-full rounded-2xl object-cover sm:w-56"
            />
            <div className="flex-1 text-center sm:text-left">
              <p className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary sm:justify-start">
                <Compass className="size-4" aria-hidden="true" />
                Votre destination recommandée
              </p>
              <h3 className="mt-2 font-heading text-3xl font-semibold tracking-tight">
                {recommendation.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {recommendation.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                <Button
                  nativeButton={false}
                  render={<a href="#reservation" />}
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Pré-réserver ce voyage
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  variant="ghost"
                  onClick={reset}
                  className="rounded-full text-muted-foreground hover:text-foreground"
                >
                  <RotateCcw className="size-4" />
                  Recommencer
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 p-10 text-center">
            <Compass className="size-8 text-muted-foreground/50" aria-hidden="true" />
            <p className="text-muted-foreground">
              Votre destination recommandée apparaîtra ici.
            </p>
            <p className="text-xs text-muted-foreground/60">
              {Object.keys(answers).length}/{questions.length} questions complétées
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
