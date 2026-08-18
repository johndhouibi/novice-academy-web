import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
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

function CourseGrid({ items }: { items: Course[] }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <article
          key={c.title}
          className="flex flex-col rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-card"
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
        </article>
      ))}
    </div>
  );
}

function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold sm:text-5xl">Cours & Formations</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Des programmes pensés pour chaque objectif : parler une langue, réussir à l'école ou
          apprendre un métier créatif.
        </p>
      </header>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Cours de langues</h2>
        <CourseGrid items={languageCourses} />
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Soutien scolaire</h2>
        <CourseGrid items={tutoring} />
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Ateliers professionnels & créatifs</h2>
        <CourseGrid items={workshops} />
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
    </div>
  );
}