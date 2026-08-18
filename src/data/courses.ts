export type CourseModule = {
  name: string;
  detail: string;
};

export type Course = {
  title: string;
  description: string;
  tags: string[];
  kind?: "language" | "tutoring" | "workshop";
  modulesLabel?: string;
  modules?: CourseModule[];
};

export const languageCourses: Course[] = [
  {
    title: "Anglais",
    description: "Du niveau débutant au niveau avancé : conversation, grammaire et préparation aux examens.",
    tags: ["Enfants", "Adultes"],
    kind: "language",
    modulesLabel: "Niveaux disponibles",
    modules: [
      { name: "A1 — Débutant", detail: "Alphabet, salutations, présent simple et premières conversations du quotidien." },
      { name: "A2 — Élémentaire", detail: "Temps du passé, vocabulaire pratique, échanges courts sur des sujets familiers." },
      { name: "B1 — Intermédiaire", detail: "Récits structurés, expression d'opinions, compréhension de documents authentiques." },
      { name: "B2 — Avancé", detail: "Débats, rédaction argumentée, préparation TOEFL / IELTS." },
      { name: "C1 — Maîtrise", detail: "Anglais professionnel, présentations, nuances et registre soutenu." },
    ],
  },
  {
    title: "Français",
    description: "Expression orale et écrite, renforcement grammatical et ateliers de lecture.",
    tags: ["Tous niveaux"],
    kind: "language",
    modulesLabel: "Niveaux disponibles",
    modules: [
      { name: "A1 — Débutant", detail: "Prononciation, vocabulaire de base et phrases simples." },
      { name: "A2 — Élémentaire", detail: "Conjugaison essentielle, dialogues du quotidien, courts écrits." },
      { name: "B1 — Intermédiaire", detail: "Expression d'idées, lettres et courriels, compréhension de textes." },
      { name: "B2 — Avancé", detail: "Argumentation, synthèse de documents, préparation DELF." },
      { name: "C1 — Maîtrise", detail: "Français professionnel et académique, style et nuances." },
    ],
  },
  {
    title: "Espagnol",
    description: "Apprentissage vivant de l'espagnol avec mises en situation et culture hispanique.",
    tags: ["Débutants"],
    kind: "language",
    modulesLabel: "Niveaux disponibles",
    modules: [
      { name: "A1 — Débutant", detail: "Prononciation, présentations et vocabulaire essentiel." },
      { name: "A2 — Élémentaire", detail: "Passé et futur, voyages, achats et vie quotidienne." },
      { name: "B1 — Intermédiaire", detail: "Conversation fluide, récits et culture hispanique." },
      { name: "B2 — Avancé", detail: "Discussions complexes et préparation DELE." },
    ],
  },
  {
    title: "Italien",
    description: "Bases solides en italien : vocabulaire du quotidien, prononciation et dialogues.",
    tags: ["Débutants"],
    kind: "language",
    modulesLabel: "Niveaux disponibles",
    modules: [
      { name: "A1 — Débutant", detail: "Alphabet, salutations, expressions utiles." },
      { name: "A2 — Élémentaire", detail: "Dialogues du quotidien, passé composé, vocabulaire pratique." },
      { name: "B1 — Intermédiaire", detail: "Conversation soutenue, lecture et culture italienne." },
      { name: "B2 — Avancé", detail: "Expression argumentée et italien professionnel." },
    ],
  },
];

export const tutoring: Course[] = [
  {
    title: "Primaire",
    description: "Accompagnement en mathématiques, français, arabe et éveil scientifique.",
    tags: ["Soutien scolaire"],
    kind: "tutoring",
    modulesLabel: "Matières & niveaux",
    modules: [
      { name: "1ère — 3ème année", detail: "Lecture, écriture, calcul et méthodes d'apprentissage ludiques." },
      { name: "4ème — 5ème année", detail: "Mathématiques, français, arabe et éveil scientifique." },
      { name: "6ème année & Concours", detail: "Préparation au concours d'entrée : entraînement intensif et examens blancs." },
    ],
  },
  {
    title: "Collège",
    description: "Révisions ciblées, méthodologie de travail et préparation aux devoirs de synthèse.",
    tags: ["Soutien scolaire"],
    kind: "tutoring",
    modulesLabel: "Matières & niveaux",
    modules: [
      { name: "7ème & 8ème année", detail: "Mathématiques, sciences, français et anglais." },
      { name: "9ème année", detail: "Préparation au concours de 9ème et révisions générales." },
      { name: "Méthodologie", detail: "Organisation du travail, prise de notes et gestion du temps." },
    ],
  },
  {
    title: "Lycée & Bac",
    description: "Préparation intensive au baccalauréat en petits groupes ou en cours particuliers.",
    tags: ["Bac"],
    kind: "tutoring",
    modulesLabel: "Sections & matières",
    modules: [
      { name: "1ère & 2ème année", detail: "Consolidation des bases en maths, physique, français et anglais." },
      { name: "3ème année", detail: "Suivi par section : sciences, math, économie, lettres, informatique." },
      { name: "Bac — 4ème année", detail: "Révisions intensives, sujets d'examen et bacs blancs corrigés." },
    ],
  },
];

export const workshops: Course[] = [
  {
    title: "Crochet & Art Déco",
    description: "Créez pièces décoratives et accessoires au crochet, du point de base aux modèles avancés.",
    tags: ["Créatif"],
    kind: "workshop",
    modulesLabel: "Modules de l'atelier",
    modules: [
      { name: "Module 1 — Les bases", detail: "Mailles en l'air, brides, cercles magiques et lecture de patrons." },
      { name: "Module 2 — Accessoires", detail: "Bonnets, écharpes, trousses et petits objets utiles." },
      { name: "Module 3 — Art déco", detail: "Tapis, suspensions murales, amigurumis et pièces décoratives." },
    ],
  },
  {
    title: "Sacs en Perle",
    description: "Confection de sacs et pochettes en perles : montage, motifs et finitions soignées.",
    tags: ["Artisanat"],
    kind: "workshop",
    modulesLabel: "Modules de l'atelier",
    modules: [
      { name: "Module 1 — Montage", detail: "Choix des perles, fils et techniques d'enfilage." },
      { name: "Module 2 — Motifs", detail: "Créations géométriques, floraux et jeux de couleurs." },
      { name: "Module 3 — Finitions", detail: "Doublure, fermeture, anses et contrôle qualité pour la vente." },
    ],
  },
  {
    title: "Broderie",
    description: "Broderie traditionnelle et moderne : points essentiels, compositions florales et personnalisation.",
    tags: ["Artisanat"],
    kind: "workshop",
    modulesLabel: "Modules de l'atelier",
    modules: [
      { name: "Module 1 — Points essentiels", detail: "Point de tige, point de nœud, passé plat et point de chaînette." },
      { name: "Module 2 — Compositions florales", detail: "Bouquets, feuillages et jeux d'ombres." },
      { name: "Module 3 — Personnalisation", detail: "Monogrammes, broderie sur vêtements et linge de maison." },
    ],
  },
  {
    title: "Pâtisserie & الحلويات الفرنسية",
    description: "Macarons, éclairs, tartes et classiques de la pâtisserie française expliqués pas à pas.",
    tags: ["Gourmand"],
    kind: "workshop",
    modulesLabel: "Modules de l'atelier",
    modules: [
      { name: "Module 1 — Bases", detail: "Pâte sucrée, crème pâtissière, ganaches et crèmes au beurre." },
      { name: "Module 2 — Macarons & petits fours", detail: "Meringue italienne, coques régulières et garnitures variées." },
      { name: "Module 3 — Entremets & tartes", detail: "Éclairs, tartes, montages et décoration professionnelle." },
    ],
  },
  {
    title: "Glaces, Jus & Milkshakes",
    description: "Techniques de glaces artisanales, jus frais et milkshakes prêts à vendre ou à savourer.",
    tags: ["Gourmand"],
    kind: "workshop",
    modulesLabel: "Modules de l'atelier",
    modules: [
      { name: "Module 1 — Glaces artisanales", detail: "Bases lait et fruits, sorbets, texture et conservation." },
      { name: "Module 2 — Jus & smoothies", detail: "Associations de fruits, jus détox et présentation." },
      { name: "Module 3 — Milkshakes & vente", detail: "Recettes signature, coûts, dressage et service." },
    ],
  },
];