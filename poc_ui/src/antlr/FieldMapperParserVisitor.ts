// Generated from ../grammar/FieldMapperParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FormulaContext } from "./FieldMapperParser";
import { RhsExpRefContext } from "./FieldMapperParser";
import { LogicalExpContext } from "./FieldMapperParser";
import { LogicalOpContext } from "./FieldMapperParser";
import { ConcatExpContext } from "./FieldMapperParser";
import { BasicExpContext } from "./FieldMapperParser";
import { FunctionCallContext } from "./FieldMapperParser";
import { ArgumentListContext } from "./FieldMapperParser";
import { ExpGroupContext } from "./FieldMapperParser";
import { BooleanRefContext } from "./FieldMapperParser";
import { PrimitiveContext } from "./FieldMapperParser";
import { RefIdContext } from "./FieldMapperParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FieldMapperParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FieldMapperParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FieldMapperParser.formula`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormula?: (ctx: FormulaContext) => Result;

	/**
	 * Visit a parse tree produced by `FieldMapperParser.rhsExpRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRhsExpRef?: (ctx: RhsExpRefContext) => Result;

	/**
	 * Visit a parse tree produced by `FieldMapperParser.logicalExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalExp?: (ctx: LogicalExpContext) => Result;

	/**
	 * Visit a parse tree produced by `FieldMapperParser.logicalOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOp?: (ctx: LogicalOpContext) => Result;

	/**
	 * Visit a parse tree produced by `FieldMapperParser.concatExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatExp?: (ctx: ConcatExpContext) => Result;

	/**
	 * Visit a parse tree produced by `FieldMapperParser.basicExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicExp?: (ctx: BasicExpContext) => Result;

	/**
	 * Visit a parse tree produced by `FieldMapperParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `FieldMapperParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `FieldMapperParser.expGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpGroup?: (ctx: ExpGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `FieldMapperParser.booleanRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanRef?: (ctx: BooleanRefContext) => Result;

	/**
	 * Visit a parse tree produced by `FieldMapperParser.primitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitive?: (ctx: PrimitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `FieldMapperParser.refId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefId?: (ctx: RefIdContext) => Result;
}

