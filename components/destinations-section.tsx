import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { destinations } from "@/lib/destinations"

export function DestinationsSection() {
  return (
    <section id="destinations" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Destinations
        </span>
        <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Trois époques, une infinité de souvenirs
        </h2>
        <p className="mt-4 text-muted-foreground text-pretty">
          Chaque voyage est orchestré dans le moindre détail par nos conseillers
          temporels. Choisissez votre destination.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {destinations.map((d) => (
          <article
            key={d.id}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={d.image || "/placeholder.svg"}
                alt={`${d.name} — ${d.era}`}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium text-foreground">
                {d.era}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-heading text-2xl font-semibold tracking-tight">
                {d.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {d.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {d.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-end justify-between gap-3 border-t border-border pt-5">
                <div>
                  <p className="text-xs text-muted-foreground">à partir de</p>
                  <p className="font-heading text-xl font-semibold text-gradient-gold">
                    {d.price}
                  </p>
                </div>
                <Button
                  nativeButton={false}
                  render={<a href="#reservation" />}
                  className="group/btn rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Voir le voyage
                  <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
