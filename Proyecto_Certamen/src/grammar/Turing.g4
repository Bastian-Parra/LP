grammar Turing;



// REGLAS DEL PARSER
// Acá se define cómo tiene que venir escrito nuestro lenguaje



// Esta es la regla principal
programa
    : alfabeto
      estados
      inicial
      final
      blanco
      transiciones
      EOF
    ;



// ALFABETO: 0, 1, _
alfabeto
    : ALFABETO DOS_PUNTOS listaSimbolos
    ;


// Permite tener uno o más símbolos separados por coma.
listaSimbolos
    : simbolo (COMA simbolo)*
    ;



// ESTADOS: q0, q_add, q_rewind, qF
estados
    : ESTADOS DOS_PUNTOS listaEstados
    ;


// Los estados van separados por comaa
listaEstados
    : ID (COMA ID)*
    ;


// INICIAL: q0
inicial
    : INICIAL DOS_PUNTOS ID
    ;


// FINAL: qF
final
    : FINAL DOS_PUNTOS ID
    ;


// BLANCO: _
blanco
    : BLANCO DOS_PUNTOS simbolo
    ;


// Después de trasncisiones pueden venir una o más transiciones.
transiciones
    : TRANSICIONES DOS_PUNTOS transicion+
    ;




// q0, 0 -> 0, R, q0
//
// estadoActual, simboloLeido
// ->
// simboloEscrito, movimiento, estadoDestino
transicion
    : ID COMA simbolo
      FLECHA
      simbolo COMA direccion COMA ID
    ;


// Los movimientos que usa nuestro simulador son:
// L = izquierda
// R = derecha
// N = no mover
direccion
    : IZQUIERDA
    | DERECHA
    | QUIETO
    ;



// un número, el blanco "_" o un identificador.
//
simbolo
    : NUMERO
    | GUION_BAJO
    | ID
    ;



// REGLAS DEL LEXER
// Acá se reconocen las palabras y símbolos básicos del DSL



// Palabras reservadas principales del lenguaje.
ALFABETO
    : 'ALFABETO'
    ;

ESTADOS
    : 'ESTADOS'
    ;

INICIAL
    : 'INICIAL'
    ;

FINAL
    : 'FINAL'
    ;

BLANCO
    : 'BLANCO'
    ;

TRANSICIONES
    : 'TRANSICIONES'
    ;


// Movimientos del cabezal.
IZQUIERDA
    : 'L'
    ;

DERECHA
    : 'R'
    ;

QUIETO
    : 'N'
    ;


// Símbolo blanco que estamos usando por convención.
GUION_BAJO
    : '_'
    ;


// Símbolos necesarios para escribir la sintaxis.
DOS_PUNTOS
    : ':'
    ;

COMA
    : ','
    ;

FLECHA
    : '->'
    ;


// Sirve principalmente para reconocer símbolos numéricos
// como 0 y 1 dentro del alfabeto y las transiciones.
//
// También nos va a servir después para los parámetros
// enteros de las subrutinas.
NUMERO
    : [0-9]+
    ;


// Reconoce nombres de estados.
// q0
// q_add
// q_rewind
// qF
ID
    : [a-zA-Z] [a-zA-Z0-9_]*
    ;


// Ignoramos espacios, tabulaciones y saltos de línea
// Asii la gramtica no depende de cómo esté formateado
// el archivo de texto.
WS
    : [ \t\r\n]+ -> skip
    ;


// Dejamos soporte para comentarios de una línea por si después necesitamos explicar cosas dentro de los ejemplos.

COMENTARIO
    : '//' ~[\r\n]* -> skip
    ;