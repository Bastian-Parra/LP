// Generated from src/grammar/Turing.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TuringParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class TuringVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TuringParser.programa`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrograma?: (ctx: ProgramaContext) => Result;
	/**
	 * Visit a parse tree produced by `TuringParser.alfabeto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlfabeto?: (ctx: AlfabetoContext) => Result;
	/**
	 * Visit a parse tree produced by `TuringParser.listaSimbolos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListaSimbolos?: (ctx: ListaSimbolosContext) => Result;
	/**
	 * Visit a parse tree produced by `TuringParser.estados`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEstados?: (ctx: EstadosContext) => Result;
	/**
	 * Visit a parse tree produced by `TuringParser.listaEstados`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListaEstados?: (ctx: ListaEstadosContext) => Result;
	/**
	 * Visit a parse tree produced by `TuringParser.inicial`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInicial?: (ctx: InicialContext) => Result;
	/**
	 * Visit a parse tree produced by `TuringParser.final`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinal?: (ctx: FinalContext) => Result;
	/**
	 * Visit a parse tree produced by `TuringParser.blanco`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlanco?: (ctx: BlancoContext) => Result;
	/**
	 * Visit a parse tree produced by `TuringParser.transiciones`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransiciones?: (ctx: TransicionesContext) => Result;
	/**
	 * Visit a parse tree produced by `TuringParser.transicion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransicion?: (ctx: TransicionContext) => Result;
	/**
	 * Visit a parse tree produced by `TuringParser.direccion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDireccion?: (ctx: DireccionContext) => Result;
	/**
	 * Visit a parse tree produced by `TuringParser.simbolo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimbolo?: (ctx: SimboloContext) => Result;
}

