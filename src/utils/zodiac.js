// Rango por signo (mes es 1-12 aquí para legibilidad)
export const zodiacSigns = [
  { key: "Aries", start: [3, 21], end: [4, 19] },
  { key: "Tauro", start: [4, 20], end: [5, 20] },
  { key: "Géminis", start: [5, 21], end: [6, 20] },
  { key: "Cáncer", start: [6, 21], end: [7, 22] },
  { key: "Leo", start: [7, 23], end: [8, 22] },
  { key: "Virgo", start: [8, 23], end: [9, 22] },
  { key: "Libra", start: [9, 23], end: [10, 22] },
  { key: "Escorpio", start: [10, 23], end: [11, 21] },
  { key: "Sagitario", start: [11, 22], end: [12, 21] },
  { key: "Capricornio", start: [12, 22], end: [1, 19] },
  { key: "Acuario", start: [1, 20], end: [2, 18] },
  { key: "Piscis", start: [2, 19], end: [3, 20] },
];

// Datos de Pokémon por signo zodiacal
export const pokemonData = {
  Aries: {
    pokemon: "Charizard",
    pokedexNum: "#006",
    type: "Fuego/Volador",
    sprite: "🔥🐉",
    personality: "Feroz y determinado, siempre listo para el combate",
    stats: { hp: 78, attack: 84, defense: 78, speed: 100 },
    moves: ["Lanzallamas", "Garra Dragón", "Vuelo", "Rugido"],
  },
  Tauro: {
    pokemon: "Snorlax",
    pokedexNum: "#143",
    type: "Normal",
    sprite: "😴💤",
    personality: "Tranquilo y persistente, disfruta de los placeres simples",
    stats: { hp: 160, attack: 110, defense: 65, speed: 30 },
    moves: ["Descanso", "Ronquido", "Cuerpo Pesado", "Hiperrayo"],
  },
  Géminis: {
    pokemon: "Alakazam",
    pokedexNum: "#065",
    type: "Psíquico",
    sprite: "🧠✨",
    personality: "Intelectual y versátil, domina múltiples habilidades",
    stats: { hp: 55, attack: 50, defense: 45, speed: 120 },
    moves: ["Psíquico", "Teletransporte", "Reflejo", "Intercambio"],
  },
  Cáncer: {
    pokemon: "Blastoise",
    pokedexNum: "#009",
    type: "Agua",
    sprite: "🌊🛡️",
    personality: "Protector y leal, siempre cuida a su equipo",
    stats: { hp: 79, attack: 83, defense: 100, speed: 78 },
    moves: ["Hidrobomba", "Protección", "Refugio", "Pistola Agua"],
  },
  Leo: {
    pokemon: "Arcanine",
    pokedexNum: "#059",
    type: "Fuego",
    sprite: "🦁🔥",
    personality: "Majestuoso y valiente, nació para liderar",
    stats: { hp: 90, attack: 110, defense: 80, speed: 95 },
    moves: ["Rugido", "Llamarada", "Velocidad Extrema", "Mordisco"],
  },
  Virgo: {
    pokemon: "Mewtwo",
    pokedexNum: "#150",
    type: "Psíquico",
    sprite: "🧬🔮",
    personality: "Perfeccionista y analítico, busca la excelencia",
    stats: { hp: 106, attack: 110, defense: 90, speed: 130 },
    moves: ["Psicoquinesis", "Recuperación", "Barrera", "Confusión"],
  },
  Libra: {
    pokemon: "Clefairy",
    pokedexNum: "#035",
    type: "Hada",
    sprite: "🧚✨",
    personality: "Armonioso y encantador, trae paz a todos",
    stats: { hp: 70, attack: 45, defense: 48, speed: 35 },
    moves: ["Rayo Luna", "Encanto", "Canto", "Dulce Beso"],
  },
  Escorpio: {
    pokemon: "Gengar",
    pokedexNum: "#094",
    type: "Fantasma/Veneno",
    sprite: "👻💜",
    personality: "Misterioso e intenso, oculta poderes profundos",
    stats: { hp: 60, attack: 65, defense: 60, speed: 110 },
    moves: ["Bola Sombra", "Lengüetazo", "Maldición", "Pesadilla"],
  },
  Sagitario: {
    pokemon: "Rapidash",
    pokedexNum: "#078",
    type: "Fuego",
    sprite: "🏇🔥",
    personality: "Aventurero y libre, galopa hacia el horizonte",
    stats: { hp: 65, attack: 100, defense: 70, speed: 105 },
    moves: ["Llamarada", "Agilidad", "Ataque Rápido", "Salto"],
  },
  Capricornio: {
    pokemon: "Machamp",
    pokedexNum: "#068",
    type: "Lucha",
    sprite: "💪⚡",
    personality: "Trabajador incansable, nunca se rinde ante los desafíos",
    stats: { hp: 90, attack: 130, defense: 80, speed: 55 },
    moves: ["Puño Dinámico", "Fuerza", "Resistencia", "Golpe Cruz"],
  },
  Acuario: {
    pokemon: "Jolteon",
    pokedexNum: "#135",
    type: "Eléctrico",
    sprite: "⚡🌟",
    personality: "Innovador y eléctrico, energiza todo a su paso",
    stats: { hp: 65, attack: 65, defense: 60, speed: 130 },
    moves: ["Rayo", "Onda Trueno", "Agilidad", "Pin Misil"],
  },
  Piscis: {
    pokemon: "Vaporeon",
    pokedexNum: "#134",
    type: "Agua",
    sprite: "🌊💙",
    personality: "Empático y fluido, se adapta como el agua",
    stats: { hp: 130, attack: 65, defense: 60, speed: 65 },
    moves: ["Surf", "Hidropulso", "Rayo Aurora", "Deseo"],
  },
};

// helper para comparar mes/día
function inRange(m, d, [sm, sd], [em, ed]) {
  if (sm <= em) {
    // rango normal (no cruza año)
    if (m < sm || m > em) return false;
    if (m === sm && d < sd) return false;
    if (m === em && d > ed) return false;
    return true;
  } else {
    // cruza fin de año (ej. Capricornio)
    return m > sm || (m === sm && d >= sd) || m < em || (m === em && d <= ed);
  }
}

export function signFromDate(date) {
  const m = date.getMonth() + 1; // 1-12
  const d = date.getDate();
  const found = zodiacSigns.find((z) => inRange(m, d, z.start, z.end));
  return found ? found.key : null;
}

export function dateRangeBySign(sign) {
  const z = zodiacSigns.find((z) => z.key === sign);
  if (!z) return "";
  const f = ([m, d]) =>
    `${String(d).padStart(2, "0")}/${String(m).padStart(2, "0")}`;
  return `${f(z.start)} – ${f(z.end)}`;
}

// Mensajes de predicción estilo Pokémon Trainer
const messages = {
  Aries:
    "¡Tu Charizard interior está rugiendo! Es momento de volar hacia nuevas aventuras con valentía y determinación.",
  Tauro:
    "Como Snorlax, tu paciencia será recompensada. Mantén tu ritmo constante y todo llegará en el momento perfecto.",
  Géminis:
    "Tu mente brillante como Alakazam encontrará soluciones únicas. Usa tu astucia para conectar ideas brillantes.",
  Cáncer:
    "El poder protector de Blastoise fluye en ti. Confía en tu instinto y cuida a quienes más amas.",
  Leo: "¡Tu espíritu de Arcanine brilla intensamente! Lidera con nobleza y deja que tu luz natural inspire a otros.",
  Virgo:
    "La precisión de Mewtwo te guía hacia la perfección. Analiza cada detalle y alcanza la excelencia.",
  Libra:
    "Como Clefairy, tu magia natural equilibrará todo a tu alrededor. Usa tu encanto para crear armonía.",
  Escorpio:
    "Los misterios de Gengar te rodean. Abraza tu intensidad y transforma las sombras en poder.",
  Sagitario:
    "¡Galopa como Rapidash hacia nuevos horizontes! Tu espíritu aventurero te llevará lejos.",
  Capricornio:
    "La fuerza incansable de Machamp vive en ti. Tu determinación moverá montañas paso a paso.",
  Acuario:
    "Tu energía eléctrica como Jolteon iluminará el futuro. Conecta con las corrientes del cambio.",
  Piscis:
    "Fluye como Vaporeon con las corrientes de la intuición. Tu sensibilidad es tu mayor superpoder.",
};

export function getHoroscopeBySign(sign) {
  return (
    messages[sign] ?? "¡Un día perfecto para entrenar con tu compañero Pokémon!"
  );
}

// Función para obtener datos del Pokémon
export function getPokemonBySign(sign) {
  return pokemonData[sign] ?? null;
}
