// Importamos el enum porque lo usamos para saber el tipo de cada nodo.
import { TipoNodo } from "./types";

// Importamos solo los tipos que necesitamos.
import type { Nodo, Grafo as GrafoContrato } from "./types";

// Usamos la tabla de simbolos para guardar y buscar los nodos.
import { TablaSimbolos } from "./tablaSimbolos";


// ======================================================
// GRAFO
// Guarda los nodos y las conexiones de la topologia.
// ======================================================

export class Grafo implements GrafoContrato {

    // Tabla donde se guardan todos los nodos declarados.
    private tablaSimbolos: TablaSimbolos;

    // Guarda las conexiones entre los nodos.
    // Ejemplo: "f1" -> ["op1", "op2"]
    private adyacencias: Map<string, string[]>;


    // ======================================================
    // CONSTRUCTOR
    // Crea el grafo vacio.
    // ======================================================

    constructor() {

        // Creamos una tabla de simbolos vacia.
        this.tablaSimbolos = new TablaSimbolos();

        // Creamos el mapa donde guardaremos las conexiones.
        this.adyacencias = new Map<string, string[]>();
    }


    // ======================================================
    // AGREGAR NODO
    // Guarda un nodo dentro del grafo.
    // ======================================================

    agregarNodo(nodo: Nodo): void {

        // La tabla se encarga de revisar que el id no este repetido.
        this.tablaSimbolos.registrarNodo(nodo);

        // Creamos su lista de conexiones vacia.
        this.adyacencias.set(nodo.id, []);
    }


    // ======================================================
    // CONECTAR
    // Crea una conexion desde un nodo hacia otro.
    // ======================================================

    conectar(idOrigen: string, idDestino: string): void {

        // Revisamos que el nodo de origen exista.
        if (!this.tablaSimbolos.existeNodo(idOrigen)) {

            // No se puede conectar desde un nodo inexistente.
            throw new Error(
                `Error semantico: el nodo origen '${idOrigen}' no existe.`
            );
        }

        // Revisamos que el nodo de destino exista.
        if (!this.tablaSimbolos.existeNodo(idDestino)) {

            // No se puede conectar hacia un nodo inexistente.
            throw new Error(
                `Error semantico: el nodo destino '${idDestino}' no existe.`
            );
        }

        // Buscamos las conexiones actuales del nodo origen.
        const conexiones = this.adyacencias.get(idOrigen);

        // Esto no deberia pasar porque el nodo ya fue validado.
        if (conexiones === undefined) {
            throw new Error(
                `No se encontraron conexiones para '${idOrigen}'.`
            );
        }

        // Evitamos guardar dos veces la misma conexion.
        if (!conexiones.includes(idDestino)) {

            // Agregamos el destino a la lista del origen.
            conexiones.push(idDestino);
        }
    }


    // ======================================================
    // OBTENER NODO
    // Busca un nodo por su identificador.
    // ======================================================

    obtenerNodo(id: string): Nodo | undefined {

        // La tabla de simbolos hace la busqueda.
        return this.tablaSimbolos.obtenerNodo(id);
    }


    // ======================================================
    // OBTENER ADYACENTES
    // Entrega los nodos conectados desde otro nodo.
    // ======================================================

    obtenerAdyacentes(id: string): Nodo[] {

        // Buscamos los ids conectados desde este nodo.
        const conexiones = this.adyacencias.get(id);

        // Si el nodo no existe, no podemos buscar sus conexiones.
        if (conexiones === undefined) {
            throw new Error(
                `El nodo '${id}' no existe en el grafo.`
            );
        }

        // Aqui guardaremos los nodos encontrados.
        const nodosAdyacentes: Nodo[] = [];

        // Recorremos cada id conectado.
        for (const idDestino of conexiones) {

            // Buscamos el nodo real usando su id.
            const nodo = this.tablaSimbolos.obtenerNodo(idDestino);

            // Si existe, lo agregamos al resultado.
            if (nodo !== undefined) {
                nodosAdyacentes.push(nodo);
            }
        }

        // Entregamos todos los nodos encontrados.
        return nodosAdyacentes;
    }


    // ======================================================
    // OBTENER NODOS
    // Entrega todos los nodos del grafo.
    // ======================================================

    obtenerNodos(): Nodo[] {

        // La tabla ya tiene todos los nodos registrados.
        return this.tablaSimbolos.obtenerTodos();
    }


    // ======================================================
    // VALIDAR ESTRUCTURA
    // Revisa que exista al menos una fuente y un sumidero.
    // ======================================================

    validarEstructura(): void {

        // Obtenemos todos los nodos creados.
        const nodos = this.tablaSimbolos.obtenerTodos();

        // Revisamos si existe al menos una fuente.
        const existeFuente = nodos.some(
            nodo => nodo.tipo === TipoNodo.FUENTE
        );

        // Revisamos si existe al menos un sumidero.
        const existeSumidero = nodos.some(
            nodo => nodo.tipo === TipoNodo.SUMIDERO
        );

        // Una topologia necesita al menos una fuente.
        if (!existeFuente) {
            throw new Error(
                "Error estructural: la topologia necesita al menos una FUENTE."
            );
        }

        // Una topologia necesita al menos un sumidero.
        if (!existeSumidero) {
            throw new Error(
                "Error estructural: la topologia necesita al menos un SUMIDERO."
            );
        }
    }
}