export const EVENT = {
  name: "Salon des Études de Médecine",
  shortName: "SAEM 2026",
  baseline: "En France & à l'étranger",
  dateLabel: "Dimanche 8 novembre 2026",
  dateShort: "8 novembre 2026",
  timeLabel: "10h – 18h",
  dateISO: "2026-11-08T10:00:00+01:00",
  address: "12 avenue Victor Hugo",
  city: "75016 Paris",
  venueNote: "Adresse provisoire — le lieu définitif sera confirmé prochainement",
  audience: "Lycéens de la Seconde à la Terminale, parents et étudiants",
  tagline:
    "Le grand rendez-vous de ton orientation médecine — facs, prépas et associations réunies en une journée.",
  email: "contact@salon-etudes-medecine.fr",
} as const;

export type Exhibitor = {
  id: string;
  name: string;
  category: "Faculté" | "Prépa" | "Association" | "École" | "Partenaire";
  city: string;
  description: string;
};

export const EXHIBITORS: Exhibitor[] = [
  {
    id: "paris-cite",
    name: "Université Paris Cité",
    category: "Faculté",
    city: "Paris",
    description: "PASS, LAS et parcours santé — échanges avec étudiants et responsables pédagogiques.",
  },
  {
    id: "sorbonne",
    name: "Sorbonne Université",
    category: "Faculté",
    city: "Paris",
    description: "Présentation des filières médecine et conseils Parcoursup.",
  },
  {
    id: "saclay",
    name: "Université Paris-Saclay",
    category: "Faculté",
    city: "Orsay / Paris",
    description: "Découverte des campus et des modalités d'admission en santé.",
  },
  {
    id: "creteil",
    name: "Université Paris-Est Créteil",
    category: "Faculté",
    city: "Créteil",
    description: "Ateliers orientation et témoignages d'étudiants en PASS/LAS.",
  },
  {
    id: "uvsq",
    name: "UVSQ – Versailles Saint-Quentin",
    category: "Faculté",
    city: "Versailles",
    description: "Parcours santé en Île-de-France et vie étudiante.",
  },
  {
    id: "diploma",
    name: "Diploma Santé",
    category: "Prépa",
    city: "Paris",
    description: "Préparation médecine, méthodes de travail et accompagnement lycée.",
  },
  {
    id: "anemf",
    name: "ANEMF",
    category: "Association",
    city: "National",
    description: "Représentation des étudiants en médecine et conseils de terrain.",
  },
  {
    id: "isn",
    name: "Institut Supérieur de Neurochirurgie (atelier)",
    category: "Partenaire",
    city: "Paris",
    description: "Découverte des métiers et spécialités autour de la médecine.",
  },
  {
    id: "medabroad",
    name: "Études de médecine à l'étranger",
    category: "École",
    city: "Europe",
    description: "Programmes internationaux, conditions d'admission et reconnaissance.",
  },
];

export type Conference = {
  id: string;
  time: string;
  title: string;
  speaker: string;
  room: string;
  description: string;
};

export const CONFERENCES: Conference[] = [
  {
    id: "c1",
    time: "10h30",
    title: "Préparer la médecine dès la terminale",
    speaker: "Responsables pédagogiques",
    room: "Amphithéâtre A",
    description:
      "Calendrier, méthodes et bonnes habitudes pour aborder sereinement Parcoursup et la première année.",
  },
  {
    id: "c2",
    time: "11h30",
    title: "Optimiser son dossier Parcoursup",
    speaker: "Conseillers orientation",
    room: "Amphithéâtre A",
    description:
      "Projet de formation motivé, activités extra-scolaires et choix des vœux PASS/LAS.",
  },
  {
    id: "c3",
    time: "12h30",
    title: "PASS, LAS & réforme : ce qu'il faut savoir",
    speaker: "Enseignants de faculté",
    room: "Amphithéâtre A",
    description:
      "Différences entre parcours, attendus et réalités du numerus apertus.",
  },
  {
    id: "c4",
    time: "14h00",
    title: "Réussir sa première année : méthodes & organisation",
    speaker: "Anciens étudiants",
    room: "Amphithéâtre A",
    description:
      "Planning, fiches, groupes de travail et équilibre de vie pendant la L1 santé.",
  },
  {
    id: "c5",
    time: "15h00",
    title: "Étudier la médecine à Paris : les facultés décryptées",
    speaker: "Panel multi-facultés",
    room: "Amphithéâtre A",
    description:
      "Spécificités des campus franciliens pour choisir en connaissance de cause.",
  },
  {
    id: "c6",
    time: "16h00",
    title: "Médecine à l'étranger : opportunités et vigilance",
    speaker: "Experts mobilité",
    room: "Amphithéâtre B",
    description:
      "Pays européens, frais, reconnaissance du diplôme et retours d'expérience.",
  },
  {
    id: "c7",
    time: "17h00",
    title: "Questions-réponses parents & collégiens / lycéens",
    speaker: "Tous les intervenants",
    room: "Amphithéâtre A",
    description:
      "Session ouverte pour répondre à toutes vos questions d'orientation.",
  },
];

export const FAQ = [
  {
    q: "Comment m'inscrire au salon ?",
    a: "Cliquez sur « Je m'inscris » n'importe où sur le site, remplissez le formulaire et validez. Vous recevrez une confirmation par e-mail. L'entrée est gratuite et nominative.",
  },
  {
    q: "Puis-je venir avec un accompagnant ?",
    a: "Oui. Indiquez le nombre d'accompagnants lors de l'inscription, ou inscrivez chaque personne séparément avec une adresse e-mail distincte.",
  },
  {
    q: "Faut-il imprimer mon invitation ?",
    a: "Non. Présentez votre confirmation sur smartphone à l'entrée. Vous pouvez aussi l'imprimer si vous préférez.",
  },
  {
    q: "Dois-je m'inscrire aux conférences ?",
    a: "L'accès aux conférences est libre et gratuit dans la limite des places. Arrivez 10 minutes avant pour vous installer confortablement.",
  },
  {
    q: "L'adresse est-elle définitive ?",
    a: "Le salon se tiendra à Paris le 8 novembre 2026. L'adresse indiquée (12 avenue Victor Hugo, 16e) est provisoire et sera mise à jour dès confirmation du lieu.",
  },
] as const;
