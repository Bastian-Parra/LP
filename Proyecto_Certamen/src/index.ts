import * as fs from "fs";
import { TuringEngine } from "./simulador/TuringEngine.ts";
import { MaquinaTuring, Transicion } from "./types/types.ts";

function main() {
  // leemos los argumentos de la consola
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error("Uso incorrecto. Ejecuta:");
    console.error("npm start <archivo.txt> <cinta_inicial>");
    process.exit(1);
  }

  const rutaArchivo = args[0];
  // convertir el string "1011_" en un arreglo ['1', '0', '1', '1', '_']
  const cintaInicial = args[1].split("");

  console.log(`[INFO] Cargando topología desde: ${rutaArchivo}`);
  console.log(`[INFO] Cinta inicial: ${cintaInicial.join("")}\n`);

  /* =========================================================
       parte por completar
       ========================================================= */

  /* =========================================================
       motor de simulacion
       ========================================================= */
  console.log("Usando máquina de prueba (Mock) hasta integrar ANTLR...\n");

  // mock temporal: Incrementador binario -> hay que reemplazarlo
  const transiciones = new Map<string, Transicion>();
  transiciones.set("q0,0", { escribe: "0", mueve: "R", estadoDestino: "q0" });
  transiciones.set("q0,1", { escribe: "1", mueve: "R", estadoDestino: "q0" });
  transiciones.set("q0,_", {
    escribe: "_",
    mueve: "L",
    estadoDestino: "q_add",
  });
  transiciones.set("q_add,1", {
    escribe: "0",
    mueve: "L",
    estadoDestino: "q_add",
  });
  transiciones.set("q_add,0", {
    escribe: "1",
    mueve: "L",
    estadoDestino: "q_rewind",
  });
  transiciones.set("q_add,_", {
    escribe: "1",
    mueve: "L",
    estadoDestino: "q_rewind",
  });
  transiciones.set("q_rewind,0", {
    escribe: "0",
    mueve: "L",
    estadoDestino: "q_rewind",
  });
  transiciones.set("q_rewind,1", {
    escribe: "1",
    mueve: "L",
    estadoDestino: "q_rewind",
  });
  transiciones.set("q_rewind,_", {
    escribe: "_",
    mueve: "R",
    estadoDestino: "qF",
  });

  const maquinaMock: MaquinaTuring = {
    estadoInicial: "q0",
    estadosFinales: new Set(["qF"]),
    transiciones: transiciones,
    cinta: cintaInicial,
    posicionCabezal: 0,
    simboloBlanco: "_",
  };

  // ejecucion final
  const motor = new TuringEngine(maquinaMock);
  motor.simulador();
}

main();
