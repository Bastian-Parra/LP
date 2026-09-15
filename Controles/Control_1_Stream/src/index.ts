// zona de pruebas:

import { TipoNodo, Nodo, GrafoTopologia } from "./types";
import { Simulador } from "./simulador";

console.log("iniciando simulador de topologías stream processing...");

// =========================================================
// mock grafo (temporal)
// creé este objeto para simular lo que el Parser y el AST deberan entregar, como lo mencione en wsp
// este código estaria pendiente a eliminación y reemplazarlo por el grafo real del .sp

const mockGrafo: GrafoTopologia = {
  nodos: new Map<string, Nodo>([
    ["q1", { id: "q1", tipo: TipoNodo.FUENTE }],
    [
      "op1",
      { id: "op1", tipo: TipoNodo.OPERADOR, tiempoServicio: 5, replicas: 2 },
    ],
    ["s1", { id: "s1", tipo: TipoNodo.SUMIDERO }],
  ]),
  adyacentes: new Map<string, string[]>([
    ["q1", ["op1"]],
    ["op1", ["s1"]],
  ]),
  obtenerFuentes: () => [{ id: "q1", tipo: TipoNodo.FUENTE }],
};

const simulacion = new Simulador();
simulacion.simular(mockGrafo, 3); // simulacion de 3 eventos de prueba
