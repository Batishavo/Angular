/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: String;
  detalles: Detalles;
}

interface Detalles {
  autor: String;
  anio: number;
}

const Reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mes",
  detalles: {
    autor: "A",
    anio: 2015,
  },
};

const { volumen, segundo, cancion, detalles } = Reproductor;
const { autor } = detalles;

// console.log("El volumen actial de: ",volumen);
// console.log("El segundo actial de: ",segundo);
// console.log("El cancion actial de:  ",cancion);
// console.log("El autor actial de:  ",autor);

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];

const [,,p3] = dbz;

//console.log("Personaje 1:", p1);
//console.log("Personaje 2:", p2);
console.log("Personaje 3:", p3);
