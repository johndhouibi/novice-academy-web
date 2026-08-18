import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const title = "Contact & Inscription — Novice Academy Sfax";
const description =
  "Novice Academy, Route Tunis km 1 Ariana, Sfax 3000. Téléphone 52 644 706, email noviceacademy05@gmail.com. Inscrivez-vous en ligne.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Veuillez indiquer votre nom").max(100),
  email: z.string().trim().email("Adresse email invalide").max(255),
  phone: z.string().trim().min(6, "Numéro de téléphone invalide").max(30),
  course: z.string().trim().max(120).optional(),
  message: z.string().trim().min(5, "Votre message est trop court").max(1000),
});

const courses = [
  "Anglais",
  "Français",
  "Espagnol",
  "Italien",
  "Soutien scolaire",
  "Crochet & Art Déco",
  "Sacs en Perle",
  "Broderie",
  "Pâtisserie française",
  "Glaces, jus & milkshakes",
];

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Merci de vérifier les champs du formulaire.");
      return;
    }
    setErrors({});
    const { name, email, phone, course, message } = result.data;
    const body = `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nFormation: ${course || "-"}\n\n${message}`;
    window.location.href = `mailto:noviceacademy05@gmail.com?subject=${encodeURIComponent(
      `Inscription — ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Merci ! Votre demande est prête à être envoyée.");
    form.reset();
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold sm:text-5xl">Contact & Inscription</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Passez nous voir, appelez-nous ou remplissez le formulaire : nous vous répondons
          rapidement.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-7 sm:p-9">
          <div className="grid gap-5">
            <div>
              <Label htmlFor="name">Nom complet</Label>
              <Input id="name" name="name" maxLength={100} className="mt-2" />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" maxLength={255} className="mt-2" />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" name="phone" maxLength={30} className="mt-2" />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="course">Formation souhaitée</Label>
              <select
                id="course"
                name="course"
                className="mt-2 h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="">Choisir…</option>
                {courses.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={5} maxLength={1000} className="mt-2" />
              {errors.message && (
                <p className="mt-1 text-xs text-destructive">{errors.message}</p>
              )}
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Envoyer ma demande
            </Button>
          </div>
        </form>

        <div className="space-y-6">
          <div className="rounded-3xl bg-secondary/60 p-7">
            <h2 className="text-xl font-semibold">Nos coordonnées</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                Route Tunis km 1 Ariana, Sfax 3000, Tunisie
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href="tel:+21652644706" className="hover:text-primary">52 644 706</a>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href="mailto:noviceacademy05@gmail.com" className="hover:text-primary">
                  noviceacademy05@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Facebook className="size-4 shrink-0 text-primary" />
                <a
                  href="https://www.facebook.com/search/top?q=novice%20academy"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  Page Facebook — Novice Academy
                </a>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Localisation de Novice Academy à Sfax"
              src="https://www.google.com/maps?q=km1%20Rte%20de%20Tunis%2C%20Sfax%203000&output=embed"
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}