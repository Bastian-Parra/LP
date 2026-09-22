// Importamos los tipos de nodo para crear las pruebas.
import { TipoNodo } from "../src/types";

// Importamos Operador porque necesitamos sus datos extra.
import type { Operador } from "../src/types";

// Importamos nuestro grafo.
import { Grafo } from "../src/grafo";


// ======================================================
// PRUEBA 1
// No deben existir dos nodos con el mismo id.
// ======================================================

console.log("\n--- PRUEBA 1: NODO REPETIDO ---");

try {

    // Creamos un grafo nuevo.
    const grafo = new Grafo();

    // Agregamos una fuente llamada f1.
    grafo.agregarNodo({
        id: "f1",
        tipo: TipoNodo.FUENTE
    });

    // Intentamos usar nuevamente el mismo id.
    grafo.agregarNodo({
        id: "f1",
        tipo: TipoNodo.SUMIDERO
    });

} catch (error) {

    // Mostramos el error que esperabamos obtener.
    if (error instanceof Error) {
        console.log(error.message);
    }
}


// ======================================================
// PRUEBA 2
// CONECTAR solo puede usar nodos declarados.
// ======================================================

console.log("\n--- PRUEBA 2: NODO NO DECLARADO ---");

try {

    // Creamos otro grafo.
    const grafo = new Grafo();

    // Solo declaramos la fuente.
    grafo.agregarNodo({
        id: "f1",
        tipo: TipoNodo.FUENTE
    });

    // op1 no existe, por lo tanto debe fallar.
    grafo.conectar("f1", "op1");

} catch (error) {

    // Mostramos el error esperado.
    if (error instanceof Error) {
        console.log(error.message);
    }
}


// ======================================================
// PRUEBA 3
// La topologia necesita al menos un sumidero.
// ======================================================

console.log("\n--- PRUEBA 3: FALTA SUMIDERO ---");

try {

    // Creamos otro grafo.
    const grafo = new Grafo();

    // Agregamos una fuente.
    grafo.agregarNodo({
        id: "f1",
        tipo: TipoNodo.FUENTE
    });

    // Creamos el operador con sus datos.
    const operador: Operador = {
        id: "op1",
        tipo: TipoNodo.OPERADOR,
        tiempoServicio: 5,
        replicas: 1
    };

    // Agregamos el operador al grafo.
    grafo.agregarNodo(operador);

    // Validamos una estructura que no tiene sumidero.
    grafo.validarEstructura();

} catch (error) {

    // Mostramos el error esperado.
    if (error instanceof Error) {
        console.log(error.message);
    }
}

// ======================================================
// PRUEBA 4
// El nodo origen de CONECTAR tambien debe existir.
// ======================================================

console.log("\n--- PRUEBA 4: ORIGEN NO DECLARADO ---");

try {

    // Creamos un grafo nuevo.
    const grafo = new Grafo();

    // Solo declaramos el sumidero.
    grafo.agregarNodo({
        id: "s1",
        tipo: TipoNodo.SUMIDERO
    });

    // f1 no existe, por lo tanto debe fallar.
    grafo.conectar("f1", "s1");

} catch (error) {

    // Mostramos el error esperado.
    if (error instanceof Error) {
        console.log(error.message);
    }
}


// ======================================================
// PRUEBA 5
// La topologia necesita al menos una fuente.
// ======================================================

console.log("\n--- PRUEBA 5: FALTA FUENTE ---");

try {

    // Creamos otro grafo.
    const grafo = new Grafo();

    // Solo agregamos un sumidero.
    grafo.agregarNodo({
        id: "s1",
        tipo: TipoNodo.SUMIDERO
    });

    // Validamos una estructura que no tiene fuente.
    grafo.validarEstructura();

} catch (error) {

    // Mostramos el error esperado.
    if (error instanceof Error) {
        console.log(error.message);
    }
}