// zona de pruebas:

import { TipoNodo, Operador } from "./types";
import { Grafo } from "./grafo"
import { Simulador } from "./simulador";

console.log("iniciando simulador de topologías stream processing...");

// instancia del grafo real
const grafo = new Grafo()

// se agregan los nodos usando la validación de la tabla de simbolos:
grafo.agregarNodo({ id: "q1", tipo: TipoNodo.FUENTE });
grafo.agregarNodo({ id: "op1", tipo: TipoNodo.OPERADOR, tiempoServicio: 5, replicas: 2 } as Operador);
grafo.agregarNodo({ id: "s1", tipo: TipoNodo.SUMIDERO });

// conectamos los nodos
grafo.conectar("q1", "op1")
grafo.conectar("op1", "s1")

// debemos validar que la estructura sea correcta (que tenga fuente y sumidero)
grafo.validarEstructura()

const simulacion = new Simulador();
simulacion.simular(grafo, 5); // simulacion de 3 eventos de prueba
