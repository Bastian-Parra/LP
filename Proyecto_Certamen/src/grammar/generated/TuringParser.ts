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
	public static readonly MAQUINA = 1;
	public static readonly ALFABETO = 2;
	public static readonly ESTADOS = 3;
	public static readonly INICIAL = 4;
	public static readonly FINAL = 5;
	public static readonly BLANCO = 6;
	public static readonly TRANSICIONES = 7;
	public static readonly SUBRUTINA = 8;
	public static readonly ENTRADA = 9;
	public static readonly SALIDA = 10;
	public static readonly USA = 11;
	public static readonly COMO = 12;
	public static readonly ENTERO = 13;
	public static readonly IZQUIERDA = 14;
	public static readonly DERECHA = 15;
	public static readonly QUIETO = 16;
	public static readonly GUION_BAJO = 17;
	public static readonly DOS_PUNTOS = 18;
	public static readonly COMA = 19;
	public static readonly FLECHA = 20;
	public static readonly PARENTESIS_IZQ = 21;
	public static readonly PARENTESIS_DER = 22;
	public static readonly LLAVE_IZQ = 23;
	public static readonly LLAVE_DER = 24;
	public static readonly NUMERO = 25;
	public static readonly ID = 26;
	public static readonly WS = 27;
	public static readonly COMENTARIO = 28;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_programa = 0;
	public static readonly RULE_maquina = 1;
	public static readonly RULE_nombreMaquina = 2;
	public static readonly RULE_alfabeto = 3;
	public static readonly RULE_listaSimbolos = 4;
	public static readonly RULE_estados = 5;
	public static readonly RULE_listaEstados = 6;
	public static readonly RULE_inicial = 7;
	public static readonly RULE_final = 8;
	public static readonly RULE_blanco = 9;
	public static readonly RULE_subrutina = 10;
	public static readonly RULE_entradaSubrutina = 11;
	public static readonly RULE_salidaSubrutina = 12;
	public static readonly RULE_usoSubrutina = 13;
	public static readonly RULE_transiciones = 14;
	public static readonly RULE_transicion = 15;
	public static readonly RULE_direccion = 16;
	public static readonly RULE_simbolo = 17;
	public static readonly literalNames: (string | null)[] = [ null, "'MAQUINA'", 
                                                            "'ALFABETO'", 
                                                            "'ESTADOS'", 
                                                            "'INICIAL'", 
                                                            "'FINAL'", "'BLANCO'", 
                                                            "'TRANSICIONES'", 
                                                            "'SUBRUTINA'", 
                                                            "'ENTRADA'", 
                                                            "'SALIDA'", 
                                                            "'USA'", "'COMO'", 
                                                            "'ENTERO'", 
                                                            "'L'", "'R'", 
                                                            "'N'", "'_'", 
                                                            "':'", "','", 
                                                            "'->'", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "MAQUINA", 
                                                             "ALFABETO", 
                                                             "ESTADOS", 
                                                             "INICIAL", 
                                                             "FINAL", "BLANCO", 
                                                             "TRANSICIONES", 
                                                             "SUBRUTINA", 
                                                             "ENTRADA", 
                                                             "SALIDA", "USA", 
                                                             "COMO", "ENTERO", 
                                                             "IZQUIERDA", 
                                                             "DERECHA", 
                                                             "QUIETO", "GUION_BAJO", 
                                                             "DOS_PUNTOS", 
                                                             "COMA", "FLECHA", 
                                                             "PARENTESIS_IZQ", 
                                                             "PARENTESIS_DER", 
                                                             "LLAVE_IZQ", 
                                                             "LLAVE_DER", 
                                                             "NUMERO", "ID", 
                                                             "WS", "COMENTARIO" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"programa", "maquina", "nombreMaquina", "alfabeto", "listaSimbolos", "estados", 
		"listaEstados", "inicial", "final", "blanco", "subrutina", "entradaSubrutina", 
		"salidaSubrutina", "usoSubrutina", "transiciones", "transicion", "direccion", 
		"simbolo",
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 38;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 8:
					{
					this.state = 36;
					this.subrutina();
					}
					break;
				case 1:
				case 2:
					{
					this.state = 37;
					this.maquina();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262) !== 0));
			this.state = 42;
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
	public maquina(): MaquinaContext {
		let localctx: MaquinaContext = new MaquinaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, TuringParser.RULE_maquina);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 44;
				this.nombreMaquina();
				}
			}

			this.state = 47;
			this.alfabeto();
			this.state = 48;
			this.estados();
			this.state = 49;
			this.inicial();
			this.state = 50;
			this.final();
			this.state = 51;
			this.blanco();
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11) {
				{
				{
				this.state = 52;
				this.usoSubrutina();
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 58;
			this.transiciones();
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
	public nombreMaquina(): NombreMaquinaContext {
		let localctx: NombreMaquinaContext = new NombreMaquinaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, TuringParser.RULE_nombreMaquina);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this.match(TuringParser.MAQUINA);
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
	public alfabeto(): AlfabetoContext {
		let localctx: AlfabetoContext = new AlfabetoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, TuringParser.RULE_alfabeto);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 64;
			this.match(TuringParser.ALFABETO);
			this.state = 65;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 66;
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
		this.enterRule(localctx, 8, TuringParser.RULE_listaSimbolos);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 68;
			this.simbolo();
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===19) {
				{
				{
				this.state = 69;
				this.match(TuringParser.COMA);
				this.state = 70;
				this.simbolo();
				}
				}
				this.state = 75;
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
		this.enterRule(localctx, 10, TuringParser.RULE_estados);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 76;
			this.match(TuringParser.ESTADOS);
			this.state = 77;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 78;
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
		this.enterRule(localctx, 12, TuringParser.RULE_listaEstados);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 80;
			this.match(TuringParser.ID);
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===19) {
				{
				{
				this.state = 81;
				this.match(TuringParser.COMA);
				this.state = 82;
				this.match(TuringParser.ID);
				}
				}
				this.state = 87;
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
		this.enterRule(localctx, 14, TuringParser.RULE_inicial);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 88;
			this.match(TuringParser.INICIAL);
			this.state = 89;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 90;
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
		this.enterRule(localctx, 16, TuringParser.RULE_final);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 92;
			this.match(TuringParser.FINAL);
			this.state = 93;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 94;
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
	public blanco(): BlancoContext {
		let localctx: BlancoContext = new BlancoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, TuringParser.RULE_blanco);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 96;
			this.match(TuringParser.BLANCO);
			this.state = 97;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 98;
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
	public subrutina(): SubrutinaContext {
		let localctx: SubrutinaContext = new SubrutinaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, TuringParser.RULE_subrutina);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 100;
			this.match(TuringParser.SUBRUTINA);
			this.state = 101;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 102;
			this.match(TuringParser.ID);
			this.state = 103;
			this.match(TuringParser.PARENTESIS_IZQ);
			this.state = 104;
			this.match(TuringParser.ID);
			this.state = 105;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 106;
			this.match(TuringParser.ENTERO);
			this.state = 107;
			this.match(TuringParser.PARENTESIS_DER);
			this.state = 108;
			this.match(TuringParser.LLAVE_IZQ);
			this.state = 109;
			this.estados();
			this.state = 110;
			this.entradaSubrutina();
			this.state = 111;
			this.salidaSubrutina();
			this.state = 112;
			this.transiciones();
			this.state = 113;
			this.match(TuringParser.LLAVE_DER);
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
	public entradaSubrutina(): EntradaSubrutinaContext {
		let localctx: EntradaSubrutinaContext = new EntradaSubrutinaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, TuringParser.RULE_entradaSubrutina);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 115;
			this.match(TuringParser.ENTRADA);
			this.state = 116;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 117;
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
	public salidaSubrutina(): SalidaSubrutinaContext {
		let localctx: SalidaSubrutinaContext = new SalidaSubrutinaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, TuringParser.RULE_salidaSubrutina);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 119;
			this.match(TuringParser.SALIDA);
			this.state = 120;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 121;
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
	public usoSubrutina(): UsoSubrutinaContext {
		let localctx: UsoSubrutinaContext = new UsoSubrutinaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, TuringParser.RULE_usoSubrutina);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 123;
			this.match(TuringParser.USA);
			this.state = 124;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 125;
			this.match(TuringParser.ID);
			this.state = 126;
			this.match(TuringParser.PARENTESIS_IZQ);
			this.state = 127;
			this.match(TuringParser.NUMERO);
			this.state = 128;
			this.match(TuringParser.PARENTESIS_DER);
			this.state = 129;
			this.match(TuringParser.COMO);
			this.state = 130;
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
	public transiciones(): TransicionesContext {
		let localctx: TransicionesContext = new TransicionesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, TuringParser.RULE_transiciones);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 132;
			this.match(TuringParser.TRANSICIONES);
			this.state = 133;
			this.match(TuringParser.DOS_PUNTOS);
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===26) {
				{
				{
				this.state = 134;
				this.transicion();
				}
				}
				this.state = 139;
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
	public transicion(): TransicionContext {
		let localctx: TransicionContext = new TransicionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, TuringParser.RULE_transicion);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 140;
			this.match(TuringParser.ID);
			this.state = 141;
			this.match(TuringParser.COMA);
			this.state = 142;
			this.simbolo();
			this.state = 143;
			this.match(TuringParser.FLECHA);
			this.state = 144;
			this.match(TuringParser.ID);
			this.state = 145;
			this.match(TuringParser.COMA);
			this.state = 146;
			this.simbolo();
			this.state = 147;
			this.match(TuringParser.COMA);
			this.state = 148;
			this.direccion();
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
		this.enterRule(localctx, 32, TuringParser.RULE_direccion);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 150;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 114688) !== 0))) {
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
		this.enterRule(localctx, 34, TuringParser.RULE_simbolo);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 152;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 100794368) !== 0))) {
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

	public static readonly _serializedATN: number[] = [4,1,28,155,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,1,0,1,0,4,0,39,8,0,11,0,12,0,40,1,0,1,0,1,1,3,1,46,8,1,1,1,1,1,1,1,
	1,1,1,1,1,1,5,1,54,8,1,10,1,12,1,57,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,
	1,3,1,3,1,4,1,4,1,4,5,4,72,8,4,10,4,12,4,75,9,4,1,5,1,5,1,5,1,5,1,6,1,6,
	1,6,5,6,84,8,6,10,6,12,6,87,9,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,
	1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,
	13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,5,14,136,8,14,10,14,12,14,139,9,14,
	1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,17,1,17,1,
	17,0,0,18,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,2,1,0,14,16,
	2,0,17,17,25,26,143,0,38,1,0,0,0,2,45,1,0,0,0,4,60,1,0,0,0,6,64,1,0,0,0,
	8,68,1,0,0,0,10,76,1,0,0,0,12,80,1,0,0,0,14,88,1,0,0,0,16,92,1,0,0,0,18,
	96,1,0,0,0,20,100,1,0,0,0,22,115,1,0,0,0,24,119,1,0,0,0,26,123,1,0,0,0,
	28,132,1,0,0,0,30,140,1,0,0,0,32,150,1,0,0,0,34,152,1,0,0,0,36,39,3,20,
	10,0,37,39,3,2,1,0,38,36,1,0,0,0,38,37,1,0,0,0,39,40,1,0,0,0,40,38,1,0,
	0,0,40,41,1,0,0,0,41,42,1,0,0,0,42,43,5,0,0,1,43,1,1,0,0,0,44,46,3,4,2,
	0,45,44,1,0,0,0,45,46,1,0,0,0,46,47,1,0,0,0,47,48,3,6,3,0,48,49,3,10,5,
	0,49,50,3,14,7,0,50,51,3,16,8,0,51,55,3,18,9,0,52,54,3,26,13,0,53,52,1,
	0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,55,1,0,
	0,0,58,59,3,28,14,0,59,3,1,0,0,0,60,61,5,1,0,0,61,62,5,18,0,0,62,63,5,26,
	0,0,63,5,1,0,0,0,64,65,5,2,0,0,65,66,5,18,0,0,66,67,3,8,4,0,67,7,1,0,0,
	0,68,73,3,34,17,0,69,70,5,19,0,0,70,72,3,34,17,0,71,69,1,0,0,0,72,75,1,
	0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,9,1,0,0,0,75,73,1,0,0,0,76,77,5,3,
	0,0,77,78,5,18,0,0,78,79,3,12,6,0,79,11,1,0,0,0,80,85,5,26,0,0,81,82,5,
	19,0,0,82,84,5,26,0,0,83,81,1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,
	0,0,0,86,13,1,0,0,0,87,85,1,0,0,0,88,89,5,4,0,0,89,90,5,18,0,0,90,91,5,
	26,0,0,91,15,1,0,0,0,92,93,5,5,0,0,93,94,5,18,0,0,94,95,3,12,6,0,95,17,
	1,0,0,0,96,97,5,6,0,0,97,98,5,18,0,0,98,99,3,34,17,0,99,19,1,0,0,0,100,
	101,5,8,0,0,101,102,5,18,0,0,102,103,5,26,0,0,103,104,5,21,0,0,104,105,
	5,26,0,0,105,106,5,18,0,0,106,107,5,13,0,0,107,108,5,22,0,0,108,109,5,23,
	0,0,109,110,3,10,5,0,110,111,3,22,11,0,111,112,3,24,12,0,112,113,3,28,14,
	0,113,114,5,24,0,0,114,21,1,0,0,0,115,116,5,9,0,0,116,117,5,18,0,0,117,
	118,5,26,0,0,118,23,1,0,0,0,119,120,5,10,0,0,120,121,5,18,0,0,121,122,3,
	12,6,0,122,25,1,0,0,0,123,124,5,11,0,0,124,125,5,18,0,0,125,126,5,26,0,
	0,126,127,5,21,0,0,127,128,5,25,0,0,128,129,5,22,0,0,129,130,5,12,0,0,130,
	131,5,26,0,0,131,27,1,0,0,0,132,133,5,7,0,0,133,137,5,18,0,0,134,136,3,
	30,15,0,135,134,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,
	138,29,1,0,0,0,139,137,1,0,0,0,140,141,5,26,0,0,141,142,5,19,0,0,142,143,
	3,34,17,0,143,144,5,20,0,0,144,145,5,26,0,0,145,146,5,19,0,0,146,147,3,
	34,17,0,147,148,5,19,0,0,148,149,3,32,16,0,149,31,1,0,0,0,150,151,7,0,0,
	0,151,33,1,0,0,0,152,153,7,1,0,0,153,35,1,0,0,0,7,38,40,45,55,73,85,137];

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
	public EOF(): TerminalNode {
		return this.getToken(TuringParser.EOF, 0);
	}
	public subrutina_list(): SubrutinaContext[] {
		return this.getTypedRuleContexts(SubrutinaContext) as SubrutinaContext[];
	}
	public subrutina(i: number): SubrutinaContext {
		return this.getTypedRuleContext(SubrutinaContext, i) as SubrutinaContext;
	}
	public maquina_list(): MaquinaContext[] {
		return this.getTypedRuleContexts(MaquinaContext) as MaquinaContext[];
	}
	public maquina(i: number): MaquinaContext {
		return this.getTypedRuleContext(MaquinaContext, i) as MaquinaContext;
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


export class MaquinaContext extends ParserRuleContext {
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
	public nombreMaquina(): NombreMaquinaContext {
		return this.getTypedRuleContext(NombreMaquinaContext, 0) as NombreMaquinaContext;
	}
	public usoSubrutina_list(): UsoSubrutinaContext[] {
		return this.getTypedRuleContexts(UsoSubrutinaContext) as UsoSubrutinaContext[];
	}
	public usoSubrutina(i: number): UsoSubrutinaContext {
		return this.getTypedRuleContext(UsoSubrutinaContext, i) as UsoSubrutinaContext;
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_maquina;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterMaquina) {
	 		listener.enterMaquina(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitMaquina) {
	 		listener.exitMaquina(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitMaquina) {
			return visitor.visitMaquina(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NombreMaquinaContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MAQUINA(): TerminalNode {
		return this.getToken(TuringParser.MAQUINA, 0);
	}
	public DOS_PUNTOS(): TerminalNode {
		return this.getToken(TuringParser.DOS_PUNTOS, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(TuringParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_nombreMaquina;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterNombreMaquina) {
	 		listener.enterNombreMaquina(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitNombreMaquina) {
	 		listener.exitNombreMaquina(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitNombreMaquina) {
			return visitor.visitNombreMaquina(this);
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
	public listaEstados(): ListaEstadosContext {
		return this.getTypedRuleContext(ListaEstadosContext, 0) as ListaEstadosContext;
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


export class SubrutinaContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SUBRUTINA(): TerminalNode {
		return this.getToken(TuringParser.SUBRUTINA, 0);
	}
	public DOS_PUNTOS_list(): TerminalNode[] {
	    	return this.getTokens(TuringParser.DOS_PUNTOS);
	}
	public DOS_PUNTOS(i: number): TerminalNode {
		return this.getToken(TuringParser.DOS_PUNTOS, i);
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(TuringParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(TuringParser.ID, i);
	}
	public PARENTESIS_IZQ(): TerminalNode {
		return this.getToken(TuringParser.PARENTESIS_IZQ, 0);
	}
	public ENTERO(): TerminalNode {
		return this.getToken(TuringParser.ENTERO, 0);
	}
	public PARENTESIS_DER(): TerminalNode {
		return this.getToken(TuringParser.PARENTESIS_DER, 0);
	}
	public LLAVE_IZQ(): TerminalNode {
		return this.getToken(TuringParser.LLAVE_IZQ, 0);
	}
	public estados(): EstadosContext {
		return this.getTypedRuleContext(EstadosContext, 0) as EstadosContext;
	}
	public entradaSubrutina(): EntradaSubrutinaContext {
		return this.getTypedRuleContext(EntradaSubrutinaContext, 0) as EntradaSubrutinaContext;
	}
	public salidaSubrutina(): SalidaSubrutinaContext {
		return this.getTypedRuleContext(SalidaSubrutinaContext, 0) as SalidaSubrutinaContext;
	}
	public transiciones(): TransicionesContext {
		return this.getTypedRuleContext(TransicionesContext, 0) as TransicionesContext;
	}
	public LLAVE_DER(): TerminalNode {
		return this.getToken(TuringParser.LLAVE_DER, 0);
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_subrutina;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterSubrutina) {
	 		listener.enterSubrutina(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitSubrutina) {
	 		listener.exitSubrutina(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitSubrutina) {
			return visitor.visitSubrutina(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntradaSubrutinaContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENTRADA(): TerminalNode {
		return this.getToken(TuringParser.ENTRADA, 0);
	}
	public DOS_PUNTOS(): TerminalNode {
		return this.getToken(TuringParser.DOS_PUNTOS, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(TuringParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_entradaSubrutina;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterEntradaSubrutina) {
	 		listener.enterEntradaSubrutina(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitEntradaSubrutina) {
	 		listener.exitEntradaSubrutina(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitEntradaSubrutina) {
			return visitor.visitEntradaSubrutina(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SalidaSubrutinaContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SALIDA(): TerminalNode {
		return this.getToken(TuringParser.SALIDA, 0);
	}
	public DOS_PUNTOS(): TerminalNode {
		return this.getToken(TuringParser.DOS_PUNTOS, 0);
	}
	public listaEstados(): ListaEstadosContext {
		return this.getTypedRuleContext(ListaEstadosContext, 0) as ListaEstadosContext;
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_salidaSubrutina;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterSalidaSubrutina) {
	 		listener.enterSalidaSubrutina(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitSalidaSubrutina) {
	 		listener.exitSalidaSubrutina(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitSalidaSubrutina) {
			return visitor.visitSalidaSubrutina(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsoSubrutinaContext extends ParserRuleContext {
	constructor(parser?: TuringParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public USA(): TerminalNode {
		return this.getToken(TuringParser.USA, 0);
	}
	public DOS_PUNTOS(): TerminalNode {
		return this.getToken(TuringParser.DOS_PUNTOS, 0);
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(TuringParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(TuringParser.ID, i);
	}
	public PARENTESIS_IZQ(): TerminalNode {
		return this.getToken(TuringParser.PARENTESIS_IZQ, 0);
	}
	public NUMERO(): TerminalNode {
		return this.getToken(TuringParser.NUMERO, 0);
	}
	public PARENTESIS_DER(): TerminalNode {
		return this.getToken(TuringParser.PARENTESIS_DER, 0);
	}
	public COMO(): TerminalNode {
		return this.getToken(TuringParser.COMO, 0);
	}
    public get ruleIndex(): number {
    	return TuringParser.RULE_usoSubrutina;
	}
	public enterRule(listener: TuringListener): void {
	    if(listener.enterUsoSubrutina) {
	 		listener.enterUsoSubrutina(this);
		}
	}
	public exitRule(listener: TuringListener): void {
	    if(listener.exitUsoSubrutina) {
	 		listener.exitUsoSubrutina(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TuringVisitor<Result>): Result {
		if (visitor.visitUsoSubrutina) {
			return visitor.visitUsoSubrutina(this);
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
