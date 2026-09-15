// Aqui va la lógica de los nodos y la topologia que debe implementar el Lucas
// básicamente debes construir el un modelo de datos validando la tabla de simbolos
// te voy a dejar las interfaces básicas que menciona el profe creadas y luego tu creas la interfaz Operador que extiende de Nodo y el Grafo

export enum TipoNodo {
  FUENTE,
  OPERADOR,
  SUMIDEDO,
}

export interface Nodo {
  id: string;
  tipo: TipoNodo;
  tiempoServicio?: number; // se requiere para operadores
  replicas?: number;
}

export interface Operador extends Nodo {} // TODO
export interface Grafo {} // TODO

// Aqui va el contrato o lo que utiliza el Nico
// (básicamente debes leer el archivo de txt usando ANTLR e invocar los metodos del Grafo que crea Lucas)

// Esto es lo que necesito en el apartado de simulación:
export interface Tupla {
  idEvento: number;
  trazaActual: string[]; // ejemplo de uso: ["FUENTE f1", "OPERADOR op1", "SUMIDERO s1"]
  tiempoAcumulado: number; // suma de los tiempo de servicio
}

export interface Simulador {
  // esto recibe el grafo que ya se construyo por Lucas y la cantidad de eventos extraída por el Nico
  ejecutar(grafo: Grafo, cantidadEventos: number): void; // ejecuta SIMULAR

  // este metodo lo utilizo solo yo para la intruccion REPLICAS que se menciona
  balancearCarga(operadorDestino: Operador): number;
}

// esto es lo básico que el simulador espera recibir:
export interface GrafoTopologia {
  nodos: Map<String, Nodo>;
  adyacentes: Map<string, string[]>;
  obtenerFuentes(): Nodo[];
}

// cuando este archivo
