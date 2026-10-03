// Generated from src/grammar/Turing.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgramaContext } from "./TuringParser.js";
import { AlfabetoContext } from "./TuringParser.js";
import { ListaSimbolosContext } from "./TuringParser.js";
import { EstadosContext } from "./TuringParser.js";
import { ListaEstadosContext } from "./TuringParser.js";
import { InicialContext } from "./TuringParser.js";
import { FinalContext } from "./TuringParser.js";
import { BlancoContext } from "./TuringParser.js";
import { TransicionesContext } from "./TuringParser.js";
import { TransicionContext } from "./TuringParser.js";
import { DireccionContext } from "./TuringParser.js";
import { SimboloContext } from "./TuringParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TuringParser`.
 */
export default class TuringListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TuringParser.programa`.
	 * @param ctx the parse tree
	 */
	enterPrograma?: (ctx: ProgramaContext) => void;
	/**
	 * Exit a parse tree produced by `TuringParser.programa`.
	 * @param ctx the parse tree
	 */
	exitPrograma?: (ctx: ProgramaContext) => void;
	/**
	 * Enter a parse tree produced by `TuringParser.alfabeto`.
	 * @param ctx the parse tree
	 */
	enterAlfabeto?: (ctx: AlfabetoContext) => void;
	/**
	 * Exit a parse tree produced by `TuringParser.alfabeto`.
	 * @param ctx the parse tree
	 */
	exitAlfabeto?: (ctx: AlfabetoContext) => void;
	/**
	 * Enter a parse tree produced by `TuringParser.listaSimbolos`.
	 * @param ctx the parse tree
	 */
	enterListaSimbolos?: (ctx: ListaSimbolosContext) => void;
	/**
	 * Exit a parse tree produced by `TuringParser.listaSimbolos`.
	 * @param ctx the parse tree
	 */
	exitListaSimbolos?: (ctx: ListaSimbolosContext) => void;
	/**
	 * Enter a parse tree produced by `TuringParser.estados`.
	 * @param ctx the parse tree
	 */
	enterEstados?: (ctx: EstadosContext) => void;
	/**
	 * Exit a parse tree produced by `TuringParser.estados`.
	 * @param ctx the parse tree
	 */
	exitEstados?: (ctx: EstadosContext) => void;
	/**
	 * Enter a parse tree produced by `TuringParser.listaEstados`.
	 * @param ctx the parse tree
	 */
	enterListaEstados?: (ctx: ListaEstadosContext) => void;
	/**
	 * Exit a parse tree produced by `TuringParser.listaEstados`.
	 * @param ctx the parse tree
	 */
	exitListaEstados?: (ctx: ListaEstadosContext) => void;
	/**
	 * Enter a parse tree produced by `TuringParser.inicial`.
	 * @param ctx the parse tree
	 */
	enterInicial?: (ctx: InicialContext) => void;
	/**
	 * Exit a parse tree produced by `TuringParser.inicial`.
	 * @param ctx the parse tree
	 */
	exitInicial?: (ctx: InicialContext) => void;
	/**
	 * Enter a parse tree produced by `TuringParser.final`.
	 * @param ctx the parse tree
	 */
	enterFinal?: (ctx: FinalContext) => void;
	/**
	 * Exit a parse tree produced by `TuringParser.final`.
	 * @param ctx the parse tree
	 */
	exitFinal?: (ctx: FinalContext) => void;
	/**
	 * Enter a parse tree produced by `TuringParser.blanco`.
	 * @param ctx the parse tree
	 */
	enterBlanco?: (ctx: BlancoContext) => void;
	/**
	 * Exit a parse tree produced by `TuringParser.blanco`.
	 * @param ctx the parse tree
	 */
	exitBlanco?: (ctx: BlancoContext) => void;
	/**
	 * Enter a parse tree produced by `TuringParser.transiciones`.
	 * @param ctx the parse tree
	 */
	enterTransiciones?: (ctx: TransicionesContext) => void;
	/**
	 * Exit a parse tree produced by `TuringParser.transiciones`.
	 * @param ctx the parse tree
	 */
	exitTransiciones?: (ctx: TransicionesContext) => void;
	/**
	 * Enter a parse tree produced by `TuringParser.transicion`.
	 * @param ctx the parse tree
	 */
	enterTransicion?: (ctx: TransicionContext) => void;
	/**
	 * Exit a parse tree produced by `TuringParser.transicion`.
	 * @param ctx the parse tree
	 */
	exitTransicion?: (ctx: TransicionContext) => void;
	/**
	 * Enter a parse tree produced by `TuringParser.direccion`.
	 * @param ctx the parse tree
	 */
	enterDireccion?: (ctx: DireccionContext) => void;
	/**
	 * Exit a parse tree produced by `TuringParser.direccion`.
	 * @param ctx the parse tree
	 */
	exitDireccion?: (ctx: DireccionContext) => void;
	/**
	 * Enter a parse tree produced by `TuringParser.simbolo`.
	 * @param ctx the parse tree
	 */
	enterSimbolo?: (ctx: SimboloContext) => void;
	/**
	 * Exit a parse tree produced by `TuringParser.simbolo`.
	 * @param ctx the parse tree
	 */
	exitSimbolo?: (ctx: SimboloContext) => void;
}

