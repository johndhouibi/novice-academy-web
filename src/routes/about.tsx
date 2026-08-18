import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Target, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-academy.jpg";

const title = "À propos — Novice Academy, centre de formation à Sfax";
const description =
  "Notre mission : offrir à Sfax un apprentissage de qualité, humain et pratique, en langues, soutien scolaire et savoir-faire créatifs.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Accueil chaleureux", text: "Un cadre bienveillant où chaque apprenant progresse à son rythme." },
  { icon: Users, title: "Petits groupes", text: "Des effectifs réduits pour un suivi réellement personnalisé." },
  { icon: Wrench, title: "Pratique avant tout", text: "On apprend en faisant : conversations, exercices et travaux manuels." },
  { icon: Target, title: "Résultats concrets", text: "Objectifs clairs, évaluations régulières et compétences utilisables." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold sm:text-5xl">À propos de Novice Academy</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Un centre d'éducation et de formation à Sfax, dédié à l'apprentissage de qualité et au
          savoir-faire pratique.
        </p>
      </header>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
        <img
          src={heroImage}
          width={1600}
          height={1104}
          loading="lazy"
          alt="Salle de cours de Novice Academy à Sfax"
          className="shadow-card w-full rounded-3xl object-cover"
        />
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Notre mission</h2>
            <p className="mt-3 text-muted-foreground">
              Rendre l'apprentissage accessible, vivant et utile. Nous accompagnons les élèves dans
              leur réussite scolaire, aidons les adultes à maîtriser de nouvelles langues et
              transmettons des savoir-faire créatifs qui peuvent devenir une véritable activité.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Notre vision</h2>
            <p className="mt-3 text-muted-foreground">
              Devenir à Sfax le centre de référence où l'excellence pédagogique rencontre la
              créativité, en formant une communauté d'apprenants confiants, autonomes et fiers de
              leurs compétences.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <article key={v.title} className="rounded-3xl border border-border bg-card p-7">
            <span className="gradient-primary inline-flex size-11 items-center justify-center rounded-2xl text-primary-foreground">
              <v.icon className="size-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
          </article>
        ))}
      </section>

      <div className="mt-16 text-center">
        <Button asChild variant="hero" size="lg">
          <Link to="/contact">Venez nous rencontrer</Link>
        </Button>
      </div>
    </div>
  );
}