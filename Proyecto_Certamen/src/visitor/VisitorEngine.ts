import { ConstructorMaquina } from "../semantica/ConstructorMaquina";
import TuringVisitor from "../grammar/generated/TuringVisitor";
import { Direccion } from "../types/types";
import {
  ExpansorSubrutinas,
  SubrutinaExpandida,
} from "../semantica/ExpansorSubrutinas";

export class MaquinaVisitor extends TuringVisitor<void> {
  private constructorMaquina = new ConstructorMaquina();
  private simboloBlanco = "_";

  // Herramientas de subrutina
  private expansor = new ExpansorSubrutinas();
  private subrutinasDefinidas = new Map<string, SubrutinaExpandida>();

  // ==========================================
  // 1. CAPTURA DE SUBRUTINAS (Sin inyectar aún)
  // ==========================================
  visitSubrutina = (ctx: any): void => {
    const nombre = ctx.children[2].getText();
    const estados = ctx.estados().listaEstados().getText().split(",");
    const estadoEntrada = ctx.entradaSubrutina().ID().getText();
    const estadosSalida = ctx
      .salidaSubrutina()
      .listaEstados()
      .getText()
      .split(",");

    const transiciones: any[] = [];
    const transCtx = ctx.transiciones();

    // Bypass al bug de ANTLR: Recorremos los hijos directamente
    if (transCtx && transCtx.children) {
      for (const child of transCtx.children) {
        // Filtramos solo los nodos que sean reglas de transición
        if (child.constructor.name.includes("Transicion")) {
          transiciones.push({
            estadoOrigen: child.children[0].getText(),
            simboloLeido: child.children[2].getText(),
            simboloEscrito: child.children[4].getText(),
            mueve: child.children[6].getText() as Direccion,
            estadoDestino: child.children[8].getText(),
          });
        }
      }
    }

    this.subrutinasDefinidas.set(nombre, {
      nombre,
      estados,
      estadoEntrada,
      estadosSalida,
      transiciones,
    });
  };

  // ==========================================
  // 2. LECTURA DE LA MÁQUINA PRINCIPAL
  // ==========================================
  visitMaquina = (ctx: any): void => {
    this.visitChildren(ctx);
  };

  visitAlfabeto = (ctx: any): void => {
    const simbolos = ctx.listaSimbolos().getText().split(",");
    for (const s of simbolos) {
      this.constructorMaquina.agregarSimbolo(s);
    }
  };

  visitEstados = (ctx: any): void => {
    const estados = ctx.listaEstados().getText().split(",");
    for (const e of estados) {
      this.constructorMaquina.agregarEstado(e);
    }
  };

  visitInicial = (ctx: any): void => {
    this.constructorMaquina.definirEstadoInicial(ctx.children[2].getText());
  };

  visitFinal = (ctx: any): void => {
    const finales = ctx.listaEstados().getText().split(",");
    for (const f of finales) {
      this.constructorMaquina.agregarEstadoFinal(f);
    }
  };

  visitBlanco = (ctx: any): void => {
    this.simboloBlanco = ctx.children[2].getText();
  };

  // ==========================================
  // 3. INYECCIÓN DE LA SUBRUTINA
  // ==========================================
  visitUsoSubrutina = (ctx: any): void => {
    const nombreSub = ctx.children[2].getText();
    const alias = ctx.children[7].getText();

    const sub = this.subrutinasDefinidas.get(nombreSub);
    if (sub) {
      this.expansor.insertar(this.constructorMaquina, sub, alias);
    }
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
