// Generated from ../grammar/FieldMapperParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { FieldMapperParserVisitor } from "./FieldMapperParserVisitor";


export class FieldMapperParser extends Parser {
	public static readonly CONCAT = 1;
	public static readonly LEFT_PAREN = 2;
	public static readonly RIGHT_PAREN = 3;
	public static readonly WHITESPACE = 4;
	public static readonly ARG_SEPARATOR = 5;
	public static readonly EQ = 6;
	public static readonly LT = 7;
	public static readonly GT = 8;
	public static readonly LTE = 9;
	public static readonly GTE = 10;
	public static readonly NE = 11;
	public static readonly OPEN_SQUARE_BR = 12;
	public static readonly CLOSE_SQUARE_BR = 13;
	public static readonly QUOTE = 14;
	public static readonly STRING_LITERAL = 15;
	public static readonly NUMBER = 16;
	public static readonly TRUE = 17;
	public static readonly FALSE = 18;
	public static readonly ALPHABETIC_TOKEN = 19;
	public static readonly ALPHANUMERIC_TOKEN = 20;
	public static readonly SPECIALCHAR_TOKEN = 21;
	public static readonly RULE_formula = 0;
	public static readonly RULE_rhsExpRef = 1;
	public static readonly RULE_logicalExp = 2;
	public static readonly RULE_logicalOp = 3;
	public static readonly RULE_concatExp = 4;
	public static readonly RULE_basicExp = 5;
	public static readonly RULE_functionCall = 6;
	public static readonly RULE_argumentList = 7;
	public static readonly RULE_expGroup = 8;
	public static readonly RULE_booleanRef = 9;
	public static readonly RULE_primitive = 10;
	public static readonly RULE_refId = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"formula", "rhsExpRef", "logicalExp", "logicalOp", "concatExp", "basicExp", 
		"functionCall", "argumentList", "expGroup", "booleanRef", "primitive", 
		"refId",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'&'", "'('", "')'", undefined, "','", "'='", "'<'", "'>'", 
		"'<='", "'>='", "'<>'", "'['", "']'", "'''",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CONCAT", "LEFT_PAREN", "RIGHT_PAREN", "WHITESPACE", "ARG_SEPARATOR", 
		"EQ", "LT", "GT", "LTE", "GTE", "NE", "OPEN_SQUARE_BR", "CLOSE_SQUARE_BR", 
		"QUOTE", "STRING_LITERAL", "NUMBER", "TRUE", "FALSE", "ALPHABETIC_TOKEN", 
		"ALPHANUMERIC_TOKEN", "SPECIALCHAR_TOKEN",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FieldMapperParser._LITERAL_NAMES, FieldMapperParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FieldMapperParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FieldMapperParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return FieldMapperParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FieldMapperParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FieldMapperParser._ATN, this);
	}
	// @RuleVersion(0)
	public formula(): FormulaContext {
		let _localctx: FormulaContext = new FormulaContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FieldMapperParser.RULE_formula);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.concatExp();
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
	public rhsExpRef(): RhsExpRefContext {
		let _localctx: RhsExpRefContext = new RhsExpRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FieldMapperParser.RULE_rhsExpRef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.logicalExp();
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
	public logicalExp(): LogicalExpContext {
		let _localctx: LogicalExpContext = new LogicalExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FieldMapperParser.RULE_logicalExp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.concatExp();
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FieldMapperParser.EQ) | (1 << FieldMapperParser.LT) | (1 << FieldMapperParser.GT) | (1 << FieldMapperParser.LTE) | (1 << FieldMapperParser.GTE) | (1 << FieldMapperParser.NE))) !== 0)) {
				{
				{
				this.state = 29;
				this.logicalOp();
				this.state = 30;
				this.concatExp();
				}
				}
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public logicalOp(): LogicalOpContext {
		let _localctx: LogicalOpContext = new LogicalOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FieldMapperParser.RULE_logicalOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FieldMapperParser.EQ) | (1 << FieldMapperParser.LT) | (1 << FieldMapperParser.GT) | (1 << FieldMapperParser.LTE) | (1 << FieldMapperParser.GTE) | (1 << FieldMapperParser.NE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public concatExp(): ConcatExpContext {
		let _localctx: ConcatExpContext = new ConcatExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FieldMapperParser.RULE_concatExp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.basicExp();
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FieldMapperParser.CONCAT) {
				{
				{
				this.state = 40;
				this.match(FieldMapperParser.CONCAT);
				this.state = 41;
				this.basicExp();
				}
				}
				this.state = 46;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public basicExp(): BasicExpContext {
		let _localctx: BasicExpContext = new BasicExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FieldMapperParser.RULE_basicExp);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 47;
				this.functionCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 48;
				this.primitive();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 49;
				this.expGroup();
				}
				break;
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
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FieldMapperParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.match(FieldMapperParser.ALPHABETIC_TOKEN);
			this.state = 53;
			this.match(FieldMapperParser.LEFT_PAREN);
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FieldMapperParser.LEFT_PAREN) | (1 << FieldMapperParser.STRING_LITERAL) | (1 << FieldMapperParser.NUMBER) | (1 << FieldMapperParser.TRUE) | (1 << FieldMapperParser.FALSE) | (1 << FieldMapperParser.ALPHABETIC_TOKEN) | (1 << FieldMapperParser.ALPHANUMERIC_TOKEN) | (1 << FieldMapperParser.SPECIALCHAR_TOKEN))) !== 0)) {
				{
				this.state = 54;
				this.argumentList();
				}
			}

			this.state = 57;
			this.match(FieldMapperParser.RIGHT_PAREN);
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
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FieldMapperParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.rhsExpRef();
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FieldMapperParser.ARG_SEPARATOR) {
				{
				{
				this.state = 60;
				this.match(FieldMapperParser.ARG_SEPARATOR);
				this.state = 61;
				this.rhsExpRef();
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public expGroup(): ExpGroupContext {
		let _localctx: ExpGroupContext = new ExpGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FieldMapperParser.RULE_expGroup);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(FieldMapperParser.LEFT_PAREN);
			this.state = 68;
			this.rhsExpRef();
			this.state = 69;
			this.match(FieldMapperParser.RIGHT_PAREN);
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
	public booleanRef(): BooleanRefContext {
		let _localctx: BooleanRefContext = new BooleanRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FieldMapperParser.RULE_booleanRef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			_la = this._input.LA(1);
			if (!(_la === FieldMapperParser.TRUE || _la === FieldMapperParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public primitive(): PrimitiveContext {
		let _localctx: PrimitiveContext = new PrimitiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FieldMapperParser.RULE_primitive);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FieldMapperParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 73;
				this.match(FieldMapperParser.NUMBER);
				}
				break;
			case FieldMapperParser.TRUE:
			case FieldMapperParser.FALSE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 74;
				this.booleanRef();
				}
				break;
			case FieldMapperParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 75;
				this.match(FieldMapperParser.STRING_LITERAL);
				}
				break;
			case FieldMapperParser.ALPHABETIC_TOKEN:
			case FieldMapperParser.ALPHANUMERIC_TOKEN:
			case FieldMapperParser.SPECIALCHAR_TOKEN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 76;
				this.refId();
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
	public refId(): RefIdContext {
		let _localctx: RefIdContext = new RefIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FieldMapperParser.RULE_refId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FieldMapperParser.ALPHABETIC_TOKEN) | (1 << FieldMapperParser.ALPHANUMERIC_TOKEN) | (1 << FieldMapperParser.SPECIALCHAR_TOKEN))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17T\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04#" +
		"\n\x04\f\x04\x0E\x04&\v\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07" +
		"\x06-\n\x06\f\x06\x0E\x060\v\x06\x03\x07\x03\x07\x03\x07\x05\x075\n\x07" +
		"\x03\b\x03\b\x03\b\x05\b:\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\tA\n\t" +
		"\f\t\x0E\tD\v\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f" +
		"\x03\f\x05\fP\n\f\x03\r\x03\r\x03\r\x02\x02\x02\x0E\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x02\x05\x03\x02\b\r\x03\x02\x13\x14\x03\x02\x15\x17\x02P\x02\x1A\x03" +
		"\x02\x02\x02\x04\x1C\x03\x02\x02\x02\x06\x1E\x03\x02\x02\x02\b\'\x03\x02" +
		"\x02\x02\n)\x03\x02\x02\x02\f4\x03\x02\x02\x02\x0E6\x03\x02\x02\x02\x10" +
		"=\x03\x02\x02\x02\x12E\x03\x02\x02\x02\x14I\x03\x02\x02\x02\x16O\x03\x02" +
		"\x02\x02\x18Q\x03\x02\x02\x02\x1A\x1B\x05\n\x06\x02\x1B\x03\x03\x02\x02" +
		"\x02\x1C\x1D\x05\x06\x04\x02\x1D\x05\x03\x02\x02\x02\x1E$\x05\n\x06\x02" +
		"\x1F \x05\b\x05\x02 !\x05\n\x06\x02!#\x03\x02\x02\x02\"\x1F\x03\x02\x02" +
		"\x02#&\x03\x02\x02\x02$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%\x07\x03\x02" +
		"\x02\x02&$\x03\x02\x02\x02\'(\t\x02\x02\x02(\t\x03\x02\x02\x02).\x05\f" +
		"\x07\x02*+\x07\x03\x02\x02+-\x05\f\x07\x02,*\x03\x02\x02\x02-0\x03\x02" +
		"\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/\v\x03\x02\x02\x020.\x03" +
		"\x02\x02\x0215\x05\x0E\b\x0225\x05\x16\f\x0235\x05\x12\n\x0241\x03\x02" +
		"\x02\x0242\x03\x02\x02\x0243\x03\x02\x02\x025\r\x03\x02\x02\x0267\x07" +
		"\x15\x02\x0279\x07\x04\x02\x028:\x05\x10\t\x0298\x03\x02\x02\x029:\x03" +
		"\x02\x02\x02:;\x03\x02\x02\x02;<\x07\x05\x02\x02<\x0F\x03\x02\x02\x02" +
		"=B\x05\x04\x03\x02>?\x07\x07\x02\x02?A\x05\x04\x03\x02@>\x03\x02\x02\x02" +
		"AD\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02C\x11\x03\x02\x02" +
		"\x02DB\x03\x02\x02\x02EF\x07\x04\x02\x02FG\x05\x04\x03\x02GH\x07\x05\x02" +
		"\x02H\x13\x03\x02\x02\x02IJ\t\x03\x02\x02J\x15\x03\x02\x02\x02KP\x07\x12" +
		"\x02\x02LP\x05\x14\v\x02MP\x07\x11\x02\x02NP\x05\x18\r\x02OK\x03\x02\x02" +
		"\x02OL\x03\x02\x02\x02OM\x03\x02\x02\x02ON\x03\x02\x02\x02P\x17\x03\x02" +
		"\x02\x02QR\t\x04\x02\x02R\x19\x03\x02\x02\x02\b$.49BO";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FieldMapperParser.__ATN) {
			FieldMapperParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FieldMapperParser._serializedATN));
		}

		return FieldMapperParser.__ATN;
	}

}

export class FormulaContext extends ParserRuleContext {
	public concatExp(): ConcatExpContext {
		return this.getRuleContext(0, ConcatExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FieldMapperParser.RULE_formula; }
	// @Override
	public accept<Result>(visitor: FieldMapperParserVisitor<Result>): Result {
		if (visitor.visitFormula) {
			return visitor.visitFormula(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RhsExpRefContext extends ParserRuleContext {
	public logicalExp(): LogicalExpContext {
		return this.getRuleContext(0, LogicalExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FieldMapperParser.RULE_rhsExpRef; }
	// @Override
	public accept<Result>(visitor: FieldMapperParserVisitor<Result>): Result {
		if (visitor.visitRhsExpRef) {
			return visitor.visitRhsExpRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalExpContext extends ParserRuleContext {
	public concatExp(): ConcatExpContext[];
	public concatExp(i: number): ConcatExpContext;
	public concatExp(i?: number): ConcatExpContext | ConcatExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConcatExpContext);
		} else {
			return this.getRuleContext(i, ConcatExpContext);
		}
	}
	public logicalOp(): LogicalOpContext[];
	public logicalOp(i: number): LogicalOpContext;
	public logicalOp(i?: number): LogicalOpContext | LogicalOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalOpContext);
		} else {
			return this.getRuleContext(i, LogicalOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FieldMapperParser.RULE_logicalExp; }
	// @Override
	public accept<Result>(visitor: FieldMapperParserVisitor<Result>): Result {
		if (visitor.visitLogicalExp) {
			return visitor.visitLogicalExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOpContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(FieldMapperParser.EQ, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(FieldMapperParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(FieldMapperParser.LT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(FieldMapperParser.GTE, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(FieldMapperParser.LTE, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(FieldMapperParser.NE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FieldMapperParser.RULE_logicalOp; }
	// @Override
	public accept<Result>(visitor: FieldMapperParserVisitor<Result>): Result {
		if (visitor.visitLogicalOp) {
			return visitor.visitLogicalOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConcatExpContext extends ParserRuleContext {
	public basicExp(): BasicExpContext[];
	public basicExp(i: number): BasicExpContext;
	public basicExp(i?: number): BasicExpContext | BasicExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BasicExpContext);
		} else {
			return this.getRuleContext(i, BasicExpContext);
		}
	}
	public CONCAT(): TerminalNode[];
	public CONCAT(i: number): TerminalNode;
	public CONCAT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FieldMapperParser.CONCAT);
		} else {
			return this.getToken(FieldMapperParser.CONCAT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FieldMapperParser.RULE_concatExp; }
	// @Override
	public accept<Result>(visitor: FieldMapperParserVisitor<Result>): Result {
		if (visitor.visitConcatExp) {
			return visitor.visitConcatExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicExpContext extends ParserRuleContext {
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public primitive(): PrimitiveContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveContext);
	}
	public expGroup(): ExpGroupContext | undefined {
		return this.tryGetRuleContext(0, ExpGroupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FieldMapperParser.RULE_basicExp; }
	// @Override
	public accept<Result>(visitor: FieldMapperParserVisitor<Result>): Result {
		if (visitor.visitBasicExp) {
			return visitor.visitBasicExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public ALPHABETIC_TOKEN(): TerminalNode { return this.getToken(FieldMapperParser.ALPHABETIC_TOKEN, 0); }
	public LEFT_PAREN(): TerminalNode { return this.getToken(FieldMapperParser.LEFT_PAREN, 0); }
	public RIGHT_PAREN(): TerminalNode { return this.getToken(FieldMapperParser.RIGHT_PAREN, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FieldMapperParser.RULE_functionCall; }
	// @Override
	public accept<Result>(visitor: FieldMapperParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public rhsExpRef(): RhsExpRefContext[];
	public rhsExpRef(i: number): RhsExpRefContext;
	public rhsExpRef(i?: number): RhsExpRefContext | RhsExpRefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RhsExpRefContext);
		} else {
			return this.getRuleContext(i, RhsExpRefContext);
		}
	}
	public ARG_SEPARATOR(): TerminalNode[];
	public ARG_SEPARATOR(i: number): TerminalNode;
	public ARG_SEPARATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FieldMapperParser.ARG_SEPARATOR);
		} else {
			return this.getToken(FieldMapperParser.ARG_SEPARATOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FieldMapperParser.RULE_argumentList; }
	// @Override
	public accept<Result>(visitor: FieldMapperParserVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpGroupContext extends ParserRuleContext {
	public LEFT_PAREN(): TerminalNode { return this.getToken(FieldMapperParser.LEFT_PAREN, 0); }
	public rhsExpRef(): RhsExpRefContext {
		return this.getRuleContext(0, RhsExpRefContext);
	}
	public RIGHT_PAREN(): TerminalNode { return this.getToken(FieldMapperParser.RIGHT_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FieldMapperParser.RULE_expGroup; }
	// @Override
	public accept<Result>(visitor: FieldMapperParserVisitor<Result>): Result {
		if (visitor.visitExpGroup) {
			return visitor.visitExpGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanRefContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(FieldMapperParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(FieldMapperParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FieldMapperParser.RULE_booleanRef; }
	// @Override
	public accept<Result>(visitor: FieldMapperParserVisitor<Result>): Result {
		if (visitor.visitBooleanRef) {
			return visitor.visitBooleanRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(FieldMapperParser.NUMBER, 0); }
	public booleanRef(): BooleanRefContext | undefined {
		return this.tryGetRuleContext(0, BooleanRefContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FieldMapperParser.STRING_LITERAL, 0); }
	public refId(): RefIdContext | undefined {
		return this.tryGetRuleContext(0, RefIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FieldMapperParser.RULE_primitive; }
	// @Override
	public accept<Result>(visitor: FieldMapperParserVisitor<Result>): Result {
		if (visitor.visitPrimitive) {
			return visitor.visitPrimitive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RefIdContext extends ParserRuleContext {
	public SPECIALCHAR_TOKEN(): TerminalNode | undefined { return this.tryGetToken(FieldMapperParser.SPECIALCHAR_TOKEN, 0); }
	public ALPHABETIC_TOKEN(): TerminalNode | undefined { return this.tryGetToken(FieldMapperParser.ALPHABETIC_TOKEN, 0); }
	public ALPHANUMERIC_TOKEN(): TerminalNode | undefined { return this.tryGetToken(FieldMapperParser.ALPHANUMERIC_TOKEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FieldMapperParser.RULE_refId; }
	// @Override
	public accept<Result>(visitor: FieldMapperParserVisitor<Result>): Result {
		if (visitor.visitRefId) {
			return visitor.visitRefId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


