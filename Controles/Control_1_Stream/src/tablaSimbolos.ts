// Importamos Nodo porque esta tabla guardara nodos.
import type { Nodo } from "./types";


// ======================================================
// TABLA DE SIMBOLOS
// Guarda los nodos declarados y evita ids repetidos.
// ======================================================

export class TablaSimbolos {

    // Guarda cada nodo usando su id como clave.
    private nodos: Map<string, Nodo>;

    // Crea una tabla vacia al comenzar.
    constructor() {

        // Inicializamos el Map donde guardaremos los nodos.
        this.nodos = new Map<string, Nodo>();
    }


    // ======================================================
    // REGISTRAR NODO
    // Agrega un nodo siempre que su id no exista.
    // ======================================================

    registrarNodo(nodo: Nodo): void {

        // Revisamos si ya existe un nodo con el mismo id.
        if (this.nodos.has(nodo.id)) {

            // Si existe, detenemos el proceso porque esta repetido.
            throw new Error(
                `Error semantico: el nodo '${nodo.id}' ya fue declarado.`
            );
        }

        // Si no existe, guardamos el nodo.
        this.nodos.set(nodo.id, nodo);
    }


    // ======================================================
    // OBTENER NODO
    // Busca un nodo usando su id.
    // ======================================================

    obtenerNodo(id: string): Nodo | undefined {

        // Devuelve el nodo o undefined si no existe.
        return this.nodos.get(id);
    }


    // ======================================================
    // EXISTE NODO
    // Sirve para revisar rapidamente si un nodo existe.
    // ======================================================

    existeNodo(id: string): boolean {

        // Devuelve true o false.
        return this.nodos.has(id);
    }


    // ======================================================
    // OBTENER TODOS
    // Entrega todos los nodos guardados.
    // ======================================================

    obtenerTodos(): Nodo[] {

        // Convertimos los valores del Map a un arreglo.
        return Array.from(this.nodos.values());
    }
}