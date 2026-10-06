import { MaquinaTuring } from "../types/types";

export class TuringEngine {
  private maquina: MaquinaTuring;
  private estadoActual: string;

  constructor(maquina: MaquinaTuring) {
    this.maquina = maquina;
    this.estadoActual = maquina.estadoInicial;
  }

  public simulador(): void {
    let paso = 0;
    this.imprimirTraza(paso);

    while (!this.maquina.estadosFinales.has(this.estadoActual)) {
      const simboloActual = this.obtenerSimboloActual();
      const llaveTransicion = `${this.estadoActual},${simboloActual}`;
      const transicion = this.maquina.transiciones.get(llaveTransicion);

      if (!transicion) {
        console.log(
          `\nMaquina bloqueada. No hay transición para (${this.estadoActual}, '${simboloActual}').`,
        );
        break;
      }

      // primero escribimos en la cinta
      this.maquina.cinta[this.maquina.posicionCabezal] = transicion.escribe;

      // segundo debemos mover el cabezal
      if (transicion.mueve === "R") this.maquina.posicionCabezal++;
      else if (transicion.mueve === "L") this.maquina.posicionCabezal--;

      // debemos simular una cinta infinita mediante expansión dinámica
      if (this.maquina.posicionCabezal >= this.maquina.cinta.length) {
        this.maquina.cinta.push(this.maquina.simboloBlanco);
      } else if (this.maquina.posicionCabezal < 0) {
        this.maquina.cinta.unshift(this.maquina.simboloBlanco);
        this.maquina.posicionCabezal = 0; // ajuste por usar unshift
      }

      // el ultimo paso que necesitamos hacer es actualizar el estado
      this.estadoActual = transicion.estadoDestino;

      paso++;
      this.imprimirTraza(paso);
    }

    console.log(`\nSimulación finalizada en el estado: ${this.estadoActual}`);
  }

  private obtenerSimboloActual(): string {
    return this.maquina.cinta[this.maquina.posicionCabezal];
  }

  private imprimirTraza(paso: number): void {
    const cintaString = this.maquina.cinta.join("");
    const relleno = " ".repeat(this.maquina.posicionCabezal);
    console.log(`\nPaso: ${paso} | Estado: ${this.estadoActual}`);
    console.log(`Cinta:   ${cintaString}`);
    console.log(`Cabezal: ${relleno}^`);
  }
}
