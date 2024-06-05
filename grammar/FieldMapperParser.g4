parser grammar FieldMapperParser;
options {
	tokenVocab = FieldMapperLexer ;
}

formula					: concatExp; //rhsExpRef;

rhsExpRef				: logicalExp;

logicalExp				: concatExp (logicalOp concatExp)*;

logicalOp				: EQ | GT | LT | GTE | LTE | NE;
 
concatExp				: basicExp (CONCAT basicExp)*;

basicExp				: functionCall | primitive | expGroup;
 
functionCall			: ALPHABETIC_TOKEN LEFT_PAREN argumentList? RIGHT_PAREN;
 
argumentList			: rhsExpRef (ARG_SEPARATOR rhsExpRef)*;
 
expGroup				: LEFT_PAREN rhsExpRef RIGHT_PAREN;

booleanRef				: TRUE | FALSE;

primitive				: NUMBER | booleanRef | STRING_LITERAL | refId ;

refId                   : SPECIALCHAR_TOKEN| ALPHABETIC_TOKEN | ALPHANUMERIC_TOKEN;