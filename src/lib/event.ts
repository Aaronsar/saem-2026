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
    "Le grand rendez-vous de ton orientation médecine — échanges avec des étudiants de fac, prépas et associations.",
  email: "contact@salon-etudes-medecine.fr",
} as const;

/** Mention légale / transparence : les facs ne sont pas exposantes. */
export const FACULTIES_ASTERISK =
  "Des étudiants de facultés de médecine d'Île-de-France viendront répondre aux questions des parents et des lycéens / étudiants. Les universités elles-mêmes ne tiennent pas de stand et ne sont pas partenaires officiels du salon.";

export type Exhibitor = {
  id: string;
  name: string;
  category: "Facultés*" | "Prépa" | "Association" | "École" | "Partenaire";
  city: string;
  description: string;
};

export const EXHIBITORS: Exhibitor[] = [
  {
    id: "paris-cite",
    name: "Étudiants — Paris Cité",
    category: "Facultés*",
    city: "Paris",
    description:
      "Échanges avec des étudiants en médecine / PASS-LAS pour parler du campus, du rythme et de la vie étudiante.",
  },
  {
    id: "sorbonne",
    name: "Étudiants — Sorbonne Université",
    category: "Facultés*",
    city: "Paris",
    description:
      "Retours d'expérience sur les études de médecine et conseils concrets pour les lycéens.",
  },
  {
    id: "saclay",
    name: "Étudiants — Paris-Saclay",
    category: "Facultés*",
    city: "Île-de-France",
    description:
      "Témoignages sur le parcours santé et réponses aux questions des familles.",
  },
  {
    id: "creteil",
    name: "Étudiants — Paris-Est Créteil",
    category: "Facultés*",
    city: "Créteil",
    description:
      "Échanges librement organisés avec des étudiants — hors représentation officielle de l'université.",
  },
  {
    id: "uvsq",
    name: "Étudiants — UVSQ",
    category: "Facultés*",
    city: "Versailles",
    description:
      "Questions-réponses sur l'entrée en médecine et le quotidien en première année.",
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
    name: "Associations étudiantes",
    category: "Association",
    city: "Île-de-France",
    description: "Conseils de terrain et orientation par des associations d'étudiants en santé.",
  },
  {
    id: "link-rome",
    name: "Link Campus University",
    category: "École",
    city: "Rome",
    description:
      "Université basée à Rome — présentation des cursus et échanges sur les études de médecine en Italie.",
  },
  {
    id: "ue-espagne",
    name: "Universidad Europea",
    category: "École",
    city: "Madrid · Málaga · Valence…",
    description:
      "Université privée espagnole multi-campus (Madrid, Málaga, Valence et autres) — orientation vers les études de santé en Espagne.",
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
    speaker: "Intervenants orientation",
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
    speaker: "Étudiants & intervenants",
    room: "Amphithéâtre A",
    description:
      "Différences entre parcours, attendus et réalités du numerus apertus — témoignages d'étudiants.",
  },
  {
    id: "c4",
    time: "14h00",
    title: "Réussir sa première année : méthodes & organisation",
    speaker: "Étudiants en médecine",
    room: "Amphithéâtre A",
    description:
      "Planning, fiches, groupes de travail et équilibre de vie pendant la L1 santé.",
  },
  {
    id: "c5",
    time: "15h00",
    title: "Étudier la médecine en Île-de-France : regards croisés",
    speaker: "Étudiants de différentes facs*",
    room: "Amphithéâtre A",
    description:
      "Retours d'étudiants sur les campus franciliens. Les facultés ne sont pas représentées officiellement.",
  },
  {
    id: "c6",
    time: "16h00",
    title: "Médecine à l'étranger : opportunités et vigilance",
    speaker: "Intervenants mobilité",
    room: "Amphithéâtre B",
    description:
      "Pays européens, frais, reconnaissance du diplôme et retours d'expérience.",
  },
  {
    id: "c7",
    time: "17h00",
    title: "Questions-réponses parents & lycéens",
    speaker: "Tous les intervenants",
    room: "Amphithéâtre A",
    description:
      "Session ouverte pour répondre à vos questions d'orientation.",
  },
];

export const FAQ = [
  {
    q: "Comment m'inscrire au salon ?",
    a: "Cliquez sur « Je m'inscris » n'importe où sur le site pour ouvrir le formulaire, puis validez. Vous recevrez une confirmation par e-mail. L'entrée est gratuite et nominative.",
  },
  {
    q: "Les facultés de médecine seront-elles présentes ?",
    a: FACULTIES_ASTERISK,
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
