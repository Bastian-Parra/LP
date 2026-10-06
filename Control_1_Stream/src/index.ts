import * as fs from 'fs';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { StreamLexer } from './parser/StreamLexer';
import { StreamParser } from './parser/StreamParser';
import { ConstructorGrafo } from './ConstructorGrafo';
import { SimuladorRed } from './simulador';

const rutaArchivo = 'topologia.sp';
console.log(`Iniciando lectura de ${rutaArchivo}...\n`);

const texto = fs.readFileSync(rutaArchivo, 'utf-8');

const chars = CharStreams.fromString(texto);
const lexer = new StreamLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new StreamParser(tokens);

const arbol = parser.programa(); 
const constructorGrafo = new ConstructorGrafo();
constructorGrafo.visit(arbol); 

const grafo = constructorGrafo.grafo;
const cantidadEventos = constructorGrafo.cantidadEventos;

grafo.validarEstructura();
console.log(`Topologia cargada correctamente, eventos a simular por fuente: ${cantidadEventos}\n`);

// Usamos la clase SimuladorRed y su método ejecutar
const simulador = new SimuladorRed();
simulador.ejecutar(grafo, cantidadEventos);