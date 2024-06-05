import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { FieldMapperLexer } from './antlr/FieldMapperLexer';
import { FieldMapperParser } from './antlr/FieldMapperParser';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { ParseTree } from 'antlr4ts/tree/ParseTree';

class FormulaEvaluator implements ParseTreeVisitor<any> {
    private context: { [key: string]: any };

    constructor(context: { [key: string]: any }) {
        this.context = context;
    }

    visit(tree: ParseTree): any {
        return tree.accept(this);
    }

    visitChildren(node: ParseTree): any {
        let result = this.defaultResult();
        for (let i = 0; i < node.childCount; i++) {
            const childResult = node.getChild(i).accept(this);
            result = this.aggregateResult(result, childResult);
        }
        return result;
    }

    visitTerminal(node: ParseTree): any {
        const text = node.text;
        console.log(`Terminal: ${text}`);
        if (this.context.hasOwnProperty(text)) {
            console.log(`Resolved context value for ${text}: ${this.context[text]}`);
            return this.context[text];
        }
        return text;
    }

    visitErrorNode(node: ParseTree): any {
        throw new Error(`Error in parsing: ${node.text}`);
    }

    protected defaultResult(): any {
        return null;
    }

    protected aggregateResult(aggregate: any, nextResult: any): any {
        return nextResult;
    }

    visitFunctionCall(ctx: any): any {
        const functionName = ctx.ALPHABETIC_TOKEN().text;
        const args = ctx.argumentList() ? ctx.argumentList().rhsExpRef().map((child: ParseTree) => child.accept(this)) : [];

        console.log(`Function Call: ${functionName} with args ${args}`);

        if (functionName === 'IF') {
            const [condition, trueResult, falseResult] = args;
            console.log(`IF condition: ${condition}, trueResult: ${trueResult}, falseResult: ${falseResult}`);
            return condition ? trueResult : falseResult;
        }

        if (functionName === 'CONCAT') {
            return args.reduce((acc: string, curr: string) => acc + curr, "");
        }
    }

    visitLogicalExp(ctx: any): any {
        let left = ctx.concatExp(0).accept(this);
        for (let i = 1; i < ctx.concatExp().length; i++) {
            const operator = ctx.logicalOp(i - 1).text;
            const right = ctx.concatExp(i).accept(this);
            console.log(`Logical Exp: ${left} ${operator} ${right}`);
            if (operator === '>') return left > right;
            if (operator === '=') return left == right;
            if (operator === '<') return left < right;
            if (operator === '>=') return left >= right;
            if (operator === '<=') return left <= right;
            if (operator === '!=') return left != right;
        }
        return left;
    }

    visitConcatExp(ctx: any): any {
        let result = ctx.basicExp(0).accept(this);
        for (let i = 1; i < ctx.basicExp().length; i++) {
            result += ctx.basicExp(i).accept(this);
        }
        return result;
    }

    visitBasicExp(ctx: any): any {
        if (ctx.functionCall()) return ctx.functionCall().accept(this);
        if (ctx.primitive()) return ctx.primitive().accept(this);
        if (ctx.expGroup()) return ctx.expGroup().accept(this);
    }

    visitPrimitive(ctx: any): any {
        if (ctx.NUMBER()) return parseFloat(ctx.NUMBER().text);
        if (ctx.STRING_LITERAL()) return ctx.STRING_LITERAL().text.slice(1, -1);
        if (ctx.booleanRef()) return ctx.booleanRef().text === 'true';
        if (ctx.refId()) return ctx.refId().accept(this);
    }

    visitRefId(ctx: any): any {
        const text = ctx.text;
        console.log(`Reference ID: ${text}`);
        if (this.context.hasOwnProperty(text)) {
            console.log(`Resolved context value for ${text}: ${this.context[text]}`);
            return this.context[text];
        }
        return text;
    }
}


function parseInput() {
    const input = (document.getElementById('input') as HTMLTextAreaElement).value;
    const campaignValue = (document.getElementById('campaignValue') as HTMLInputElement).valueAsNumber;
    const chars = CharStreams.fromString(input);
    const lexer = new FieldMapperLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new FieldMapperParser(tokens);

    const tree = parser.formula(); // Call the start rule of your parser

    const context = { CampaignValue: campaignValue || 0  };
    const evaluator = new FormulaEvaluator(context);
    const result = evaluator.visit(tree);

    const parseTreeElement = document.getElementById('parseTree');
    const evaluationResultElement = document.getElementById('evaluationResult');
    if (parseTreeElement && evaluationResultElement) {
        parseTreeElement.textContent = `Parse Tree:\n${tree.toStringTree(parser.ruleNames)}`;
        evaluationResultElement.textContent = `Evaluation Result: ${result}`;
    }
}


// Expose the parseInput function to the global scope
(window as any).parseInput = parseInput;
