import type { Direccion } from "../types/types";
import { ConstructorMaquina } from "./ConstructorMaquina";

// Una transicion interna de una subrutina.
export interface TransicionSubrutina {
  estadoOrigen: string;
  simboloLeido: string;
  estadoDestino: string;
  simboloEscrito: string;
  mueve: Direccion;
}

// Representacion de una subrutina una vez
// que sus parametros ya fueron resueltos.
export interface SubrutinaExpandida {
  nombre: string;

  estados: string[];

  estadoEntrada: string;

  estadosSalida: string[];

  transiciones: TransicionSubrutina[];
}

// Resultado de insertar una subrutina.
export interface ResultadoInsercion {
  estadoEntrada: string;

  estadosSalida: string[];

  mapaEstados: Map<string, string>;
}

// ======================================================
// EXPANSOR DE SUBRUTINAS
// Inserta estados y transiciones dentro de una maquina.
// ======================================================

export class ExpansorSubrutinas {
  insertar(
    constructor: ConstructorMaquina,
    subrutina: SubrutinaExpandida,
    nombreInstancia: string,
    cantidad: number = 1,
  ): ResultadoInsercion {
    if (nombreInstancia.trim().length === 0) {
      throw new Error(
        "Error semantico: la instancia de la subrutina necesita un nombre.",
      );
    }

    if (!Number.isInteger(cantidad) || cantidad <= 0) {
      throw new Error(
        "Error semantico: el parametro de la subrutina debe ser un entero mayor que 0.",
      );
    }


    const estadosOriginales = new Set(subrutina.estados);

    // Una subrutina tampoco puede declarar
    // dos veces el mismo estado.
    if (estadosOriginales.size !== subrutina.estados.length) {
      throw new Error(
        `Error semantico: la subrutina '${subrutina.nombre}' tiene estados repetidos.`,
      );
    }

    if (!estadosOriginales.has(subrutina.estadoEntrada)) {
      throw new Error(
        `Error semantico: el estado de entrada '${subrutina.estadoEntrada}' no existe en la subrutina '${subrutina.nombre}'.`,
      );
    }

    for (const salida of subrutina.estadosSalida) {
      if (!estadosOriginales.has(salida)) {
        throw new Error(
          `Error semantico: el estado de salida '${salida}' no existe en la subrutina '${subrutina.nombre}'.`,
        );
      }
    }

    // Guardamos los mapas de estados de cada repeticion.
    const mapasRepeticiones: Map<string, string>[] = [];

    // Esto sirve para evitar agregar un mismo estado dos veces.
    const estadosAgregados = new Set<string>();

    // Creamos tantas copias de la subrutina como indique el parametro.
    for (let i = 0; i < cantidad; i++) {
      const mapa = new Map<string, string>();

      for (const estado of subrutina.estados) {
        let nuevoEstado: string;

        // La primera entrada conserva el nombre normal.
        if (estado === subrutina.estadoEntrada) {
          if (i === 0) {
            nuevoEstado = `${nombreInstancia}__${estado}`;
          } else {
            nuevoEstado = `${nombreInstancia}__rep${i + 1}__${estado}`;
        }
      }

      // Si es un estado de salida y aun quedan repeticiones,
      // lo conectamos con la entrada de la siguiente repeticion.
      else if (subrutina.estadosSalida.includes(estado)) {
        if (i === cantidad - 1) {
          nuevoEstado = `${nombreInstancia}__${estado}`;
        } else {
          nuevoEstado =
          `${nombreInstancia}__rep${i + 2}__${subrutina.estadoEntrada}`;
        }
      }

      // Los estados internos tambien reciben nombres diferentes.
      else {
        nuevoEstado =
        `${nombreInstancia}__rep${i + 1}__${estado}`;
      }

      mapa.set(estado, nuevoEstado);

      if (!estadosAgregados.has(nuevoEstado)) {
        constructor.agregarEstado(nuevoEstado);
        estadosAgregados.add(nuevoEstado);
      }
    }

    mapasRepeticiones.push(mapa);
  }

  // Copiamos las transiciones para cada repeticion
  for (let i = 0; i < cantidad; i++) {
    const mapa = mapasRepeticiones[i];

    for (const regla of subrutina.transiciones) {
      const origen = mapa.get(regla.estadoOrigen);
      const destino = mapa.get(regla.estadoDestino);

      if (origen === undefined) {
        throw new Error(
          `Error semantico: la subrutina '${subrutina.nombre}' usa el estado origen '${regla.estadoOrigen}' sin declararlo.`,
        );
      }

      if (destino === undefined) {
        throw new Error(
          `Error semantico: la subrutina '${subrutina.nombre}' usa el estado destino '${regla.estadoDestino}' sin declararlo.`,
        );
      }

      constructor.agregarTransicion(
        origen,
        regla.simboloLeido,
        destino,
        regla.simboloEscrito,
        regla.mueve,
      );
    }
  }

  // Este mapa deja la entrada en la primera repeticion y las salidas en la ultima
  const mapaEstados = new Map<string, string>();

  for (const estado of subrutina.estados) {
    if (subrutina.estadosSalida.includes(estado)) {
      mapaEstados.set(
        estado,
        mapasRepeticiones[cantidad - 1].get(estado)!,
      );
    } else {
      mapaEstados.set(
        estado,
        mapasRepeticiones[0].get(estado)!,
      );
    }
  }

  return {
    estadoEntrada:
      mapasRepeticiones[0].get(subrutina.estadoEntrada)!,

    estadosSalida: subrutina.estadosSalida.map(
      (estado) =>
        mapasRepeticiones[cantidad - 1].get(estado)!,
    ),

    mapaEstados,
  };
    }
  }