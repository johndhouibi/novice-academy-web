import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-semibold">Novice Academy</h3>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Centre d'éducation et de formation à Sfax : langues, soutien scolaire et
            ateliers créatifs pour enfants et adultes.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Navigation
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Accueil</Link></li>
            <li><Link to="/courses" className="hover:text-primary">Cours & Formations</Link></li>
            <li><Link to="/about" className="hover:text-primary">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact & Inscription</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Nous contacter
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              Route Tunis km 1 Ariana, Sfax 3000, Tunisie
            </li>
            <li className="flex gap-2">
              <Phone className="size-4 shrink-0 text-primary" />
              <a href="tel:+21652644706" className="hover:text-primary">52 644 706</a>
            </li>
            <li className="flex gap-2">
              <Mail className="size-4 shrink-0 text-primary" />
              <a href="mailto:noviceacademy05@gmail.com" className="hover:text-primary">
                noviceacademy05@gmail.com
              </a>
            </li>
            <li className="flex gap-2">
              <Facebook className="size-4 shrink-0 text-primary" />
              <a
                href="https://www.facebook.com/search/top?q=novice%20academy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Facebook — Novice Academy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Novice Academy · Sfax, Tunisie
      </div>
    </footer>
  );
}