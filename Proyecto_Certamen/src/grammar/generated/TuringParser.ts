// Generated from src/grammar/Turing.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import TuringListener from "./TuringListener.js";
import TuringVisitor from "./TuringVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class TuringParser extends Parser {
	public static readonly ALFABETO = 1;
	public static readonly ESTADOS = 2;
	public static readonly INICIAL = 3;
	public static readonly FINAL = 4;
	public static readonly BLANCO = 5;
	public static readonly TRANSICIONES = 6;
	public static readonly IZQUIERDA = 7;
	public static readonly DERECHA = 8;
	public static readonly QUIETO = 9;
	public static readonly GUION_BAJO = 10;
	public static readonly DOS_PUNTOS = 11;
	public static readonly COMA = 12;
	public static readonly FLECHA = 13;
	public static readonly NUMERO = 14;
	public static readonly ID = 15;
	public static readonly WS = 16;
	public static readonly COMENTARIO = 17;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_programa = 0;
	public static readonly RULE_alfabeto = 1;
	public static readonly RULE_listaSimbolos = 2;
	public static readonly RULE_estados = 3;
	public static readonly RULE_listaEstados = 4;
	public static readonly RULE_inicial = 5;
	public static readonly RULE_final = 6;
	public static readonly RULE_blanco = 7;
	public static readonly RULE_transiciones = 8;
	public static readonly RULE_transicion = 9;
	public static readonly RULE_direccion = 10;
	public static readonly RULE_simbolo = 11;
	public static readonly literalNames: (string | null)[] = [ null, "'ALFABETO'", 
                                                            "'ESTADOS'", 
                                                            "'INICIAL'", 
                                                            "'FINAL'", "'BLANCO'", 
                                                            "'TRANSICIONES'", 
                                                            "'L'", "'R'", 
                                                            "'N'", "'_'", 
                                                            "':'", "','", 
                                                            "'->'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "ALFABETO", 
                                                             "ESTADOS", 
                                                             "INICIAL", 
                                                             "FINAL", "BLANCO", 
                                                             "TRANSICIONES", 
                                                             "IZQUIERDA", 
                                                             "DERECHA", 
                                                             "QUIETO", "GUION_BAJO", 
                                                             "DOS_PUNTOS", 
                                                             "COMA", "FLECHA", 
                                                             "NUMERO", "ID", 
                                                             "WS", "COMENTARIO" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"programa", "alfabeto", "listaSimbolos", "estados", "listaEstados", "inicial", 
		"final", "blanco", "transiciones", "transicion", "direccion", "simbolo",
	];
	public get grammarFileName(): string { return "Turing.g4"; }
	public get literalNames(): (string | null)[] { return TuringParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return TuringParser.symbolicNames; }
	public get ruleNames(): string[] { return TuringParser.ruleNames; }
	public get serializedATN(): number[] { return TuringParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, TuringParser._ATN, TuringParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public programa(): ProgramaContext {
		let localctx: ProgramaContext = new ProgramaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, TuringParser.RULE_programa);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 24;
			this.alfabeto();
			this.state = 25;
			this.estados();
			this.state = 26;
			this.inicial();
			this.state = 27;
			this.final();
			this.state = 28;
			this.blanco();
			this.state = 29;
			this.transiciones();
			this.state = 30;
			this.match(TuringParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alfabeto(): AlfabetoContext {
		let localctx: AlfabetoContext = new AlfabetoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, TuringParser.RULE_alfabeto);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 32;
			this.match(TuringParser.ALFABETO);
			this.state = 33;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 34;
			this.listaSimbolos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listaSimbolos(): ListaSimbolosContext {
		let localctx: ListaSimbolosContext = new ListaSimbolosContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, TuringParser.RULE_listaSimbolos);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 36;
			this.simbolo();
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12) {
				{
				{
				this.state = 37;
				this.match(TuringParser.COMA);
				this.state = 38;
				this.simbolo();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public estados(): EstadosContext {
		let localctx: EstadosContext = new EstadosContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, TuringParser.RULE_estados);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 44;
			this.match(TuringParser.ESTADOS);
			this.state = 45;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 46;
			this.listaEstados();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listaEstados(): ListaEstadosContext {
		let localctx: ListaEstadosContext = new ListaEstadosContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, TuringParser.RULE_listaEstados);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 48;
			this.match(TuringParser.ID);
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12) {
				{
				{
				this.state = 49;
				this.match(TuringParser.COMA);
				this.state = 50;
				this.match(TuringParser.ID);
				}
				}
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inicial(): InicialContext {
		let localctx: InicialContext = new InicialContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, TuringParser.RULE_inicial);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 56;
			this.match(TuringParser.INICIAL);
			this.state = 57;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 58;
			this.match(TuringParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public final(): FinalContext {
		let localctx: FinalContext = new FinalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, TuringParser.RULE_final);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this.match(TuringParser.FINAL);
			this.state = 61;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 62;
			this.match(TuringParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blanco(): BlancoContext {
		let localctx: BlancoContext = new BlancoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, TuringParser.RULE_blanco);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 64;
			this.match(TuringParser.BLANCO);
			this.state = 65;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 66;
			this.simbolo();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public transiciones(): TransicionesContext {
		let localctx: TransicionesContext = new TransicionesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, TuringParser.RULE_transiciones);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 68;
			this.match(TuringParser.TRANSICIONES);
			this.state = 69;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 70;
				this.transicion();
				}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public transicion(): TransicionContext {
		let localctx: TransicionContext = new TransicionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, TuringParser.RULE_transicion);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			this.match(TuringParser.ID);
			this.state = 76;
			this.match(TuringParser.COMA);
			this.state = 77;
			this.simbolo();
			this.state = 78;
			this.match(TuringParser.FLECHA);
			this.state = 79;
			this.simbolo();
			this.state = 80;
			this.match(TuringParser.COMA);
			this.state = 81;
			this.direccion();
			this.state = 82;
			this.match(TuringParser.COMA);
			this.state = 83;
			this.match(TuringParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public direccion(): DireccionContext {
		let localctx: DireccionContext = new DireccionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, TuringParser.RULE_direccion);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 85;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 896) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simbolo(): SimboloContext {
		let localctx: SimboloContext = new SimboloContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, TuringParser.RULE_simbolo);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 87;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 50176) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,17,90,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,
	2,1,2,5,2,40,8,2,10,2,12,2,43,9,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,5,4,52,8,
	4,10,4,12,4,55,9,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,
	1,8,1,8,4,8,72,8,8,11,8,12,8,73,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,2,1,0,
	7,9,2,0,10,10,14,15,80,0,24,1,0,0,0,2,32,1,0,0,0,4,36,1,0,0,0,6,44,1,0,
	0,0,8,48,1,0,0,0,10,56,1,0,0,0,12,60,1,0,0,0,14,64,1,0,0,0,16,68,1,0,0,
	0,18,75,1,0,0,0,20,85,1,0,0,0,22,87,1,0,0,0,24,25,3,2,1,0,25,26,3,6,3,0,
	26,27,3,10,5,0,27,28,3,12,6,0,28,29,3,14,7,0,29,30,3,16,8,0,30,31,5,0,0,
	1,31,1,1,0,0,0,32,33,5,1,0,0,33,34,5,11,0,0,34,35,3,4,2,0,35,3,1,0,0,0,
	36,41,3,22,11,0,37,38,5,12,0,0,38,40,3,22,11,0,39,37,1,0,0,0,40,43,1,0,
	0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,5,1,0,0,0,43,41,1,0,0,0,44,45,5,2,0,
	0,45,46,5,11,0,0,46,47,3,8,4,0,47,7,1,0,0,0,48,53,5,15,0,0,49,50,5,12,0,
	0,50,52,5,15,0,0,51,49,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,
	0,54,9,1,0,0,0,55,53,1,0,0,0,56,57,5,3,0,0,57,58,5,11,0,0,58,59,5,15,0,
	0,59,11,1,0,0,0,60,61,5,4,0,0,61,62,5,11,0,0,62,63,5,15,0,0,63,13,1,0,0,
	0,64,65,5,5,0,0,65,66,5,11,0,0,66,67,3,22,11,0,67,15,1,0,0,0,68,69,5,6,
	0,0,69,71,5,11,0,0,70,72,3,18,9,0,71,70,1,0,0,0,72,73,1,0,0,0,73,71,1,0,
	0,0,73,74,1,0,0,0,74,17,1,0,0,0,75,76,5,15,0,0,76,77,5,12,0,0,77,78,3,22,
	11,0,78,79,5,13,0,0,79,80,3,22,11,0,80,81,5,12,0,0,81,82,3,20,10,0,82,83,
	5,12,0,0,83,84,5,15,0,0,84,19,1,0,0,0,85,86,7,0,0,0,86,21,1,0,0,0,87,88,
	7,1,0,0,88,23,1,0,0,0,3,41,53,73];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TuringParser.__ATN) {
			TuringParser.__ATN = new ATNDeserializer().deserialize(TuringParser._serializedATN);
		}

		return TuringParser.__ATN;
	}


	static DecisionsToDFA = TuringParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramaContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public alfabeto(): AlfabetoContext {
		return this.getTypedRuleContext(AlfabetoContext, 0) as AlfabetoContext;
	}
	public estados(): EstadosContext {
		return this.getTypedRuleContext(EstadosContext, 0) as EstadosContext;
	}
	public inicial(): InicialContext {
		return this.getTypedRuleContext(InicialContext, 0) as InicialContext;
	}
	public final(): FinalContext {
		return this.getTypedRuleContext(FinalContext, 0) as FinalContext;
	}
	public blanco(): BlancoContext {
		return this.getTypedRuleContext(BlancoContext, 0) as BlancoContext;
	}
	public transiciones(): TransicionesContext {
		return this.getTypedRuleContext(TransicionesContext, 0) as TransicionesContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(TuringParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_programa;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterPrograma) {
	 		listener.enterPrograma(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitPrograma) {
	 		listener.exitPrograma(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitPrograma) {
			return visitor.visitPrograma(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlfabetoContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALFABETO(): TerminalNode {
		return this.getToken(TuringParser.ALFABETO, 0);
	}
	public DOS_PUNTOS(): TerminalNode {
		return this.getToken(TuringParser.DOS_PUNTOS, 0);
	}
	public listaSimbolos(): ListaSimbolosContext {
		return this.getTypedRuleContext(ListaSimbolosContext, 0) as ListaSimbolosContext;
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_alfabeto;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterAlfabeto) {
	 		listener.enterAlfabeto(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitAlfabeto) {
	 		listener.exitAlfabeto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitAlfabeto) {
			return visitor.visitAlfabeto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListaSimbolosContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simbolo_list(): SimboloContext[] {
		return this.getTypedRuleContexts(SimboloContext) as SimboloContext[];
	}
	public simbolo(i: number): SimboloContext {
		return this.getTypedRuleContext(SimboloContext, i) as SimboloContext;
	}
	public COMA_list(): TerminalNode[] {
	    	return this.getTokens(TuringParser.COMA);
	}
	public COMA(i: number): TerminalNode {
		return this.getToken(TuringParser.COMA, i);
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_listaSimbolos;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterListaSimbolos) {
	 		listener.enterListaSimbolos(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitListaSimbolos) {
	 		listener.exitListaSimbolos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitListaSimbolos) {
			return visitor.visitListaSimbolos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EstadosContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ESTADOS(): TerminalNode {
		return this.getToken(TuringParser.ESTADOS, 0);
	}
	public DOS_PUNTOS(): TerminalNode {
		return this.getToken(TuringParser.DOS_PUNTOS, 0);
	}
	public listaEstados(): ListaEstadosContext {
		return this.getTypedRuleContext(ListaEstadosContext, 0) as ListaEstadosContext;
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_estados;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterEstados) {
	 		listener.enterEstados(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitEstados) {
	 		listener.exitEstados(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitEstados) {
			return visitor.visitEstados(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListaEstadosContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(TuringParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(TuringParser.ID, i);
	}
	public COMA_list(): TerminalNode[] {
	    	return this.getTokens(TuringParser.COMA);
	}
	public COMA(i: number): TerminalNode {
		return this.getToken(TuringParser.COMA, i);
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_listaEstados;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterListaEstados) {
	 		listener.enterListaEstados(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitListaEstados) {
	 		listener.exitListaEstados(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitListaEstados) {
			return visitor.visitListaEstados(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InicialContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INICIAL(): TerminalNode {
		return this.getToken(TuringParser.INICIAL, 0);
	}
	public DOS_PUNTOS(): TerminalNode {
		return this.getToken(TuringParser.DOS_PUNTOS, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(TuringParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_inicial;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterInicial) {
	 		listener.enterInicial(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitInicial) {
	 		listener.exitInicial(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitInicial) {
			return visitor.visitInicial(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinalContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FINAL(): TerminalNode {
		return this.getToken(TuringParser.FINAL, 0);
	}
	public DOS_PUNTOS(): TerminalNode {
		return this.getToken(TuringParser.DOS_PUNTOS, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(TuringParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_final;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterFinal) {
	 		listener.enterFinal(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitFinal) {
	 		listener.exitFinal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitFinal) {
			return visitor.visitFinal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlancoContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BLANCO(): TerminalNode {
		return this.getToken(TuringParser.BLANCO, 0);
	}
	public DOS_PUNTOS(): TerminalNode {
		return this.getToken(TuringParser.DOS_PUNTOS, 0);
	}
	public simbolo(): SimboloContext {
		return this.getTypedRuleContext(SimboloContext, 0) as SimboloContext;
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_blanco;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterBlanco) {
	 		listener.enterBlanco(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitBlanco) {
	 		listener.exitBlanco(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitBlanco) {
			return visitor.visitBlanco(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransicionesContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRANSICIONES(): TerminalNode {
		return this.getToken(TuringParser.TRANSICIONES, 0);
	}
	public DOS_PUNTOS(): TerminalNode {
		return this.getToken(TuringParser.DOS_PUNTOS, 0);
	}
	public transicion_list(): TransicionContext[] {
		return this.getTypedRuleContexts(TransicionContext) as TransicionContext[];
	}
	public transicion(i: number): TransicionContext {
		return this.getTypedRuleContext(TransicionContext, i) as TransicionContext;
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_transiciones;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterTransiciones) {
	 		listener.enterTransiciones(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitTransiciones) {
	 		listener.exitTransiciones(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitTransiciones) {
			return visitor.visitTransiciones(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransicionContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(TuringParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(TuringParser.ID, i);
	}
	public COMA_list(): TerminalNode[] {
	    	return this.getTokens(TuringParser.COMA);
	}
	public COMA(i: number): TerminalNode {
		return this.getToken(TuringParser.COMA, i);
	}
	public simbolo_list(): SimboloContext[] {
		return this.getTypedRuleContexts(SimboloContext) as SimboloContext[];
	}
	public simbolo(i: number): SimboloContext {
		return this.getTypedRuleContext(SimboloContext, i) as SimboloContext;
	}
	public FLECHA(): TerminalNode {
		return this.getToken(TuringParser.FLECHA, 0);
	}
	public direccion(): DireccionContext {
		return this.getTypedRuleContext(DireccionContext, 0) as DireccionContext;
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_transicion;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterTransicion) {
	 		listener.enterTransicion(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitTransicion) {
	 		listener.exitTransicion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitTransicion) {
			return visitor.visitTransicion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DireccionContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IZQUIERDA(): TerminalNode {
		return this.getToken(TuringParser.IZQUIERDA, 0);
	}
	public DERECHA(): TerminalNode {
		return this.getToken(TuringParser.DERECHA, 0);
	}
	public QUIETO(): TerminalNode {
		return this.getToken(TuringParser.QUIETO, 0);
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_direccion;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterDireccion) {
	 		listener.enterDireccion(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitDireccion) {
	 		listener.exitDireccion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitDireccion) {
			return visitor.visitDireccion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimboloContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMERO(): TerminalNode {
		return this.getToken(TuringParser.NUMERO, 0);
	}
	public GUION_BAJO(): TerminalNode {
		return this.getToken(TuringParser.GUION_BAJO, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(TuringParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_simbolo;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterSimbolo) {
	 		listener.enterSimbolo(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitSimbolo) {
	 		listener.exitSimbolo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitSimbolo) {
			return visitor.visitSimbolo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
