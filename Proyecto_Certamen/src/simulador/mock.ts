import { TuringEngine } from "./TuringEngine.ts";
import { MaquinaTuring, Transicion } from "../types/types.ts";

// mock: esta maquina invierte bits (si ve un 0 le pone un 1 y viceversa) y se detiene al leer el blanco (_)
console.log("Iniciando simulación...");

const transicionesMock = new Map<string, Transicion>();

transicionesMock.set("q0,0", { escribe: "1", mueve: "R", estadoDestino: "q0" });
transicionesMock.set("q0,1", { escribe: "0", mueve: "R", estadoDestino: "q0" });
transicionesMock.set("q0,_", { escribe: "_", mueve: "N", estadoDestino: "qF" });

const maquinaMock: MaquinaTuring = {
  estadoInicial: "q0",
  estadosFinales: new Set(["qF"]),
  transiciones: transicionesMock,
  cinta: ["1", "0", "1", "1", "_"],
  posicionCabezal: 0,
  simboloBlanco: "_",
};

const motor = new TuringEngine(maquinaMock);
motor.simulador();
