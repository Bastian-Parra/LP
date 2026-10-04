import type { Transicion } from "../types/types";
import { TablaSimbolos } from "./TablaSimbolos";


// ======================================================
// VALIDADOR SEMANTICO
// Comprueba que la maquina sea consistente.
// ======================================================

export class ValidadorSemantico {

    private readonly tablaSimbolos: TablaSimbolos;

    // Bastian usa claves como "q0,0".
    private readonly transiciones: Map<string, Transicion> = new Map();


    constructor(tablaSimbolos: TablaSimbolos) {
        this.tablaSimbolos = tablaSimbolos;
    }


    // ======================================================
    // REGISTRAR TRANSICION
    // Valida una transicion antes de guardarla.
    // ======================================================

    registrarTransicion(
        estadoOrigen: string,
        simboloLeido: string,
        transicion: Transicion
    ): void {

        // Ambos estados deben existir.
        this.validarEstadoDeclarado(estadoOrigen);
        this.validarEstadoDeclarado(transicion.estadoDestino);

        // Tanto lo que leemos como lo que escribimos
        // deben pertenecer al alfabeto.
        this.validarSimboloDeclarado(simboloLeido);
        this.validarSimboloDeclarado(transicion.escribe);

        // Revisamos tambien el movimiento.
        this.validarMovimiento(transicion.mueve);

        const clave = `${estadoOrigen},${simboloLeido}`;

        // Una MT determinista no puede tener dos respuestas
        // para el mismo par estado + simbolo.
        if (this.transiciones.has(clave)) {
            throw new Error(
                `Error semantico: ya existe una transicion para (${estadoOrigen}, ${simboloLeido}).`
            );
        }

        this.transiciones.set(clave, transicion);
    }


    // ======================================================
    // ESTADO INICIAL
    // El estado inicial debe estar declarado.
    // ======================================================

    validarEstadoInicial(estadoInicial: string): void {

        if (!this.tablaSimbolos.existeEstado(estadoInicial)) {
            throw new Error(
                `Error semantico: el estado inicial '${estadoInicial}' no fue declarado.`
            );
        }
    }


    // ======================================================
    // ESTADOS FINALES
    // Todos deben existir.
    // ======================================================

    validarEstadosFinales(estadosFinales: Iterable<string>): void {

        const finales = Array.from(estadosFinales);

        if (finales.length === 0) {
            throw new Error(
                "Error semantico: la maquina necesita al menos un estado final."
            );
        }

        for (const estado of finales) {

            if (!this.tablaSimbolos.existeEstado(estado)) {
                throw new Error(
                    `Error semantico: el estado final '${estado}' no fue declarado.`
                );
            }
        }
    }


    // ======================================================
    // SIMBOLO BLANCO
    // El alfabeto debe contener el blanco.
    // ======================================================

    validarSimboloBlanco(simboloBlanco: string = "_"): void {

        if (!this.tablaSimbolos.existeSimbolo(simboloBlanco)) {
            throw new Error(
                `Error semantico: el alfabeto debe contener el simbolo blanco '${simboloBlanco}'.`
            );
        }
    }


    // ======================================================
    // CINTA INICIAL
    // Todos sus simbolos deben pertenecer al alfabeto.
    // ======================================================

    validarCintaInicial(cinta: string[]): void {

        for (const simbolo of cinta) {

            if (!this.tablaSimbolos.existeSimbolo(simbolo)) {
                throw new Error(
                    `Error semantico: el simbolo '${simbolo}' de la cinta no pertenece al alfabeto.`
                );
            }
        }
    }


    // ======================================================
    // OBTENER TRANSICIONES
    // Devuelve las transiciones ya validadas.
    // ======================================================

    obtenerTransiciones(): Map<string, Transicion> {
        return new Map(this.transiciones);
    }


    // ======================================================
    // VALIDACIONES INTERNAS
    // ======================================================

    private validarEstadoDeclarado(estado: string): void {

        if (!this.tablaSimbolos.existeEstado(estado)) {
            throw new Error(
                `Error semantico: el estado '${estado}' no fue declarado.`
            );
        }
    }


    private validarSimboloDeclarado(simbolo: string): void {

        if (!this.tablaSimbolos.existeSimbolo(simbolo)) {
            throw new Error(
                `Error semantico: el simbolo '${simbolo}' no pertenece al alfabeto.`
            );
        }
    }


    private validarMovimiento(movimiento: string): void {

        if (
            movimiento !== "L" &&
            movimiento !== "R" &&
            movimiento !== "N"
        ) {
            throw new Error(
                `Error semantico: el movimiento '${movimiento}' no es valido.`
            );
        }
    }
}