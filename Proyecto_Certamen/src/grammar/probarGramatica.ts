// Usamos fs para poder leer los archivos de ejemplo.
import * as fs from "fs";

// Estas clases sirven para pasar el texto primero
// por el lexer y después por el parser de ANTLR.
import { CharStream, CommonTokenStream } from "antlr4";

// Estos archivos se generan automaticamente desde Turing.g4.
import TuringLexer from "./generated/TuringLexer.ts";
import TuringParser from "./generated/TuringParser.ts";


// Si escribimos una ruta en la terminal, probamos ese archivo.
// Si no escribimos nada, usamos el incrementador de Bastian.
const rutaArchivo =
  process.argv[2] ?? "ejemplos/incrementador.txt";

console.log(`\nProbando archivo: ${rutaArchivo}`);


// Leemos todo el archivo como texto.
const contenido = fs.readFileSync(rutaArchivo, "utf8");


// ANTLR recibe primero el texto como caracteres.
const entrada = new CharStream(contenido);


// El lexer toma los caracteres y reconoce los tokens.
const lexer = new TuringLexer(entrada);


// Los tokens encontrados se los pasamos al parser.
const tokens = new CommonTokenStream(lexer);


// Creamos el parser que fue generado desde nuestro Turing.g4.
const parser = new TuringParser(tokens);


// Esta es la regla principal de nuestra gramatica.
// Si el archivo cumple la sintaxis, se genera el arbol.
const arbol = parser.programa();


console.log("\nArchivo analizado.");
console.log("Arbol sintactico generado:\n");


// Mostramos el arbol para revisar que ANTLR
// reconocio todo el archivo correctamente.
console.log(arbol.toStringTree(parser.ruleNames));