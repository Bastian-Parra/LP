import { Nodo, TipoNodo, GrafoTopologia } from "./types";

export class Simulador {
  // es un diccionario para llevar el registro del balanceo
  // la clave es "idOrigen->idDestino"
  private contadoresRoundRobin: Map<string, number> = new Map();

  /**
   * @param grafo es la topologia
   * @param cantidadEventos es el num de tuplas que se generan por cada fuente
   */

  public simular(grafo: GrafoTopologia, cantidadEventos: number): void {
    const fuentes = grafo.obtenerFuentes();

    // se ejecuta la cantidad de eventos que solicita SIMULAR
    for (let i = 1; i <= cantidadEventos; i++) {
      fuentes.forEach((f: Nodo) => {
        // se inicia la traza de la tupla desde la fuente
        this.recorrerFlujo(grafo, f, i, `FUENTE ${f.id}`, 0);
      });
    }
  }

  /**
   * recorremos el grafo recursivamente haciendo una simulacion
   */

  private recorrerFlujo(
    grafo: GrafoTopologia,
    actual: Nodo,
    idEvento: number,
    trazaActual: string,
    tiempoAcumulado: number,
  ): void {
    const destinos = grafo.adyacentes.get(actual.id) || [];

    // esta es la condicion de parada o el caso base de la funcion recursiva: si no hay destinos, se llega al final del flujo
    if (destinos.length === 0) {
      console.log(`Evento ${idEvento}: ${trazaActual}`);
      console.log(`Tiempo total acumulado: ${tiempoAcumulado}\n`);
      return;
    }

    // iteramos todos los nodos a los que nodoActual envia tuplas
    destinos.forEach((idDestino: string) => {
      const destino = grafo.nodos.get(idDestino)!;
      let trazaActualizada = trazaActual;
      let tiempoNuevo = tiempoAcumulado;

      if (destino.tipo === TipoNodo.OPERADOR) {
        // se calcula que replica toca
        const claveRR = `${actual.id}->${destino.id}`;
        const replicaActual = this.balancearCarga(
          claveRR,
          destino.replicas || 1,
        );

        // usamos esa variable para armar el texto
        const sufijoReplica =
          destino.replicas && destino.replicas > 1 ? `_R${replicaActual}` : "";

        trazaActualizada += ` -> OPERADOR ${destino.id}${sufijoReplica} (T: ${destino.tiempoServicio})`;
        tiempoNuevo += destino.tiempoServicio || 0;
      } else if (destino.tipo === TipoNodo.SUMIDERO) {
        trazaActualizada += ` -> SUMIDERO ${destino.id}`;
      }
      // es la llamada recursiva para avanzar al sgte nodo
      this.recorrerFlujo(
        grafo,
        destino,
        idEvento,
        trazaActualizada,
        tiempoNuevo,
      );
    });
  }

  /**
   * determinamos que replica debe procesar la tupla actual usando RR
   */
  private balancearCarga(claveArista: string, totalReplicas: number): number {
    const replicaActual =
      ((this.contadoresRoundRobin.get(claveArista) || 0) % totalReplicas) + 1;
    this.contadoresRoundRobin.set(claveArista, replicaActual);
    return replicaActual;
  }
}
