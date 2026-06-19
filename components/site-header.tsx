"use client"

import { useEffect, useState } from "react"
import { Menu, X, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Destinations", href: "#destinations" },
  { label: "Assistant IA", href: "#assistant" },
  { label: "Réservation", href: "#reservation" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
            scrolled ? "glass shadow-lg shadow-black/40" : "border border-transparent",
          )}
        >
          <a href="#accueil" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
              <Clock className="size-5 text-primary" aria-hidden="true" />
            </span>
            <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
              TimeTravel <span className="text-gradient-gold">Agency</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              nativeButton={false}
              render={<a href="#destinations" />}
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Explorer les époques
            </Button>
          </div>

          <button
            className="inline-flex size-10 items-center justify-center rounded-xl text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="glass mt-2 rounded-2xl p-4 md:hidden">
            <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Button
                nativeButton={false}
                render={<a href="#destinations" onClick={() => setOpen(false)} />}
                className="mt-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Explorer les époques
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
