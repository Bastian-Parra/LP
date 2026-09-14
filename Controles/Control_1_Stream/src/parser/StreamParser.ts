// Generated from Controles/Control_1_Stream/Stream.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { StreamVisitor } from "./StreamVisitor";


export class StreamParser extends Parser {
	public static readonly FUENTE = 1;
	public static readonly OPERADOR = 2;
	public static readonly SUMIDERO = 3;
	public static readonly CONECTAR = 4;
	public static readonly SIMULAR = 5;
	public static readonly TIEMPO_SERVICIO = 6;
	public static readonly REPLICAS = 7;
	public static readonly A = 8;
	public static readonly ID = 9;
	public static readonly NUMERO = 10;
	public static readonly WS = 11;
	public static readonly RULE_programa = 0;
	public static readonly RULE_instruccion = 1;
	public static readonly RULE_declaracionFuente = 2;
	public static readonly RULE_declaracionOperador = 3;
	public static readonly RULE_declaracionSumidero = 4;
	public static readonly RULE_conexion = 5;
	public static readonly RULE_simulacion = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"programa", "instruccion", "declaracionFuente", "declaracionOperador", 
		"declaracionSumidero", "conexion", "simulacion",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'FUENTE'", "'OPERADOR'", "'SUMIDERO'", "'CONECTAR'", "'SIMULAR'", 
		"'TIEMPO_SERVICIO'", "'REPLICAS'", "'A'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FUENTE", "OPERADOR", "SUMIDERO", "CONECTAR", "SIMULAR", "TIEMPO_SERVICIO", 
		"REPLICAS", "A", "ID", "NUMERO", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(StreamParser._LITERAL_NAMES, StreamParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return StreamParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Stream.g4"; }

	// @Override
	public get ruleNames(): string[] { return StreamParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return StreamParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(StreamParser._ATN, this);
	}
	// @RuleVersion(0)
	public programa(): ProgramaContext {
		let _localctx: ProgramaContext = new ProgramaContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, StreamParser.RULE_programa);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 14;
				this.instruccion();
				}
				}
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << StreamParser.FUENTE) | (1 << StreamParser.OPERADOR) | (1 << StreamParser.SUMIDERO) | (1 << StreamParser.CONECTAR) | (1 << StreamParser.SIMULAR))) !== 0));
			this.state = 19;
			this.match(StreamParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruccion(): InstruccionContext {
		let _localctx: InstruccionContext = new InstruccionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, StreamParser.RULE_instruccion);
		try {
			this.state = 26;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case StreamParser.FUENTE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 21;
				this.declaracionFuente();
				}
				break;
			case StreamParser.OPERADOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 22;
				this.declaracionOperador();
				}
				break;
			case StreamParser.SUMIDERO:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 23;
				this.declaracionSumidero();
				}
				break;
			case StreamParser.CONECTAR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 24;
				this.conexion();
				}
				break;
			case StreamParser.SIMULAR:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 25;
				this.simulacion();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaracionFuente(): DeclaracionFuenteContext {
		let _localctx: DeclaracionFuenteContext = new DeclaracionFuenteContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, StreamParser.RULE_declaracionFuente);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.match(StreamParser.FUENTE);
			this.state = 29;
			this.match(StreamParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaracionOperador(): DeclaracionOperadorContext {
		let _localctx: DeclaracionOperadorContext = new DeclaracionOperadorContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, StreamParser.RULE_declaracionOperador);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this.match(StreamParser.OPERADOR);
			this.state = 32;
			this.match(StreamParser.ID);
			this.state = 33;
			this.match(StreamParser.TIEMPO_SERVICIO);
			this.state = 34;
			this.match(StreamParser.NUMERO);
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === StreamParser.REPLICAS) {
				{
				this.state = 35;
				this.match(StreamParser.REPLICAS);
				this.state = 36;
				this.match(StreamParser.NUMERO);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaracionSumidero(): DeclaracionSumideroContext {
		let _localctx: DeclaracionSumideroContext = new DeclaracionSumideroContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, StreamParser.RULE_declaracionSumidero);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(StreamParser.SUMIDERO);
			this.state = 40;
			this.match(StreamParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conexion(): ConexionContext {
		let _localctx: ConexionContext = new ConexionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, StreamParser.RULE_conexion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.match(StreamParser.CONECTAR);
			this.state = 43;
			this.match(StreamParser.ID);
			this.state = 44;
			this.match(StreamParser.A);
			this.state = 45;
			this.match(StreamParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simulacion(): SimulacionContext {
		let _localctx: SimulacionContext = new SimulacionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, StreamParser.RULE_simulacion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(StreamParser.SIMULAR);
			this.state = 48;
			this.match(StreamParser.NUMERO);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r5\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x03\x02\x06\x02\x12\n\x02\r\x02\x0E\x02\x13\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1D\n\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"(\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x02\x02\x023\x02\x11\x03\x02\x02\x02\x04\x1C\x03\x02" +
		"\x02\x02\x06\x1E\x03\x02\x02\x02\b!\x03\x02\x02\x02\n)\x03\x02\x02\x02" +
		"\f,\x03\x02\x02\x02\x0E1\x03\x02\x02\x02\x10\x12\x05\x04\x03\x02\x11\x10" +
		"\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x13\x14" +
		"\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x16\x07\x02\x02\x03\x16\x03" +
		"\x03\x02\x02\x02\x17\x1D\x05\x06\x04\x02\x18\x1D\x05\b\x05\x02\x19\x1D" +
		"\x05\n\x06\x02\x1A\x1D\x05\f\x07\x02\x1B\x1D\x05\x0E\b\x02\x1C\x17\x03" +
		"\x02\x02\x02\x1C\x18\x03\x02\x02\x02\x1C\x19\x03\x02\x02\x02\x1C\x1A\x03" +
		"\x02\x02\x02\x1C\x1B\x03\x02\x02\x02\x1D\x05\x03\x02\x02\x02\x1E\x1F\x07" +
		"\x03\x02\x02\x1F \x07\v\x02\x02 \x07\x03\x02\x02\x02!\"\x07\x04\x02\x02" +
		"\"#\x07\v\x02\x02#$\x07\b\x02\x02$\'\x07\f\x02\x02%&\x07\t\x02\x02&(\x07" +
		"\f\x02\x02\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02(\t\x03\x02\x02\x02)*" +
		"\x07\x05\x02\x02*+\x07\v\x02\x02+\v\x03\x02\x02\x02,-\x07\x06\x02\x02" +
		"-.\x07\v\x02\x02./\x07\n\x02\x02/0\x07\v\x02\x020\r\x03\x02\x02\x0212" +
		"\x07\x07\x02\x0223\x07\f\x02\x023\x0F\x03\x02\x02\x02\x05\x13\x1C\'";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!StreamParser.__ATN) {
			StreamParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(StreamParser._serializedATN));
		}

		return StreamParser.__ATN;
	}

}

export class ProgramaContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(StreamParser.EOF, 0); }
	public instruccion(): InstruccionContext[];
	public instruccion(i: number): InstruccionContext;
	public instruccion(i?: number): InstruccionContext | InstruccionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstruccionContext);
		} else {
			return this.getRuleContext(i, InstruccionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StreamParser.RULE_programa; }
	// @Override
	public accept<Result>(visitor: StreamVisitor<Result>): Result {
		if (visitor.visitPrograma) {
			return visitor.visitPrograma(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstruccionContext extends ParserRuleContext {
	public declaracionFuente(): DeclaracionFuenteContext | undefined {
		return this.tryGetRuleContext(0, DeclaracionFuenteContext);
	}
	public declaracionOperador(): DeclaracionOperadorContext | undefined {
		return this.tryGetRuleContext(0, DeclaracionOperadorContext);
	}
	public declaracionSumidero(): DeclaracionSumideroContext | undefined {
		return this.tryGetRuleContext(0, DeclaracionSumideroContext);
	}
	public conexion(): ConexionContext | undefined {
		return this.tryGetRuleContext(0, ConexionContext);
	}
	public simulacion(): SimulacionContext | undefined {
		return this.tryGetRuleContext(0, SimulacionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StreamParser.RULE_instruccion; }
	// @Override
	public accept<Result>(visitor: StreamVisitor<Result>): Result {
		if (visitor.visitInstruccion) {
			return visitor.visitInstruccion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaracionFuenteContext extends ParserRuleContext {
	public FUENTE(): TerminalNode { return this.getToken(StreamParser.FUENTE, 0); }
	public ID(): TerminalNode { return this.getToken(StreamParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StreamParser.RULE_declaracionFuente; }
	// @Override
	public accept<Result>(visitor: StreamVisitor<Result>): Result {
		if (visitor.visitDeclaracionFuente) {
			return visitor.visitDeclaracionFuente(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaracionOperadorContext extends ParserRuleContext {
	public OPERADOR(): TerminalNode { return this.getToken(StreamParser.OPERADOR, 0); }
	public ID(): TerminalNode { return this.getToken(StreamParser.ID, 0); }
	public TIEMPO_SERVICIO(): TerminalNode { return this.getToken(StreamParser.TIEMPO_SERVICIO, 0); }
	public NUMERO(): TerminalNode[];
	public NUMERO(i: number): TerminalNode;
	public NUMERO(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(StreamParser.NUMERO);
		} else {
			return this.getToken(StreamParser.NUMERO, i);
		}
	}
	public REPLICAS(): TerminalNode | undefined { return this.tryGetToken(StreamParser.REPLICAS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StreamParser.RULE_declaracionOperador; }
	// @Override
	public accept<Result>(visitor: StreamVisitor<Result>): Result {
		if (visitor.visitDeclaracionOperador) {
			return visitor.visitDeclaracionOperador(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaracionSumideroContext extends ParserRuleContext {
	public SUMIDERO(): TerminalNode { return this.getToken(StreamParser.SUMIDERO, 0); }
	public ID(): TerminalNode { return this.getToken(StreamParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StreamParser.RULE_declaracionSumidero; }
	// @Override
	public accept<Result>(visitor: StreamVisitor<Result>): Result {
		if (visitor.visitDeclaracionSumidero) {
			return visitor.visitDeclaracionSumidero(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConexionContext extends ParserRuleContext {
	public CONECTAR(): TerminalNode { return this.getToken(StreamParser.CONECTAR, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(StreamParser.ID);
		} else {
			return this.getToken(StreamParser.ID, i);
		}
	}
	public A(): TerminalNode { return this.getToken(StreamParser.A, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StreamParser.RULE_conexion; }
	// @Override
	public accept<Result>(visitor: StreamVisitor<Result>): Result {
		if (visitor.visitConexion) {
			return visitor.visitConexion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimulacionContext extends ParserRuleContext {
	public SIMULAR(): TerminalNode { return this.getToken(StreamParser.SIMULAR, 0); }
	public NUMERO(): TerminalNode { return this.getToken(StreamParser.NUMERO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StreamParser.RULE_simulacion; }
	// @Override
	public accept<Result>(visitor: StreamVisitor<Result>): Result {
		if (visitor.visitSimulacion) {
			return visitor.visitSimulacion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


