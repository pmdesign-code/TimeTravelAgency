"use client"

import { useState } from "react"
import { CheckCircle2, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { destinations } from "@/lib/destinations"

export function BookingSection() {
  const [submitted, setSubmitted] = useState(false)
  const [destination, setDestination] = useState("")

  return (
    <section id="reservation" className="relative mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Réservation
        </span>
        <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Réservez votre saut dans le temps
        </h2>
        <p className="mt-4 text-muted-foreground text-pretty">
          Complétez le formulaire pour pré-réserver votre expédition temporelle.
        </p>
      </div>

      <div className="glass mt-12 rounded-3xl p-6 sm:p-8">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-10 text-center">
            <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
            <h3 className="font-heading text-2xl font-semibold">
              Pré-réservation confirmée
            </h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Merci ! Chronos vous contactera prochainement pour finaliser votre
              voyage temporel.
            </p>
            <Button
              variant="outline"
              onClick={() => setSubmitted(false)}
              className="mt-2 rounded-full border-border bg-transparent hover:bg-muted"
            >
              Nouvelle pré-réservation
            </Button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
            className="grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" required placeholder="Votre nom" className="bg-input/40" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="vous@exemple.com"
                  className="bg-input/40"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="destination">Destination</Label>
              <Select value={destination} onValueChange={setDestination} required>
                <SelectTrigger id="destination" className="bg-input/40">
                  <SelectValue placeholder="Choisissez une époque" />
                </SelectTrigger>
                <SelectContent>
                  {destinations.map((d) => (
                    <SelectItem key={d.id} value={d.id}>
                      {d.name} — {d.era}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="date">Date de départ</Label>
                <Input id="date" type="date" required className="bg-input/40" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="travelers">Nombre de voyageurs</Label>
                <Input
                  id="travelers"
                  type="number"
                  min={1}
                  max={12}
                  defaultValue={2}
                  required
                  className="bg-input/40"
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-2 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Pré-réserver
            </Button>

            <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Info className="size-3.5" aria-hidden="true" />
              Simulation de réservation — projet pédagogique.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
