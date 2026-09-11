### Integrantes:
- Nicolas Flores
- Luca Carabelli
- Bastian Parra

### Setup Inicial

Como estamos usando Node.js, TypeScript y ANTLR4, el package.json de la raíz ya tiene todas las dependencias que utilizaremos.

Cuando clonen el repo, solo tienen que abrir la terminar en la raíz y correr: npm install

Necesitan tener instalado Java para que el generador de ANTLR funcione.

Para no estar tipeando comandos gigantes en la terminal, dejé estos atajos en el package.json

### Para generar el Parser/Lexer con ANTLR:
Cada vez que modifiquen un archivo .g2 (la gramatica), tienen que correr esto para que ANTLR lo actualice:

- Para el Certamen: npm run build:antlr:turing
- Para el control 1: npm run build:antlr:stream

ANTLR está configurado para generar el patrón Visitor automáticamente, así que usaremos eso para recorrer los árboles.

### Para probar el código:

- Para la Máquina de Turing: npm run start:turing
- Para el Control de Topologias: npm run start:stream

### Como trabajaremos:

Para asegurarnos de que todos entendamos el código del otro:

1. No pusheen a main directo
2. Creen una rama para su tarea: git checkout -b funcionalidad/mi-tarea
3. Cuando terminen, abren un Pull Request (PR)
4. Alguien más del equipo tiene que revisar ese PR, entenderlo y aprobarlo. Así todos estudiamos el código de todos.

