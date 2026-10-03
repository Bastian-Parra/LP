export type Direccion = "L" | "R" | "N"; // esto es básicamente izquierda, derecha y no mover

export interface Transicion {
  escribe: string;
  mueve: Direccion;
  estadoDestino: string;
}

export interface MaquinaTuring {
  estadoInicial: string;
  estadosFinales: Set<string>;
  transiciones: Map<string, Transicion>; // "estadoActual, SimboloLeido"
  cinta: string[];
  posicionCabezal: number;
  simboloBlanco: string;
}
