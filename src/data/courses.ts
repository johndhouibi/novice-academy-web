export type Course = {
  title: string;
  description: string;
  tags: string[];
};

export const languageCourses: Course[] = [
  { title: "Anglais", description: "Du niveau débutant au niveau avancé : conversation, grammaire et préparation aux examens.", tags: ["Enfants", "Adultes"] },
  { title: "Français", description: "Expression orale et écrite, renforcement grammatical et ateliers de lecture.", tags: ["Tous niveaux"] },
  { title: "Espagnol", description: "Apprentissage vivant de l'espagnol avec mises en situation et culture hispanique.", tags: ["Débutants"] },
  { title: "Italien", description: "Bases solides en italien : vocabulaire du quotidien, prononciation et dialogues.", tags: ["Débutants"] },
];

export const tutoring: Course[] = [
  { title: "Primaire", description: "Accompagnement en mathématiques, français, arabe et éveil scientifique.", tags: ["Soutien scolaire"] },
  { title: "Collège", description: "Révisions ciblées, méthodologie de travail et préparation aux devoirs de synthèse.", tags: ["Soutien scolaire"] },
  { title: "Lycée & Bac", description: "Préparation intensive au baccalauréat en petits groupes ou en cours particuliers.", tags: ["Bac"] },
];

export const workshops: Course[] = [
  { title: "Crochet & Art Déco", description: "Créez pièces décoratives et accessoires au crochet, du point de base aux modèles avancés.", tags: ["Créatif"] },
  { title: "Sacs en Perle", description: "Confection de sacs et pochettes en perles : montage, motifs et finitions soignées.", tags: ["Artisanat"] },
  { title: "Broderie", description: "Broderie traditionnelle et moderne : points essentiels, compositions florales et personnalisation.", tags: ["Artisanat"] },
  { title: "Pâtisserie & الحلويات الفرنسية", description: "Macarons, éclairs, tartes et classiques de la pâtisserie française expliqués pas à pas.", tags: ["Gourmand"] },
  { title: "Glaces, Jus & Milkshakes", description: "Techniques de glaces artisanales, jus frais et milkshakes prêts à vendre ou à savourer.", tags: ["Gourmand"] },
];