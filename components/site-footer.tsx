import { Clock } from "lucide-react"

const columns = [
  {
    title: "Destinations",
    links: ["Paris 1889", "Crétacé -65M", "Florence 1504", "Époques à venir"],
  },
  {
    title: "Agence",
    links: ["À propos", "Nos conseillers", "Sécurité temporelle", "Carrières"],
  },
  {
    title: "Ressources",
    links: ["Assistant Chronos", "FAQ", "Conditions", "Contact"],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <Clock className="size-5 text-primary" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-semibold tracking-tight">
                TimeTravel <span className="text-gradient-gold">Agency</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              L'agence de voyage temporel de luxe. Des destinations impossibles,
              une expérience d'exception.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-foreground">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TimeTravel Agency. Tous droits réservés à
            travers les époques.
          </p>
          <p className="text-xs text-muted-foreground/70">
            Projet pédagogique — webapp fictive avec fonctionnalités IA simulées.
          </p>
        </div>
      </div>
    </footer>
  )
}
