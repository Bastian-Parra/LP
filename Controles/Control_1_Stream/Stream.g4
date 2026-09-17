grammar Stream;

// regla principal del programa
// se espera al menos una instruccion y se procesa hasta el final del archivo.
programa
    : instruccion+ EOF
    ;

// una instruccion puede corresponder a cualquiera de las operaciones
// disponibles dentro del lenguaje de topologias.
instruccion
    : declaracionFuente
    | declaracionOperador
    | declaracionSumidero
    | conexion
    | simulacion
    ;

// Declaracion de un nodo que funciona como fuente de tuplas.
declaracionFuente
    : FUENTE ID
    ;

// Declaracion de un operador junto con su tiempo de servicio.
// La cantidad de replicas es opcional, por lo que puede aparecer o no.
declaracionOperador
    : OPERADOR ID TIEMPO_SERVICIO NUMERO (REPLICAS NUMERO)?
    ;

// Declaracion de un nodo sumidero, que representa el destino final.
declaracionSumidero
    : SUMIDERO ID
    ;

// Permite conectar un nodo de origen con un nodo de destino.
conexion
    : CONECTAR ID A ID
    ;

// Indica la cantidad de eventos que se deben simular.
simulacion
    : SIMULAR NUMERO
    ;

// Palabras reservadas utilizadas por el lenguaje.
FUENTE
    : 'FUENTE'
    ;

OPERADOR
    : 'OPERADOR'
    ;

SUMIDERO
    : 'SUMIDERO'
    ;

CONECTAR
    : 'CONECTAR'
    ;

SIMULAR
    : 'SIMULAR'
    ;

TIEMPO_SERVICIO
    : 'TIEMPO_SERVICIO'
    ;

REPLICAS
    : 'REPLICAS'
    ;

A
    : 'A'
    ;

// Identificador de los nodos.
// Debe comenzar con una letra y luego puede contener letras, numeros o "_".
ID
    : [a-zA-Z] [a-zA-Z0-9_]*
    ;

// Valores numericos utilizados para tiempos, replicas y eventos.
NUMERO
    : [0-9]+
    ;

// Los espacios, tabulaciones y saltos de linea no son necesarios
// para el analisis, por lo que se ignoran.
WS
    : [ \t\r\n]+ -> skip
    ;