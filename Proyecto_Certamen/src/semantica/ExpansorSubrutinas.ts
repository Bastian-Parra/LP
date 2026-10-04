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
        nombreInstancia: string
    ): ResultadoInsercion {

        if (nombreInstancia.trim().length === 0) {
            throw new Error(
                "Error semantico: la instancia de la subrutina necesita un nombre."
            );
        }

        const estadosOriginales = new Set(
            subrutina.estados
        );

        // Una subrutina tampoco puede declarar
        // dos veces el mismo estado.
        if (
            estadosOriginales.size !==
            subrutina.estados.length
        ) {
            throw new Error(
                `Error semantico: la subrutina '${subrutina.nombre}' tiene estados repetidos.`
            );
        }

        if (
            !estadosOriginales.has(
                subrutina.estadoEntrada
            )
        ) {
            throw new Error(
                `Error semantico: el estado de entrada '${subrutina.estadoEntrada}' no existe en la subrutina '${subrutina.nombre}'.`
            );
        }

        for (const salida of subrutina.estadosSalida) {

            if (!estadosOriginales.has(salida)) {
                throw new Error(
                    `Error semantico: el estado de salida '${salida}' no existe en la subrutina '${subrutina.nombre}'.`
                );
            }
        }

        const mapaEstados = new Map<
            string,
            string
        >();

        // Renombramos los estados.
        // Ejemplo:
        // q0 -> llamada1__q0
        for (const estado of subrutina.estados) {

            const nuevoEstado =
                `${nombreInstancia}__${estado}`;

            mapaEstados.set(
                estado,
                nuevoEstado
            );

            constructor.agregarEstado(
                nuevoEstado
            );
        }

        // Copiamos las transiciones usando
        // los nuevos nombres.
        for (
            const regla of subrutina.transiciones
        ) {

            const origen =
                mapaEstados.get(
                    regla.estadoOrigen
                );

            const destino =
                mapaEstados.get(
                    regla.estadoDestino
                );

            if (origen === undefined) {
                throw new Error(
                    `Error semantico: la subrutina '${subrutina.nombre}' usa el estado origen '${regla.estadoOrigen}' sin declararlo.`
                );
            }

            if (destino === undefined) {
                throw new Error(
                    `Error semantico: la subrutina '${subrutina.nombre}' usa el estado destino '${regla.estadoDestino}' sin declararlo.`
                );
            }

            constructor.agregarTransicion(
                origen,
                regla.simboloLeido,
                destino,
                regla.simboloEscrito,
                regla.mueve
            );
        }

        return {
            estadoEntrada:
                mapaEstados.get(
                    subrutina.estadoEntrada
                )!,

            estadosSalida:
                subrutina.estadosSalida.map(
                    estado => mapaEstados.get(estado)!
                ),

            mapaEstados
        };
    }
}