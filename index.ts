import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';

// Create the lexer and parser
let inputStream = new ANTLRInputStream("text");
let lexer = new MyGrammarLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new MyGrammarParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.compilationUnit();