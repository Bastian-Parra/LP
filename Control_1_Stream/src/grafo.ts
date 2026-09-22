// Importamos el enum para revisar el tipo de cada nodo.
import { TipoNodo } from "./types";

// Importamos los tipos que usa el grafo.
import type { Nodo, Grafo as GrafoContrato } from "./types";

// Usamos la tabla para guardar y buscar nodos.
import { TablaSimbolos } from "./tablaSimbolos";


// ======================================================
// GRAFO
// Guarda los nodos y conexiones de la topologia.
// ======================================================

export class Grafo implements GrafoContrato {

    // Guarda todos los nodos declarados.
    private tablaSimbolos: TablaSimbolos;

    // Guarda las conexiones entre nodos.
    // Ejemplo: "f1" -> ["op1", "op2"]
    private adyacencias: Map<string, string[]>;


    // ======================================================
    // CONSTRUCTOR
    // Crea el grafo vacio.
    // ======================================================

    constructor() {

        // Creamos la tabla de simbolos.
        this.tablaSimbolos = new TablaSimbolos();

        // Creamos el mapa de conexiones.
        this.adyacencias = new Map<string, string[]>();
    }


    // ======================================================
    // AGREGAR NODO
    // Guarda un nodo dentro del grafo.
    // ======================================================

    agregarNodo(nodo: Nodo): void {

        // La tabla revisa que el id no este repetido.
        this.tablaSimbolos.registrarNodo(nodo);

        // El nodo comienza sin conexiones.
        this.adyacencias.set(nodo.id, []);
    }


    // ======================================================
    // CONECTAR
    // Crea una conexion desde un nodo hacia otro.
    // ======================================================

    conectar(idOrigen: string, idDestino: string): void {

        // Revisamos que el origen exista.
        if (!this.tablaSimbolos.existeNodo(idOrigen)) {
            throw new Error(
                `Error semantico: el nodo origen '${idOrigen}' no existe.`
            );
        }

        // Revisamos que el destino exista.
        if (!this.tablaSimbolos.existeNodo(idDestino)) {
            throw new Error(
                `Error semantico: el nodo destino '${idDestino}' no existe.`
            );
        }

        // Buscamos las conexiones del nodo origen.
        const conexiones = this.adyacencias.get(idOrigen);

        // Esto no deberia pasar porque el origen ya fue validado.
        if (conexiones === undefined) {
            throw new Error(
                `No se encontraron conexiones para '${idOrigen}'.`
            );
        }

        // Evitamos guardar dos veces la misma conexion.
        if (!conexiones.includes(idDestino)) {

            // Agregamos el destino.
            conexiones.push(idDestino);
        }
    }


    // ======================================================
    // OBTENER NODO
    // Busca un nodo por su id.
    // ======================================================

    obtenerNodo(id: string): Nodo | undefined {

        // La tabla hace la busqueda.
        return this.tablaSimbolos.obtenerNodo(id);
    }


    // ======================================================
    // OBTENER ADYACENTES
    // Entrega los nodos conectados desde otro nodo.
    // ======================================================

    obtenerAdyacentes(id: string): Nodo[] {

        // Buscamos las conexiones del nodo.
        const conexiones = this.adyacencias.get(id);

        // Si no existe, no podemos buscar sus conexiones.
        if (conexiones === undefined) {
            throw new Error(
                `El nodo '${id}' no existe en el grafo.`
            );
        }

        // Aqui guardamos los nodos encontrados.
        const nodosAdyacentes: Nodo[] = [];

        // Recorremos cada conexion.
        for (const idDestino of conexiones) {

            // Buscamos el nodo usando su id.
            const nodo = this.tablaSimbolos.obtenerNodo(idDestino);

            // Si existe, lo agregamos.
            if (nodo !== undefined) {
                nodosAdyacentes.push(nodo);
            }
        }

        // Entregamos los nodos encontrados.
        return nodosAdyacentes;
    }


    // ======================================================
    // OBTENER NODOS
    // Entrega todos los nodos del grafo.
    // ======================================================

    obtenerNodos(): Nodo[] {

        // La tabla ya tiene todos los nodos.
        return this.tablaSimbolos.obtenerTodos();
    }


    // ======================================================
    // VALIDAR ESTRUCTURA
    // Revisa que exista una fuente y un sumidero.
    // ======================================================

    validarEstructura(): void {

        // Obtenemos todos los nodos.
        const nodos = this.tablaSimbolos.obtenerTodos();

        // Revisamos si existe una fuente.
        const existeFuente = nodos.some(
            nodo => nodo.tipo === TipoNodo.FUENTE
        );

        // Revisamos si existe un sumidero.
        const existeSumidero = nodos.some(
            nodo => nodo.tipo === TipoNodo.SUMIDERO
        );

        // Debe existir al menos una fuente.
        if (!existeFuente) {
            throw new Error(
                "Error estructural: la topologia necesita al menos una FUENTE."
            );
        }

        // Debe existir al menos un sumidero.
        if (!existeSumidero) {
            throw new Error(
                "Error estructural: la topologia necesita al menos un SUMIDERO."
            );
        }
    }
}