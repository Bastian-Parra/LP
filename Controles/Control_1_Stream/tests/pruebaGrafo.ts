// Importamos los tipos de nodo que usaremos en la prueba.
import { TipoNodo } from "../src/types";

// Importamos el grafo que vamos a probar.
import { Grafo } from "../src/grafo";


// ======================================================
// PRUEBA DEL GRAFO
// Creamos una topologia simple para revisar que funcione.
// ======================================================

// Creamos un grafo vacio.
const grafo = new Grafo();


// ======================================================
// CREACION DE NODOS
// Creamos una fuente, un operador y un sumidero.
// ======================================================

// Creamos la fuente.
const fuente = {
    id: "f1",
    tipo: TipoNodo.FUENTE
};

// Creamos un operador.
const operador = {
    id: "op1",
    tipo: TipoNodo.OPERADOR,
    tiempoServicio: 5,
    replicas: 1
};

// Creamos el sumidero.
const sumidero = {
    id: "s1",
    tipo: TipoNodo.SUMIDERO
};


// ======================================================
// AGREGAR NODOS
// Guardamos los nodos dentro del grafo.
// ======================================================

// Agregamos la fuente.
grafo.agregarNodo(fuente);

// Agregamos el operador.
grafo.agregarNodo(operador);

// Agregamos el sumidero.
grafo.agregarNodo(sumidero);


// ======================================================
// CONEXIONES
// Creamos el camino que seguira la tupla.
// ======================================================

// La fuente envia sus tuplas al operador.
grafo.conectar("f1", "op1");

// El operador envia sus tuplas al sumidero.
grafo.conectar("op1", "s1");


// ======================================================
// VALIDACION
// Revisamos que exista una fuente y un sumidero.
// ======================================================

// Si algo esta mal esta funcion lanzara un error.
grafo.validarEstructura();


// ======================================================
// RESULTADOS
// Mostramos informacion para comprobar el grafo.
// ======================================================

// Mostramos todos los nodos.
console.log("Nodos:");
console.log(grafo.obtenerNodos());

// Mostramos hacia donde esta conectado f1.
console.log("Conexiones de f1:");
console.log(grafo.obtenerAdyacentes("f1"));

// Mostramos hacia donde esta conectado op1.
console.log("Conexiones de op1:");
console.log(grafo.obtenerAdyacentes("op1"));

console.log("Topologia valida.");