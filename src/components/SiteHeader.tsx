import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/courses", label: "Cours & Formations" },
  { to: "/about", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="gradient-primary flex h-10 w-10 items-center justify-center rounded-2xl text-lg font-bold text-primary-foreground">
            N
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">Novice Academy</span>
            <span className="block text-xs text-muted-foreground">Sfax · Centre de formation</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="hero" size="sm">
            <a href="tel:+21652644706">
              <Phone className="size-4" /> 52 644 706
            </a>
          </Button>
        </div>

        <button
          className="rounded-xl border border-border p-2 md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-accent"
            >
              {l.label}
            </Link>
          ))}
          <Button asChild variant="hero" className="mt-2 w-full">
            <a href="tel:+21652644706">Appeler 52 644 706</a>
          </Button>
        </nav>
      )}
    </header>
  );
}