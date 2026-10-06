import { ConstructorMaquina } from "../semantica/ConstructorMaquina.ts";
import TuringVisitor from "../grammar/generated/TuringVisitor.ts";
import { Direccion } from "../types/types.ts";

export class MaquinaVisitor extends TuringVisitor<void> {
  private constructorMaquina = new ConstructorMaquina();
  private simboloBlanco = "_";

  visitMaquina = (ctx: any): void => {
    console.log("Leyendo Máquina...");
    this.visitChildren(ctx);
  };

  visitAlfabeto = (ctx: any): void => {
    console.log("Leyendo Alfabeto...");
    const simbolos = ctx.listaSimbolos().getText().split(",");
    for (const s of simbolos) {
      this.constructorMaquina.agregarSimbolo(s);
    }
  };

  visitEstados = (ctx: any): void => {
    console.log("Leyendo Estados...");
    // getText() devuelve "q0,q_add,q_rewind,qF"
    const estados = ctx.listaEstados().getText().split(",");
    for (const e of estados) {
      this.constructorMaquina.agregarEstado(e);
    }
  };

  visitInicial = (ctx: any): void => {
    const estadoIni = ctx.children[2].getText();
    console.log(`Leyendo Inicial: ${estadoIni}`);
    this.constructorMaquina.definirEstadoInicial(estadoIni);
  };

  visitFinal = (ctx: any): void => {
    console.log("Leyendo Finales...");
    const finales = ctx.listaEstados().getText().split(",");
    for (const f of finales) {
      this.constructorMaquina.agregarEstadoFinal(f);
    }
  };

  visitBlanco = (ctx: any): void => {
    this.simboloBlanco = ctx.children[2].getText();
    console.log(`Leyendo Blanco: ${this.simboloBlanco}`);
  };

  visitTransicion = (ctx: any): void => {
    const origen = ctx.children[0].getText();
    const leido = ctx.children[2].getText();
    const escrito = ctx.children[4].getText();
    const mov = ctx.children[6].getText() as Direccion;
    const destino = ctx.children[8].getText();

    this.constructorMaquina.agregarTransicion(
      origen,
      leido,
      destino,
      escrito,
      mov,
    );
  };

  obtenerMaquinaGenerada(cintaInicial: string[]): any {
    return this.constructorMaquina.construir(
      cintaInicial,
      0,
      this.simboloBlanco,
    );
  }
}
