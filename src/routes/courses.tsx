import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { languageCourses, tutoring, workshops, type Course } from "@/data/courses";

const title = "Cours & Formations — Novice Academy Sfax";
const description =
  "Langues (anglais, français, espagnol, italien), soutien scolaire et ateliers : crochet, sacs en perle, broderie, pâtisserie française, glaces et milkshakes.";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CoursesPage,
});

function CourseGrid({ items, onSelect }: { items: Course[]; onSelect: (c: Course) => void }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <article
          key={c.title}
          role="button"
          tabIndex={0}
          onClick={() => onSelect(c)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelect(c);
            }
          }}
          className="flex cursor-pointer flex-col rounded-3xl border border-border bg-card p-7 text-left transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <h3 className="text-xl font-semibold">{c.title}</h3>
          <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {c.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Voir les détails <ArrowRight className="size-4" />
            </span>
            {c.kind === "language" ? (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="ml-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <Link to="/contact">Passer un test</Link>
              </Button>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

function CoursesPage() {
  const [selected, setSelected] = useState<Course | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold sm:text-5xl">Cours & Formations</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Des programmes pensés pour chaque objectif : parler une langue, réussir à l'école ou
          apprendre un métier créatif. Cliquez sur une formation pour voir le détail des niveaux et
          modules.
        </p>
      </header>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Cours de langues</h2>
        <CourseGrid items={languageCourses} onSelect={setSelected} />
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Soutien scolaire</h2>
        <CourseGrid items={tutoring} onSelect={setSelected} />
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Ateliers professionnels & créatifs</h2>
        <CourseGrid items={workshops} onSelect={setSelected} />
      </section>

      <div className="mt-16 rounded-3xl bg-secondary/60 p-10 text-center">
        <h2 className="text-2xl font-semibold">Une question sur un programme ?</h2>
        <p className="mt-3 text-muted-foreground">
          Nous vous aidons à choisir la formation adaptée à votre niveau et à votre emploi du temps.
        </p>
        <Button asChild variant="hero" size="lg" className="mt-6">
          <Link to="/contact">S'inscrire maintenant</Link>
        </Button>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto rounded-3xl sm:max-w-lg">
          {selected ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selected.title}</DialogTitle>
                <DialogDescription>{selected.description}</DialogDescription>
              </DialogHeader>

              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                {selected.modulesLabel ?? "Programme"}
              </p>
              <ul className="space-y-3">
                {(selected.modules ?? []).map((m) => (
                  <li key={m.name} className="rounded-2xl bg-secondary/60 p-4">
                    <div className="flex items-center gap-2 font-semibold">
                      <GraduationCap className="size-4 text-primary" />
                      {m.name}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{m.detail}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-2 flex flex-wrap gap-3">
                {selected.kind === "language" ? (
                  <Button asChild variant="hero">
                    <Link to="/contact">Passer un test de niveau</Link>
                  </Button>
                ) : null}
                <Button asChild variant="outline">
                  <Link to="/contact">S'inscrire</Link>
                </Button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
