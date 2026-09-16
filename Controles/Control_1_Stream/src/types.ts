// ======================================================
// TIPOS DE NODOS
// Tipos de nodos que puede tener la topologia.
// ======================================================

export enum TipoNodo {
    // Nodo que genera tuplas.
    FUENTE,

    // Nodo que procesa tuplas.
    OPERADOR,

    // Nodo final que recibe las tuplas.
    SUMIDERO
}


// ======================================================
// NODO
// Base que comparten todos los nodos.
// ======================================================

export interface Nodo {
    // Identificador unico del nodo.
    id: string;

    // Tipo del nodo.
    tipo: TipoNodo;
}


// ======================================================
// OPERADOR
// Nodo que procesa las tuplas.
// ======================================================

export interface Operador extends Nodo {
    // Un operador siempre debe ser de este tipo.
    tipo: TipoNodo.OPERADOR;

    // Tiempo que demora en procesar una tupla.
    tiempoServicio: number;

    // Cantidad de replicas del operador.
    replicas: number;
}


// ======================================================
// GRAFO
// Define lo que debe poder hacer nuestro grafo.
// ======================================================

export interface Grafo {
    // Agrega un nodo al grafo.
    agregarNodo(nodo: Nodo): void;

    // Conecta dos nodos.
    conectar(idOrigen: string, idDestino: string): void;

    // Busca un nodo por su id.
    obtenerNodo(id: string): Nodo | undefined;

    // Entrega los nodos conectados desde otro nodo.
    obtenerAdyacentes(id: string): Nodo[];

    // Entrega todos los nodos guardados.
    obtenerNodos(): Nodo[];

    // Revisa que el grafo sea valido.
    validarEstructura(): void;
}


// ======================================================
// TUPLA
// Informacion usada durante la simulacion.
// ======================================================

export interface Tupla {
    // Numero del evento.
    idEvento: number;

    // Guarda el camino recorrido.
    trazaActual: string[];

    // Guarda el tiempo total acumulado.
    tiempoAcumulado: number;
}


// ======================================================
// SIMULADOR
// Metodos que utilizara la parte de simulacion.
// ======================================================

export interface Simulador {
    // Ejecuta los eventos sobre el grafo.
    ejecutar(grafo: Grafo, cantidadEventos: number): void;

    // Decide que replica recibe la siguiente tupla.
    balancearCarga(operadorDestino: Operador): number;
}
