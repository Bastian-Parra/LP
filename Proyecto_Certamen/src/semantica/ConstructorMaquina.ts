import type {
    Direccion,
    MaquinaTuring,
    Transicion
} from "../types/types";

import { TablaSimbolos } from "./TablaSimbolos";
import { ValidadorSemantico } from "./ValidadorSemantico";


// Informacion temporal de una transicion
// antes de validar la maquina completa.
interface TransicionPendiente {
    estadoOrigen: string;
    simboloLeido: string;
    transicion: Transicion;
}


// ======================================================
// CONSTRUCTOR DE MAQUINA
// Recibe las acciones semanticas y construye
// una MaquinaTuring lista para el motor.
// ======================================================

export class ConstructorMaquina {

    private readonly tablaSimbolos: TablaSimbolos;

    private estadoInicial: string | undefined;

    private readonly estadosFinales: Set<string>;

    private readonly transicionesPendientes: TransicionPendiente[];


    constructor() {

        this.tablaSimbolos = new TablaSimbolos();

        this.estadosFinales = new Set<string>();

        this.transicionesPendientes = [];
    }


    // ======================================================
    // ALFABETO
    // ======================================================

    agregarSimbolo(simbolo: string): void {
        this.tablaSimbolos.registrarSimbolo(simbolo);
    }


    // ======================================================
    // ESTADOS
    // ======================================================

    agregarEstado(estado: string): void {
        this.tablaSimbolos.registrarEstado(estado);
    }


    // ======================================================
    // ESTADO INICIAL
    // ======================================================

    definirEstadoInicial(estado: string): void {

        if (this.estadoInicial !== undefined) {
            throw new Error(
                `Error semantico: el estado inicial ya fue definido como '${this.estadoInicial}'.`
            );
        }

        this.estadoInicial = estado;
    }


    // ======================================================
    // ESTADOS FINALES
    // ======================================================

    agregarEstadoFinal(estado: string): void {

        if (this.estadosFinales.has(estado)) {
            throw new Error(
                `Error semantico: el estado final '${estado}' esta repetido.`
            );
        }

        this.estadosFinales.add(estado);
    }


    // ======================================================
    // TRANSICIONES
    // Guarda temporalmente una transicion.
    // La validacion completa se hace en construir().
    // ======================================================

    agregarTransicion(
        estadoOrigen: string,
        simboloLeido: string,
        estadoDestino: string,
        simboloEscrito: string,
        movimiento: Direccion
    ): void {

        this.transicionesPendientes.push({
            estadoOrigen,
            simboloLeido,
            transicion: {
                estadoDestino,
                escribe: simboloEscrito,
                mueve: movimiento
            }
        });
    }


    // ======================================================
    // CONSTRUIR
    // Valida todo y devuelve la maquina que necesita Bastian.
    // ======================================================

    construir(
        cintaInicial: string | string[] = "",
        posicionCabezal: number = 0,
        simboloBlanco: string = "_"
    ): MaquinaTuring {

        if (this.estadoInicial === undefined) {
            throw new Error(
                "Error semantico: no se definio un estado inicial."
            );
        }

        const validador = new ValidadorSemantico(
            this.tablaSimbolos
        );

        // Revisamos estructura general.
        validador.validarSimboloBlanco(simboloBlanco);

        validador.validarEstadoInicial(
            this.estadoInicial
        );

        validador.validarEstadosFinales(
            this.estadosFinales
        );

        // Validamos todas las transiciones.
        for (const pendiente of this.transicionesPendientes) {

            validador.registrarTransicion(
                pendiente.estadoOrigen,
                pendiente.simboloLeido,
                pendiente.transicion
            );
        }

        // Convertimos la cinta a arreglo.
        const cinta =
            typeof cintaInicial === "string"
                ? Array.from(cintaInicial)
                : [...cintaInicial];

        // Una cinta vacia comienza con blanco.
        if (cinta.length === 0) {
            cinta.push(simboloBlanco);
        }

        validador.validarCintaInicial(cinta);

        // Evitamos comenzar fuera de la cinta.
        if (
            !Number.isInteger(posicionCabezal) ||
            posicionCabezal < 0 ||
            posicionCabezal >= cinta.length
        ) {
            throw new Error(
                `Error semantico: posicion inicial del cabezal invalida (${posicionCabezal}).`
            );
        }

        return {
            estadoInicial: this.estadoInicial,
            estadosFinales: new Set(this.estadosFinales),
            transiciones: validador.obtenerTransiciones(),
            cinta,
            posicionCabezal,
            simboloBlanco
        };
    }
}