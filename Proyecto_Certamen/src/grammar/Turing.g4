grammar Turing;

// Un archivo puede tener subrutinas y una o más maquinas

programa
    : (subrutina | maquina)+ EOF
    ;


maquina
    : nombreMaquina?
      alfabeto
      estados
      inicial
      final
      blanco
      usoSubrutina*
      transiciones
    ;


// Esto nos permite despues escribir por ejemplo:
// MAQUINA: Incrementador
nombreMaquina
    : MAQUINA DOS_PUNTOS ID
    ;


// ALFABETO: 0, 1, _
alfabeto
    : ALFABETO DOS_PUNTOS listaSimbolos
    ;


// Puede haber uno o mas simbolos separados por coma
listaSimbolos
    : simbolo (COMA simbolo)*
    ;


// ESTADOS: q0, q_add, q_rewind, qF
estados
    : ESTADOS DOS_PUNTOS listaEstados
    ;


// Lista de estados separados por coma
listaEstados
    : ID (COMA ID)*
    ;


// INICIAL: q0
inicial
    : INICIAL DOS_PUNTOS ID
    ;



// Ejemplo:
// FINAL: qF
// FINAL: qF, qError
final
    : FINAL DOS_PUNTOS listaEstados
    ;


// BLANCO: _
blanco
    : BLANCO DOS_PUNTOS simbolo
    ;


// Ejemplo:
//
// SUBRUTINA: escribir_unos(n: ENTERO) {
//     ESTADOS: e0, eF
//     ENTRADA: e0
//     SALIDA: eF
//
//     TRANSICIONES:
//     e0, _ -> eF, 1, R
// }
//
// La gramatica solamente reconoce la estructura.
// La expansion real de la subrutina corresponde
// a la parte semantica.
subrutina
    : SUBRUTINA DOS_PUNTOS
      ID
      PARENTESIS_IZQ
      ID DOS_PUNTOS ENTERO
      PARENTESIS_DER
      LLAVE_IZQ

      estados
      entradaSubrutina
      salidaSubrutina
      transiciones

      LLAVE_DER
    ;


// Estado por donde comienza una subrutinaa
entradaSubrutina
    : ENTRADA DOS_PUNTOS ID
    ;


// Una subrutina puede tener una o varias salidas
salidaSubrutina
    : SALIDA DOS_PUNTOS listaEstados
    ;


// Ejemplo:
//
// USA: escribir_unos(3) COMO llamada1
//
// El numero es el valor que se le pasa al parametro
// El nombre despues de COMO identifica esta llamada,
// lo que sirve para que los estados no choquen con otros.
usoSubrutina
    : USA DOS_PUNTOS
      ID
      PARENTESIS_IZQ NUMERO PARENTESIS_DER
      COMO ID
    ;


// Después de TRANSICIONES: pueden venir varias reglas.
//
// se deja * en vez de + porque una maquina podria armarse
// principalmente mediante una subrutina
transiciones
    : TRANSICIONES DOS_PUNTOS transicion*
    ;


// q0, 0 -> q0, 0, R
//
// estadoActual, simboloLeido
// ->
// estadoNuevo, simboloEscrito, movimiento
transicion
    : ID COMA simbolo
      FLECHA
      ID COMA simbolo COMA direccion
    ;


// Movimientos que usa el simulador:
// L = izquierda
// R = derecha
// N = no mover
direccion
    : IZQUIERDA
    | DERECHA
    | QUIETO
    ;


// Un simbolo puede ser un numero,
// el blanco "_" o un identificador.
simbolo
    : NUMERO
    | GUION_BAJO
    | ID
    ;
 

// Palabras principales de las maquinas.
MAQUINA
    : 'MAQUINA'
    ;

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


// Palabras usadas para las subrutinas.
SUBRUTINA
    : 'SUBRUTINA'
    ;

ENTRADA
    : 'ENTRADA'
    ;

SALIDA
    : 'SALIDA'
    ;

USA
    : 'USA'
    ;

COMO
    : 'COMO'
    ;

ENTERO
    : 'ENTERO'
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


// Simbolo blanco por convencion.
GUION_BAJO
    : '_'
    ;


// Caracteres usados por la sintaxis.
DOS_PUNTOS
    : ':'
    ;

COMA
    : ','
    ;

FLECHA
    : '->'
    ;

PARENTESIS_IZQ
    : '('
    ;

PARENTESIS_DER
    : ')'
    ;

LLAVE_IZQ
    : '{'
    ;

LLAVE_DER
    : '}'
    ;


// Reconoce numeros.
// Nos sirve para 0 y 1 y tambien para pasar
// parametros enteros a una subrutina.
NUMERO
    : [0-9]+
    ;


// Identificadores para estados, maquinas,
// subrutinas, parametros, etc.
//
// Ejemplos:
// q0
// q_add
// Incrementador
// escribir_unos
ID
    : [a-zA-Z] [a-zA-Z0-9_]*
    ;


// Ignoramos espacios y saltos de linea.
WS
    : [ \t\r\n]+ -> skip
    ;


// Comentarios de una linea.
COMENTARIO
    : '//' ~[\r\n]* -> skip
    ;