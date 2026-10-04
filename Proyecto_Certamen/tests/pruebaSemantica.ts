import { TablaSimbolos } from "../src/semantica/TablaSimbolos";
import { ConstructorMaquina } from "../src/semantica/ConstructorMaquina";

import {
    ExpansorSubrutinas,
    type SubrutinaExpandida
} from "../src/semantica/ExpansorSubrutinas";


let pruebasFallidas = 0;


// ======================================================
// AYUDAS PARA LAS PRUEBAS
// ======================================================

function afirmar(
    condicion: boolean,
    mensaje: string
): void {

    if (!condicion) {
        throw new Error(mensaje);
    }
}


function prueba(
    nombre: string,
    accion: () => void
): void {

    try {

        accion();

        console.log(`OK  - ${nombre}`);

    } catch (error) {

        pruebasFallidas++;

        console.error(`FAIL - ${nombre}`);
        console.error(String(error));
    }
}


function pruebaError(
    nombre: string,
    textoEsperado: string,
    accion: () => void
): void {

    try {

        accion();

        pruebasFallidas++;

        console.error(
            `FAIL - ${nombre}: se esperaba un error.`
        );

    } catch (error) {

        const mensaje = String(error);

        if (
            !mensaje.includes(textoEsperado)
        ) {

            pruebasFallidas++;

            console.error(
                `FAIL - ${nombre}: error distinto al esperado.`
            );

            console.error(mensaje);

            return;
        }

        console.log(
            `OK  - ${nombre}`
        );
    }
}


// ======================================================
// CONSTRUCTOR BASE PARA LAS PRUEBAS
// ======================================================

function crearMaquinaBase(): ConstructorMaquina {

    const constructor =
        new ConstructorMaquina();

    constructor.agregarSimbolo("0");
    constructor.agregarSimbolo("1");
    constructor.agregarSimbolo("_");

    constructor.agregarEstado("q0");
    constructor.agregarEstado("q1");
    constructor.agregarEstado("qF");

    constructor.definirEstadoInicial("q0");

    constructor.agregarEstadoFinal("qF");

    return constructor;
}


// ======================================================
// TABLA DE SIMBOLOS
// ======================================================

console.log(
    "\n=== TABLA DE SIMBOLOS ==="
);


prueba(
    "registrar estados y simbolos",
    () => {

        const tabla =
            new TablaSimbolos();

        tabla.registrarEstado("q0");
        tabla.registrarSimbolo("0");

        afirmar(
            tabla.existeEstado("q0"),
            "q0 deberia existir."
        );

        afirmar(
            tabla.existeSimbolo("0"),
            "0 deberia existir."
        );
    }
);


pruebaError(
    "estado duplicado",
    "ya fue declarado",
    () => {

        const tabla =
            new TablaSimbolos();

        tabla.registrarEstado("q0");

        tabla.registrarEstado("q0");
    }
);


pruebaError(
    "simbolo duplicado",
    "ya fue declarado",
    () => {

        const tabla =
            new TablaSimbolos();

        tabla.registrarSimbolo("0");

        tabla.registrarSimbolo("0");
    }
);


pruebaError(
    "simbolo con mas de un caracter",
    "no es un simbolo valido",
    () => {

        const tabla =
            new TablaSimbolos();

        tabla.registrarSimbolo("01");
    }
);


// ======================================================
// MAQUINA VALIDA
// ======================================================

console.log(
    "\n=== MAQUINA VALIDA ==="
);


prueba(
    "construir maquina correcta",
    () => {

        const constructor =
            crearMaquinaBase();

        constructor.agregarTransicion(
            "q0",
            "0",
            "q1",
            "1",
            "R"
        );

        constructor.agregarTransicion(
            "q1",
            "_",
            "qF",
            "_",
            "N"
        );

        const maquina =
            constructor.construir(
                "0_"
            );

        afirmar(
            maquina.estadoInicial === "q0",
            "Estado inicial incorrecto."
        );

        afirmar(
            maquina.estadosFinales.has("qF"),
            "qF deberia ser final."
        );

        afirmar(
            maquina.transiciones.has("q0,0"),
            "Deberia existir q0,0."
        );

        afirmar(
            maquina.transiciones.size === 2,
            "Deberian existir dos transiciones."
        );
    }
);


// ======================================================
// DETERMINISMO
// ======================================================

console.log(
    "\n=== DETERMINISMO ==="
);


pruebaError(
    "dos transiciones con mismo estado y simbolo",
    "ya existe una transicion",
    () => {

        const constructor =
            crearMaquinaBase();

        constructor.agregarTransicion(
            "q0",
            "0",
            "q1",
            "1",
            "R"
        );

        constructor.agregarTransicion(
            "q0",
            "0",
            "qF",
            "0",
            "L"
        );

        constructor.construir(
            "0_"
        );
    }
);


// ======================================================
// ESTADOS NO DECLARADOS
// ======================================================

console.log(
    "\n=== ESTADOS ==="
);


pruebaError(
    "estado origen no declarado",
    "q99",
    () => {

        const constructor =
            crearMaquinaBase();

        constructor.agregarTransicion(
            "q99",
            "0",
            "qF",
            "1",
            "R"
        );

        constructor.construir(
            "0_"
        );
    }
);


pruebaError(
    "estado destino no declarado",
    "q99",
    () => {

        const constructor =
            crearMaquinaBase();

        constructor.agregarTransicion(
            "q0",
            "0",
            "q99",
            "1",
            "R"
        );

        constructor.construir(
            "0_"
        );
    }
);


pruebaError(
    "estado inicial no declarado",
    "estado inicial",
    () => {

        const constructor =
            new ConstructorMaquina();

        constructor.agregarSimbolo("_");

        constructor.agregarEstado("q0");
        constructor.agregarEstado("qF");

        constructor.definirEstadoInicial(
            "q99"
        );

        constructor.agregarEstadoFinal(
            "qF"
        );

        constructor.construir("_");
    }
);


pruebaError(
    "estado final no declarado",
    "estado final",
    () => {

        const constructor =
            new ConstructorMaquina();

        constructor.agregarSimbolo("_");

        constructor.agregarEstado("q0");

        constructor.definirEstadoInicial(
            "q0"
        );

        constructor.agregarEstadoFinal(
            "q99"
        );

        constructor.construir("_");
    }
);


pruebaError(
    "maquina sin estado inicial",
    "no se definio un estado inicial",
    () => {

        const constructor =
            new ConstructorMaquina();

        constructor.agregarSimbolo("_");

        constructor.agregarEstado("qF");

        constructor.agregarEstadoFinal(
            "qF"
        );

        constructor.construir("_");
    }
);


pruebaError(
    "maquina sin estados finales",
    "al menos un estado final",
    () => {

        const constructor =
            new ConstructorMaquina();

        constructor.agregarSimbolo("_");

        constructor.agregarEstado("q0");

        constructor.definirEstadoInicial(
            "q0"
        );

        constructor.construir("_");
    }
);


// ======================================================
// SIMBOLOS
// ======================================================

console.log(
    "\n=== SIMBOLOS ==="
);


pruebaError(
    "simbolo leido no pertenece al alfabeto",
    "5",
    () => {

        const constructor =
            crearMaquinaBase();

        constructor.agregarTransicion(
            "q0",
            "5",
            "qF",
            "1",
            "R"
        );

        constructor.construir(
            "0_"
        );
    }
);


pruebaError(
    "simbolo escrito no pertenece al alfabeto",
    "5",
    () => {

        const constructor =
            crearMaquinaBase();

        constructor.agregarTransicion(
            "q0",
            "0",
            "qF",
            "5",
            "R"
        );

        constructor.construir(
            "0_"
        );
    }
);


pruebaError(
    "alfabeto sin simbolo blanco",
    "simbolo blanco",
    () => {

        const constructor =
            new ConstructorMaquina();

        constructor.agregarSimbolo("0");
        constructor.agregarSimbolo("1");

        constructor.agregarEstado("q0");
        constructor.agregarEstado("qF");

        constructor.definirEstadoInicial(
            "q0"
        );

        constructor.agregarEstadoFinal(
            "qF"
        );

        constructor.construir("0");
    }
);


pruebaError(
    "cinta contiene simbolo no declarado",
    "de la cinta",
    () => {

        const constructor =
            crearMaquinaBase();

        constructor.construir(
            "02_"
        );
    }
);


// ======================================================
// CABEZAL
// ======================================================

console.log(
    "\n=== CABEZAL ==="
);


pruebaError(
    "cabezal comienza fuera de la cinta",
    "posicion inicial del cabezal",
    () => {

        const constructor =
            crearMaquinaBase();

        constructor.construir(
            "0_",
            10
        );
    }
);


// ======================================================
// SUBRUTINAS
// ======================================================

console.log(
    "\n=== SUBRUTINAS ==="
);


// Creamos una subrutina parametrizada ficticia.
// Genera n estados para escribir unos.
// No depende de ANTLR.
function crearEscribirUnos(
    cantidad: number
): SubrutinaExpandida {

    const estados: string[] = [];

    for (
        let i = 0;
        i <= cantidad;
        i++
    ) {
        estados.push(`e${i}`);
    }

    const transiciones = [];

    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        transiciones.push({
            estadoOrigen: `e${i}`,
            simboloLeido: "_",
            estadoDestino: `e${i + 1}`,
            simboloEscrito: "1",
            mueve: "R" as const
        });
    }

    return {
        nombre: "escribir_unos",
        estados,
        estadoEntrada: "e0",
        estadosSalida: [
            `e${cantidad}`
        ],
        transiciones
    };
}


prueba(
    "insertar subrutina parametrizada",
    () => {

        const constructor =
            new ConstructorMaquina();

        constructor.agregarSimbolo("1");
        constructor.agregarSimbolo("_");

        const expansor =
            new ExpansorSubrutinas();

        const subrutina =
            crearEscribirUnos(3);

        const resultado =
            expansor.insertar(
                constructor,
                subrutina,
                "llamada1"
            );

        constructor.definirEstadoInicial(
            resultado.estadoEntrada
        );

        constructor.agregarEstadoFinal(
            resultado.estadosSalida[0]
        );

        const maquina =
            constructor.construir(
                "____"
            );

        afirmar(
            maquina.transiciones.size === 3,
            "La subrutina deberia generar tres transiciones."
        );

        afirmar(
            maquina.transiciones.has(
                "llamada1__e0,_"
            ),
            "No se inserto la primera transicion."
        );

        const primera =
            maquina.transiciones.get(
                "llamada1__e0,_"
            );

        afirmar(
            primera?.estadoDestino ===
                "llamada1__e1",
            "Los estados de la subrutina no fueron renombrados correctamente."
        );
    }
);


// ======================================================
// RESULTADO
// ======================================================

console.log(
    "\n=============================="
);

if (pruebasFallidas === 0) {

    console.log(
        "TODAS LAS PRUEBAS PASARON."
    );

} else {

    console.error(
        `${pruebasFallidas} prueba(s) fallaron.`
    );

    process.exitCode = 1;
}