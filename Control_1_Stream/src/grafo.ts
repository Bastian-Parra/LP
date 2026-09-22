import { TipoNodo } from "./types";
import type { Nodo, Grafo as GrafoContrato } from "./types";
import { TablaSimbolos } from "./tablaSimbolos";

// el grafo principal donde se guarda todo
export class Grafo implements GrafoContrato {
  // aca quedan guardados todos los nodos
  private tablaSimbolos: TablaSimbolos;

  // mapa de conexiones, ej: "f1" -> ["op1", "op2"]
  private adyacencias: Map<string, string[]>;

  // armamos el grafo vacio
  constructor() {
    // iniciamos la tablita
    this.tablaSimbolos = new TablaSimbolos();

    // dejamos el mapa en blanco
    this.adyacencias = new Map<string, string[]>();
  }

  // meter un nodo nuevo
  agregarNodo(nodo: Nodo): void {
    // la tabla se encarga de que el id no este repetido
    this.tablaSimbolos.registrarNodo(nodo);

    // parte sin ninguna conexion al principio
    this.adyacencias.set(nodo.id, []);
  }

  // tirar una linea de un nodo a otro
  conectar(idOrigen: string, idDestino: string): void {
    // vemos si el de origen de verdad existe
    if (!this.tablaSimbolos.existeNodo(idOrigen)) {
      throw new Error(
        `Error semantico: el nodo origen '${idOrigen}' no existe.`,
      );
    }

    // vemos si el destino existe tambien
    if (!this.tablaSimbolos.existeNodo(idDestino)) {
      throw new Error(
        `Error semantico: el nodo destino '${idDestino}' no existe.`,
      );
    }

    // sacamos las conexiones del origen
    const conexiones = this.adyacencias.get(idOrigen);

    // por si acaso, aunque ya lo validamos arriba
    if (conexiones === undefined) {
      throw new Error(`No se encontraron conexiones para '${idOrigen}'.`);
    }

    // pa no meter la misma conexion dos veces
    if (!conexiones.includes(idDestino)) {
      // lo metemos a la lista
      conexiones.push(idDestino);
    }
  }

  // buscar un nodo por su id
  obtenerNodo(id: string): Nodo | undefined {
    // le pedimos a la tabla que lo busque
    return this.tablaSimbolos.obtenerNodo(id);
  }

  // ver a quien esta conectado un nodo
  obtenerAdyacentes(id: string): Nodo[] {
    // sacamos el arreglo de conexiones
    const conexiones = this.adyacencias.get(id);

    // si no esta, no hay conexiones que buscar
    if (conexiones === undefined) {
      throw new Error(`El nodo '${id}' no existe en el grafo.`);
    }

    // arreglito pa guardar el resultado
    const nodosAdyacentes: Nodo[] = [];

    // damos la vuelta por cada conexion
    for (const idDestino of conexiones) {
      // buscamos el nodo real en la tabla
      const nodo = this.tablaSimbolos.obtenerNodo(idDestino);

      // si lo pilla, pa adentro
      if (nodo !== undefined) {
        nodosAdyacentes.push(nodo);
      }
    }

    // devolvemos la lista
    return nodosAdyacentes;
  }

  // sacar todos los nodos de una vez
  obtenerNodos(): Nodo[] {
    // la tabla ya cuenta con ellos asi que simplemente se los pasamos
    return this.tablaSimbolos.obtenerTodos();
  }

  // ver si la topologia tiene sentido (fuente y sumidero)
  validarEstructura(): void {
    // traemos todos los nodos
    const nodos = this.tablaSimbolos.obtenerTodos();

    // buscamos si hay alguna fuente
    const existeFuente = nodos.some((nodo) => nodo.tipo === TipoNodo.FUENTE);

    // buscamos si hay un sumidero
    const existeSumidero = nodos.some(
      (nodo) => nodo.tipo === TipoNodo.SUMIDERO,
    );

    // si no hay fuente, se cae
    if (!existeFuente) {
      throw new Error(
        "Error estructural: la topologia necesita al menos una FUENTE.",
      );
    }

    // si no hay sumidero tambien explota
    if (!existeSumidero) {
      throw new Error(
        "Error estructural: la topologia necesita al menos un SUMIDERO.",
      );
    }
  }
}
