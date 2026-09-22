import * as fs from 'fs';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { StreamLexer } from './parser/StreamLexer';
import { StreamParser } from './parser/StreamParser';
import { ConstructorGrafo } from './ConstructorGrafo';
import { Simulador } from './simulador';

// leemos ela rchivo de texto topologia.sp
const rutaArchivo = 'src/topologia.sp';

console.log(`Iniciando lectura de ${rutaArchivo}...\n`);

const texto = fs.readFileSync(rutaArchivo, 'utf-8');

// pasamos el txt al lexer y al parser
const chars = CharStreams.fromString(texto);
const lexer = new StreamLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new StreamParser(tokens);

// aqui se procesa el texto y construimos el grafo
const arbol = parser.programa(); // inicia leyendo las reglas
const constructorGrafo = new ConstructorGrafo();
constructorGrafo.visit(arbol); 

const grafo = constructorGrafo.grafo;
const cantidadEventos = constructorGrafo.cantidadEventos;

// aqui validamos que la estructura esté correcta (Fuente y Sumidero existen)
grafo.validarEstructura();
console.log(`Topologia cargada correctamente, eventos a simular: ${cantidadEventos}\n`);

// simulamos
const simulador = new Simulador();
simulador.simular(grafo, cantidadEventos);