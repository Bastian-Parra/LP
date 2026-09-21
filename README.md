# Control 1: Intérprete para Topologías de Stream Processing

**Asignatura:** Lenguajes de Programación (ICI425).
**Profesor:** Alonso Inostrosa Psijas.
**Integrantes:**
- Bastian Parra
- Luca Carabelli
- Nicolás Flores

---

## 1. Instrucciones de Ejecución
El proyecto está desarrollado en TypeScript utilizando Node.js y ANTLR4 para el análisis léxico y sintáctico.

## Prerequisitos:
- Node.js instalado.
Dependencias instaladas (ejecutar `npm install` en la raíz del proyecto).

### Uso del Makefile
Se ha incluido un archivo `Makefile` para facilitar la compilación y ejecución del proyecto.
Desde la terminal en la raíz del proyecto, utilice los siguientes comandos:

1. **Compilar la gramática (ANTLR)**
```bash make compile```

## 2. Definición del Lenguaje (Análisis Léxico y Sintáctico)
Para el reconocimiento de instrucciones, se utilizó ANTLR4, definiendo las siguientes ER y GLC:

## Expresiones Regulares (Lexer):
Se definieron tokens para las palabras reservadas y tipos de datos abstractos:

- FUENTE: "FUENTE"
- OPERADOR: "OPERADOR"
- SUMIDERO: "SUMIDERO"
- CONECTAR: "CONECTAR"
- SIMULAR: "SIMULAR"
- TIEMPO_SERVICIO: "TIEMPO_SERVICIO"
- REPLICAS: "REPLICAS"
- A: "A"
- ID: [a-zA-Z_][a-zA-Z0-9_]* (alfanuméricos)
- NUMERO: [0-9]+ (enteros positivos)
- WS: [ \t\r\n\]+ -> skip (ignorar espacios y saltos de línea)

## Gramática libre de Contexto (Parser):

La estructura sintáctica del lenguaje DSL se define mediante las siguientes reglas de producción:

programa : instruccion+ EOF ;

instruccion : declaracionFuente 
            | declaracionOperador 
            | declaracionSumidero 
            | conexion 
            | simulacion ;

declaracionFuente : 'FUENTE' ID ;

declaracionOperador : 'OPERADOR' ID 'TIEMPO_SERVICIO' NUMERO ('REPLICAS' NUMERO)? ;

declaracionSumidero : 'SUMIDERO' ID ;

conexion : 'CONECTAR' ID 'A' ID ;

simulacion : 'SIMULAR' NUMERO ;

## 3. Justificación de Diseño

El enunciado pedía resolver qué pasa cuando un operador replicado le manda datos a otro operador que también está replicado.

**Nuestra decisión:**
Decidimos usar un "contador único por conexión" (guardado en el mapa `contadoresRoundRobin` de nuestro Simulador).

**¿Por qué lo hicimos así y cómo funciona?**
En vez de que cada réplica del primer operador se ponga a contar por su cuenta a quién le toca enviarle el dato (esto desordenaría los turnos), centralizamos la cuenta en la conexión general (por ej. de `op1 -> op2`).

Entonces, no importa cuál de las réplicas del primer operador termine de procesar una tupla; cuando la vaya a mandar al siguiente operador, el simulador mira el contador global de esa conexión y se la entrega a la réplica de destino que sigue en la fila.

Esto hace que la lógica sea mucho más simple y nos asegura que el reparto circular (round-robin) sea 100% parejo y no se salte a ninguna réplica, sin importar el orden en que lleguen los datos.


## 4. Estructuras de Datos Principales

- Tabla de Símbolos / Grafo: Implementado en la clase Grafo. Valid la existencia de nodos para evitar duplicidad y asegura que las conexiones (CONECTAR) hagan referencia estricta a identificadores previamente declarados.

- AST / Visitor: La clase ConstructorGrafo actúa como puente, recorriendo el Árbol de Sintaxis Abstracta generado por ANTLR y poblando la estructura del grafo en memoria.