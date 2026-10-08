# Simulador de Máquina de Turing - Certamen 1

**Asignatura:** Lenguajes de Programación II - ICI425/INF425
**Integrantes:** 
- Luca Carabelli
- Nicolás Flores
- Bastian Parra


## 1. Descripción del Trabajo
Este es el repositorio de nuestro intérprete para Máquinas de Turing, desarrollado en TypeScript. El objetivo principal de este certamen fue diseñar un lenguaje (DSL) propio usando ANTLR4 para parsear el código, pasarlo a un Árbol Sintáctico (AST), y luego simular paso a paso el comportamiento de la máquina leyendo y escribiendo sobre una cinta.

## 2. ¿Cómo funciona nuestro intérprete?

El programa está dividido en varias fases que se ejecutan en cadena:

1. Lexer y Parser (ANTLR4): Lee nuestro archivo de texto plano y verifica que cumpla con la GLC que diseñamos.

2. Análisis Semántico (Visitor): Usamos el patrón Visitor para recorrer el árbol generado. Aquí validamos que los estados declarados existan, que los símbolos pertenezcan al alfabeto, y aseguramos el determinismo de la máquina (que no haya reglas ambiguas).

3. Expansor de Subrutinas: Si la máquina principal invoca una subrutina, nuestro código la "inyecta" antes de empezar la simulación. Para que no choquen los estados de la subrutina con los de la máquina, les ponemos un prefijo automático (por ejemplo, llamada1__e0).

4. El Motor (Simulador): Con la máquina validada en memoria, el motor toma la cinta inicial y empieza a iterar moviendo el cabezal hasta llegar a un estado final.

## 3. Instalación y Compilación

- Requisitos: Node.js (v18+) y Java (solo si se necesita regenerar ANTLR).
- Para cumplir con la pauta de tener comandos automatizados (tipo Makefile), dejamos los scripts configurados en el package.json.
- Para descargar dependencias y compilar el código TypeScript a JavaScript, ejecuta:

```bash
npm install
npm run build
```

Nota: Los archivos de ANTLR ya los dejamos pre-generados en src/grammar/generated, por lo que el comando build solo llama a tsc de forma segura y genera la carpeta dist/

## 4. Cómo probar el simulador

Para correr la simulación, hay que pasarle la ruta del archivo y cómo queremos que empiece la cinta.

```bash
npm start <ruta_archivo.txt> <cinta_inicial>
```

Máquinas de ejemplo incluidas:

- Para probar el incrementador binario (le suma 1 a un binario y maneja acarreo):
```bash
npm start ejemplos/incrementador.txt "1011_"
```

- Para probar la subrutina (empieza con la cinta en blanco y escribe unos):
```bash
npm start ejemplos/subrutina.txt "____"
```

Extra: Si solo se quiere probar que un archivo cumpla la sintaxis sin correr el motor, se puede usar npm run test:grammar -- ejemplos/incrementador.txt para ver el árbol.

## 5. Sintáxis de nuestro DSL
```bash
MAQUINA: MiMaquina
ALFABETO: 0, 1, _
ESTADOS: q0, q1, qF
INICIAL: q0
FINAL: qF
BLANCO: _

TRANSICIONES:
q0, 1 -> q0, 0, R
q0, _ -> qF, _, N
```
### Llamada a Subrutinas
Si queremos usar subrutinas, se declaran arriba y se llaman con USA: y COMO:

```
SUBRUTINA: escribir_unos(n: ENTERO) {
  ESTADOS: e0, eF
  ENTRADA: e0
  SALIDA: eF
  TRANSICIONES:
  TRANSICIONES:
  e0, _ -> eF, 1, R
}

MAQUINA: Principal
// ... configuracion base ...
USA: escribir_unos(3) COMO llamada1

TRANSICIONES:
q0, _ -> llamada1__e0, _, N
llamada1__eF, _ -> qF, _, N
```

## 6. Supuestos y Decisiones de Diseño

- Decidimos modelar la cinta como un arreglo dinámico. Si el cabezal se sale del límite original del arreglo hacia cualquier lado, el motor automáticamente empuja el símbolo blanco definido por el usuario.
- El programa detiene la ejecución y lanza una excepción semántica antes de simular si detecta dos transiciones con el mismo origen y símbolo leído.
- La inyección de subrutinas ocurre en tiempo de parseo. No manejamos un "stack" de ejecución en tiempo real, sino que copiamos las transiciones, renombramos los estados lógicamente y aplanamos todo en una sola tabla de transiciones