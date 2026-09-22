import type { Nodo } from "./types";

// esta es la tabla de simbolos que guarda los nodos y evita ids repetidos
export class TablaSimbolos {
  // aca quedan los nodos guardados usando el id como llave
  private nodos: Map<string, Nodo>;

  // empezamos con la tabla en blanco
  constructor() {
    // prendemos el mapa donde van los nodos
    this.nodos = new Map<string, Nodo>();
  }

  // registramos un nodo nuevo si es que no esta
  registrarNodo(nodo: Nodo): void {
    // vemos si el id ya se uso antes
    if (this.nodos.has(nodo.id)) {
      // si ya esta, tiramos error pa que no se repita
      throw new Error(
        `Error semantico: el nodo '${nodo.id}' ya fue declarado.`,
      );
    }

    // si pasa la prueba, procedemos a guardarlo
    this.nodos.set(nodo.id, nodo);
  }

  // buscar un nodo especifico por el id
  obtenerNodo(id: string): Nodo | undefined {
    // lo devuelve si lo encuentra, sino tira undefined
    return this.nodos.get(id);
  }

  // para ver rapidamente si existe un nodo en la tabla
  existeNodo(id: string): boolean {
    // retorna true o false
    return this.nodos.has(id);
  }

  // obtenemos todos los nodos juntos
  obtenerTodos(): Nodo[] {
    // pasamos el mapa a un a un arreglo para que sea más facil de usar o manipular
    return Array.from(this.nodos.values());
  }
}
