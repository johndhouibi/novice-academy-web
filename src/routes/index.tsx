import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Languages, Palette, MapPin, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-academy.jpg";
import workshopsImage from "@/assets/workshops.jpg";

const title = "Novice Academy — Cours de langues & ateliers à Sfax";
const description =
  "Centre d'éducation et de formation à Sfax : anglais, français, espagnol, italien, soutien scolaire et ateliers créatifs (crochet, broderie, pâtisserie).";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: Languages,
    title: "Cours de langues",
    text: "Anglais, français, espagnol et italien en petits groupes, pour enfants et adultes.",
  },
  {
    icon: GraduationCap,
    title: "Soutien scolaire",
    text: "Accompagnement du primaire au baccalauréat avec des enseignants attentifs.",
  },
  {
    icon: Palette,
    title: "Ateliers créatifs",
    text: "Crochet, broderie, sacs en perle, pâtisserie française, glaces et milkshakes.",
  },
];

function Index() {
  return (
    <>
      <section className="gradient-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground">
              <Sparkles className="size-3.5" /> Centre de formation à Sfax
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Apprendre, progresser et <span className="text-gradient">créer</span> chez Novice
              Academy
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Cours de langues, soutien scolaire personnalisé et ateliers professionnels et
              créatifs, dans un cadre chaleureux pensé pour les enfants comme pour les adultes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Réserver un cours</Link>
              </Button>
              <Button asChild variant="soft" size="lg">
                <Link to="/courses">Voir les formations</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> Route Tunis km 1 Ariana, Sfax 3000
              </span>
              <a href="tel:+21652644706" className="flex items-center gap-2 hover:text-primary">
                <Phone className="size-4 text-primary" /> 52 644 706
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              width={1600}
              height={1104}
              alt="Élèves et formatrice de Novice Academy dans une salle de cours lumineuse"
              className="shadow-card w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-card"
            >
              <span className="gradient-primary inline-flex size-12 items-center justify-center rounded-2xl text-primary-foreground">
                <p.icon className="size-6" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="grid items-center gap-10 rounded-3xl bg-secondary/60 p-8 lg:grid-cols-2 lg:p-12">
          <img
            src={workshopsImage}
            width={1408}
            height={912}
            loading="lazy"
            alt="Créations des ateliers : crochet, broderie, sac en perles et pâtisseries françaises"
            className="shadow-soft w-full rounded-2xl object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold">Qui sommes-nous ?</h2>
            <p className="mt-4 text-muted-foreground">
              Novice Academy est un centre d'éducation et de formation situé à Sfax. Nous réunissons
              des enseignants passionnés et des formatrices expertes pour offrir un apprentissage de
              qualité, concret et accessible à tous les âges.
            </p>
            <p className="mt-4 text-muted-foreground">
              Notre approche : de petits groupes, un suivi individuel et beaucoup de pratique — que
              ce soit pour parler une nouvelle langue, réussir son année scolaire ou maîtriser un
              savoir-faire artisanal.
            </p>
            <Button asChild variant="hero" className="mt-7">
              <Link to="/about">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="gradient-primary shadow-card rounded-3xl px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold">Prêt à commencer votre parcours ?</h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">
            Inscrivez-vous dès aujourd'hui ou contactez-nous pour trouver la formation qui vous
            correspond.
          </p>
          <Button asChild variant="secondary" size="lg" className="mt-7">
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
