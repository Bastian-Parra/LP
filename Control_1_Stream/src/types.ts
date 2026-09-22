// tipos de nodos que puede tener la red
export enum TipoNodo {
  FUENTE,
  OPERADOR,
  SUMIDERO,
}

// base que tienen en comun todos los nodos
export interface Nodo {
  // nombre o id unico del nodo
  id: string;

  // que tipo de nodo es
  tipo: TipoNodo;
}

// el nodo que hace el trabajo pesado
export interface Operador extends Nodo {
  // siempre tiene que ser tipo operador
  tipo: TipoNodo.OPERADOR;

  // lo que se demora en procesar un dato
  tiempoServicio: number;

  // cuantas copias o replicas tiene este operador
  replicas: number;
}

// lo que tiene que poder hacer el grafo
export interface Grafo {
  // mete un nodo a la red
  agregarNodo(nodo: Nodo): void;

  // hace una conexion de un nodo a otro
  conectar(idOrigen: string, idDestino: string): void;

  // busca un nodo usando su id
  obtenerNodo(id: string): Nodo | undefined;

  // te da los nodos que estan conectados a este
  obtenerAdyacentes(id: string): Nodo[];

  // te devuelve todos los nodos de la red
  obtenerNodos(): Nodo[];

  // revisa que todo el grafo este bien armado
  validarEstructura(): void;
}

// los datos que se mueven en la simulacion
export interface Tupla {
  idEvento: number;

  // guarda por donde ha pasado la tupla
  trazaActual: string[];

  // suma del tiempo que se ha demorado en el viaje
  tiempoAcumulado: number;
}

// lo que necesita el simulador para funcionar
export interface Simulador {
  // corre todos los eventos en el grafo
  ejecutar(grafo: Grafo, cantidadEventos: number): void;

  // decide a cual replica le toca recibir el dato
  balancearCarga(operadorDestino: Operador): number;
}
