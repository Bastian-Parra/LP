// Generated from Controles/Control_1_Stream/Stream.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramaContext } from "./StreamParser";
import { InstruccionContext } from "./StreamParser";
import { DeclaracionFuenteContext } from "./StreamParser";
import { DeclaracionOperadorContext } from "./StreamParser";
import { DeclaracionSumideroContext } from "./StreamParser";
import { ConexionContext } from "./StreamParser";
import { SimulacionContext } from "./StreamParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `StreamParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface StreamVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `StreamParser.programa`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrograma?: (ctx: ProgramaContext) => Result;

	/**
	 * Visit a parse tree produced by `StreamParser.instruccion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruccion?: (ctx: InstruccionContext) => Result;

	/**
	 * Visit a parse tree produced by `StreamParser.declaracionFuente`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaracionFuente?: (ctx: DeclaracionFuenteContext) => Result;

	/**
	 * Visit a parse tree produced by `StreamParser.declaracionOperador`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaracionOperador?: (ctx: DeclaracionOperadorContext) => Result;

	/**
	 * Visit a parse tree produced by `StreamParser.declaracionSumidero`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaracionSumidero?: (ctx: DeclaracionSumideroContext) => Result;

	/**
	 * Visit a parse tree produced by `StreamParser.conexion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConexion?: (ctx: ConexionContext) => Result;

	/**
	 * Visit a parse tree produced by `StreamParser.simulacion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimulacion?: (ctx: SimulacionContext) => Result;
}

