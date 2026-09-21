import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { StreamVisitor } from "./parser/StreamVisitor"; // Interfaz autogenerada
import {
  DeclaracionFuenteContext,
  DeclaracionOperadorContext,
  DeclaracionSumideroContext,
  ConexionContext,
  SimulacionContext,
} from "./parser/StreamParser";

import { Grafo } from "./grafo";
import { TipoNodo, Operador } from "./types";

// qui implementamos la interfaz del visitor
export class ConstructorGrafo
  extends AbstractParseTreeVisitor<void>
  implements StreamVisitor<void>
{
  public grafo: Grafo;
  public cantidadEventos: number = 0;

  constructor() {
    super();
    this.grafo = new Grafo();
  }

  protected defaultResult(): void {}

  // cuando ANTLR lee una FUENTE
  visitDeclaracionFuente(ctx: DeclaracionFuenteContext): void {
    const id = ctx.ID().text;
    this.grafo.agregarNodo({ id, tipo: TipoNodo.FUENTE });
  }

  // cuando ANTLR lee un OPERADOR
  visitDeclaracionOperador(ctx: DeclaracionOperadorContext): void {
    const id = ctx.ID().text;

    const numeros = ctx.NUMERO();
    const tiempoServicio = parseInt(numeros[0].text, 10);
    const replicas = numeros.length > 1 ? parseInt(numeros[1].text, 10) : 1;
    const operador: Operador = {
      id,
      tipo: TipoNodo.OPERADOR,
      tiempoServicio,
      replicas,
    };

    this.grafo.agregarNodo(operador);
  }

  // cuando ANTLR lee un SUMIDERO
  visitDeclaracionSumidero(ctx: DeclaracionSumideroContext): void {
    const id = ctx.ID().text;
    this.grafo.agregarNodo({ id, tipo: TipoNodo.SUMIDERO });
  }

  // cuando ANTLR lee un CONECTAR
  visitConexion(ctx: ConexionContext): void {
    const idOrigen = ctx.ID(0).text; // primer ID
    const idDestino = ctx.ID(1).text; // segundo ID
    this.grafo.conectar(idOrigen, idDestino);
  }

  // cuando ANTLR lee SIMULAR
  visitSimulacion(ctx: SimulacionContext): void {
    this.cantidadEventos = parseInt(ctx.NUMERO().text, 10);
  }
}
