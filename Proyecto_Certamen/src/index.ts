import * as fs from "fs";
import { CharStream, CommonTokenStream } from "antlr4";
import TuringLexer from "./grammar/generated/TuringLexer.ts";
import TuringParser from "./grammar/generated/TuringParser.ts";
import { MaquinaVisitor } from "./visitor/VisitorEngine.ts";
import { TuringEngine } from "./simulador/TuringEngine.ts";

function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error("Uso incorrecto. Ejecuta:");
    console.error("npm start <archivo.txt> <cinta_inicial>");
    process.exit(1);
  }

  const rutaArchivo = args[0];
  const cintaInicial = args[1].split("");

  console.log(`[INFO] Cargando topología desde: ${rutaArchivo}`);
  console.log(`[INFO] Cinta inicial: ${cintaInicial.join("")}\n`);

  // lectura
  const texto = fs.readFileSync(rutaArchivo, "utf-8");
  const entrada = new CharStream(texto);
  const lexer = new TuringLexer(entrada);
  const tokens = new CommonTokenStream(lexer);
  const parser = new TuringParser(tokens);

  // generamos el arbol
  const tree = parser.programa();

  // instancia de visitor usando accept
  const visitor = new MaquinaVisitor();
  tree.accept(visitor); // ¡Esta es la forma oficial de iniciar el recorrido!

  // inyectamos en la cinta infinita
  const maquinaReal = visitor.obtenerMaquinaGenerada(cintaInicial);

  // instanciamos el motor
  console.log("\n[✓] Topología validada. Iniciando Simulación...\n");

  const motor = new TuringEngine(maquinaReal);

  motor.simulador();
}

main();
