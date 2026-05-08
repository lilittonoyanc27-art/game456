import { TheoryPoint, PhraseQuestion } from './types';

export const THEORY_POINTS: TheoryPoint[] = [
  {
    title: "Թվեր: 100 - 500",
    explanation: "100-ը 'cien' է, բայց 101-ից սկսած դառնում է 'ciento': 200-ից 900-ը ավելանում է 's' (doscientos):",
    example: "100: cien, 105: ciento cinco, 200: doscientos, 500: quinientos.",
    translation: "100, 105, 200, 500:"
  },
  {
    title: "Թվեր: 600 - 900",
    explanation: "Ուշադրություն դարձրեք 700 (setecientos) և 900 (novecientos) թվերի ուղղագրությանը:",
    example: "700: setecientos, 900: novecientos.",
    translation: "700, 900:"
  },
  {
    title: "Թվեր: 1000 - 2000",
    explanation: "1000-ը 'mil' է: 2000-ը 'dos mil' է: Կարիք չկա հոգնակի դարձնել 'mil'-ը:",
    example: "1000: mil, 1500: mil quinientos, 2000: dos mil.",
    translation: "1000, 1500, 2000:"
  }
];

export const PHRASE_QUESTIONS: PhraseQuestion[] = [
  { id: 1, sentence: "100", translation: "Ինչպե՞ս կլինի 100-ը:", options: ["cien", "ciento", "mil"], correctAnswer: "cien" },
  { id: 2, sentence: "150", translation: "Ինչպե՞ս կլինի 150-ը:", options: ["ciento cincuenta", "cien cincuenta", "cincuenta"], correctAnswer: "ciento cincuenta" },
  { id: 3, sentence: "200", translation: "Ինչպե՞ս կլինի 200-ը:", options: ["doscientos", "doscientas", "dos cien"], correctAnswer: "doscientos" },
  { id: 4, sentence: "300", translation: "Ինչպե՞ս կլինի 300-ը:", options: ["trescientos", "tres cien", "treinta"], correctAnswer: "trescientos" },
  { id: 5, sentence: "400", translation: "Ինչպե՞ս կլինի 400-ը:", options: ["cuatrocientos", "cuarenta", "cuatro mil"], correctAnswer: "cuatrocientos" },
  { id: 6, sentence: "500", translation: "Ինչպե՞ս կլինի 500-ը:", options: ["quinientos", "cinco cientos", "cincuenta"], correctAnswer: "quinientos" },
  { id: 7, sentence: "600", translation: "Ինչպե՞ս կլինի 600-ը:", options: ["seiscientos", "seis cientos", "sesenta"], correctAnswer: "seiscientos" },
  { id: 8, sentence: "700", translation: "Ինչպե՞ս կլինի 700-ը:", options: ["setecientos", "siete cientos", "setenta"], correctAnswer: "setecientos" },
  { id: 9, sentence: "800", translation: "Ինչպե՞ս կլինի 800-ը:", options: ["ochocientos", "ocho cientos", "ochenta"], correctAnswer: "ochocientos" },
  { id: 10, sentence: "900", translation: "Ինչպե՞ս կլինի 900-ը:", options: ["novecientos", "nueve cientos", "noventa"], correctAnswer: "novecientos" },
  { id: 11, sentence: "1000", translation: "Ինչպե՞ս կլինի 1000-ը:", options: ["mil", "un mil", "cien"], correctAnswer: "mil" },
  { id: 12, sentence: "1100", translation: "Ինչպե՞ս կլինի 1100-ը:", options: ["mil cien", "mil ciento", "diez cien"], correctAnswer: "mil cien" },
  { id: 13, sentence: "1200", translation: "Ինչպե՞ս կլինի 1200-ը:", options: ["mil doscientos", "mil dos cien", "dos mil"], correctAnswer: "mil doscientos" },
  { id: 14, sentence: "1300", translation: "Ինչպե՞ս կլինի 1300-ը:", options: ["mil trescientos", "mil treinta", "tres mil"], correctAnswer: "mil trescientos" },
  { id: 15, sentence: "1400", translation: "Ինչպե՞ս կլինի 1400-ը:", options: ["mil cuatrocientos", "mil cuarenta", "cuatro mil"], correctAnswer: "mil cuatrocientos" },
  { id: 16, sentence: "1500", translation: "Ինչպե՞ս կլինի 1500-ը:", options: ["mil quinientos", "mil cinco cientos", "cinco mil"], correctAnswer: "mil quinientos" },
  { id: 17, sentence: "1600", translation: "Ինչպե՞ս կլինի 1600-ը:", options: ["mil seiscientos", "mil sesenta", "seis mil"], correctAnswer: "mil seiscientos" },
  { id: 18, sentence: "1700", translation: "Ինչպե՞ս կլինի 1700-ը:", options: ["mil setecientos", "mil setenta", "siete mil"], correctAnswer: "mil setecientos" },
  { id: 19, sentence: "1800", translation: "Ինչպե՞ս կլինի 1800-ը:", options: ["mil ochocientos", "mil ochenta", "ocho mil"], correctAnswer: "mil ochocientos" },
  { id: 20, sentence: "1900", translation: "Ինչպե՞ս կլինի 1900-ը:", options: ["mil novecientos", "mil noventa", "nueve mil"], correctAnswer: "mil novecientos" },
  { id: 21, sentence: "2000", translation: "Ինչպե՞ս կլինի 2000-ը:", options: ["dos mil", "veinte mil", "mil dos"], correctAnswer: "dos mil" },
  { id: 22, sentence: "101", translation: "Ինչպե՞ս կլինի 101-ը:", options: ["ciento uno", "cien uno", "diez uno"], correctAnswer: "ciento uno" },
  { id: 23, sentence: "550", translation: "Ինչպե՞ս կլինի 550-ը:", options: ["quinientos cincuenta", "cinco cientos cincuenta", "cincuenta"], correctAnswer: "quinientos cincuenta" },
  { id: 24, sentence: "1010", translation: "Ինչպե՞ս կլինի 1010-ը:", options: ["mil diez", "mil cien", "diez mil"], correctAnswer: "mil diez" }
];
