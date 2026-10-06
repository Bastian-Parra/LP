import {
  Nodo,
  TipoNodo,
  Operador,
  Grafo,
  Simulador as ISimulador,
  Tupla,
} from "./types";

export class SimuladorRed implements ISimulador {
  // el diccionario sigue usando solo la id del operador para centralizar la carga
  private contadoresRoundRobin: Map<string, number> = new Map();

  public ejecutar(grafo: Grafo, cantidadEventos: number): void {
    const fuentes = grafo
      .obtenerNodos()
      .filter((n) => n.tipo === TipoNodo.FUENTE);

    // Cola FIFO que guarda el nodo actual y la tupla en tránsito
    const colaMensajes: { nodoActual: Nodo; tupla: Tupla }[] = [];

    // 1. Fase de Inyección
    for (let i = 1; i <= cantidadEventos; i++) {
      fuentes.forEach((f: Nodo) => {
        colaMensajes.push({
          nodoActual: f,
          tupla: {
            idEvento: i,
            trazaActual: [`FUENTE ${f.id}`],
            tiempoAcumulado: 0,
          },
        });
      });
    }

    // FIFO para eventos
    while (colaMensajes.length > 0) {
      const mensaje = colaMensajes.shift()!;
      const destinos = grafo.obtenerAdyacentes(mensaje.nodoActual.id);

      // caso base de parada
      if (destinos.length === 0) {
        console.log(
          `Evento ${mensaje.tupla.idEvento}: ${mensaje.tupla.trazaActual.join(" -> ")}`,
        );
        console.log(
          `Tiempo total acumulado: ${mensaje.tupla.tiempoAcumulado}\n`,
        );
        continue;
      }

      destinos.forEach((destino: Nodo) => {
        // clonamos el arreglo de la traza para no mutar el original
        const nuevaTraza = [...mensaje.tupla.trazaActual];
        let nuevoTiempo = mensaje.tupla.tiempoAcumulado;

        if (destino.tipo === TipoNodo.OPERADOR) {
          const operador = destino as Operador;
          const replicaAsignada = this.balancearCarga(operador);
          const sufijo = operador.replicas > 1 ? `_R${replicaAsignada}` : "";

          nuevaTraza.push(
            `OPERADOR ${operador.id}${sufijo} (T: ${operador.tiempoServicio})`,
          );
          nuevoTiempo += operador.tiempoServicio;
        } else if (destino.tipo === TipoNodo.SUMIDERO) {
          nuevaTraza.push(`SUMIDERO ${destino.id}`);
        }

        colaMensajes.push({
          nodoActual: destino,
          tupla: {
            idEvento: mensaje.tupla.idEvento,
            trazaActual: nuevaTraza,
            tiempoAcumulado: nuevoTiempo,
          },
        });
      });
    }
  }

  // Cumplimos con la firma de tu interfaz
  public balancearCarga(operadorDestino: Operador): number {
    const mensajesProcesados =
      this.contadoresRoundRobin.get(operadorDestino.id) || 0;
    const replicaActual = (mensajesProcesados % operadorDestino.replicas) + 1;

    this.contadoresRoundRobin.set(operadorDestino.id, mensajesProcesados + 1);

    return replicaActual;
  }
}
