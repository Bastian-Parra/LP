### Setup Inicial

Como estamos usando Node.js, TypeScript y ANTLR4, el package.json de la raíz ya tiene todas las dependencias que utilizaremos.

Cuando clonen el repo, solo tienen que abrir la terminar en la raíz y correr: npm install

Necesitan tener instalado Java para que el generador de ANTLR funcione.

Para no estar tipeando comandos gigantes en la terminal, dejé estos atajos en el package.json

### Para generar el Parser/Lexer con ANTLR:
Cada vez que modifiquen un archivo .g2 (la gramatica), tienen que correr esto para que ANTLR lo actualice:

Para el Certamen: npm run build:antlr:turing
Parar el control 1: npm run build:antlr:stream

