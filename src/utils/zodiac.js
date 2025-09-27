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

// Mensajes súper simples de ejemplo
const messages = {
  Aries: "Hoy la iniciativa te favorece. Empieza pequeño y avanza.",
  Tauro: "Prioriza lo seguro y constante. Un paso firme vale doble.",
  Géminis: "Comunica tus ideas; una conversación abrirá puertas.",
  Cáncer: "Cuida tu energía en casa y escucha tu intuición.",
  Leo: "Brillas sin forzarlo. Lidera con ejemplo, no con prisa.",
  Virgo: "Ordena primero lo básico y lo demás fluirá.",
  Libra: "Busca el equilibrio: ni todo trabajo ni todo ocio.",
  Escorpio: "Profundiza en un tema clave y verás resultados.",
  Sagitario: "Aprende algo nuevo; expande tus horizontes.",
  Capricornio: "Constancia > intensidad. Avance sólido hoy.",
  Acuario: "Rompe la rutina con una idea fresca y simple.",
  Piscis: "Da espacio a tu creatividad; pequeños detalles cuentan.",
};

export function getHoroscopeBySign(sign) {
  return messages[sign] ?? "Buen día para avanzar con calma.";
}
