lexer grammar FieldMapperLexer;

fragment AT					: '@';
fragment DIGIT				: [0-9] ;
fragment LETTER				: [a-zA-Z] ;


CONCAT                      : '&';
LEFT_PAREN                  : '(';
RIGHT_PAREN                 : ')';
WHITESPACE                  : (' ' | '\t')+ -> channel(HIDDEN); 
ARG_SEPARATOR               : ',';
EQ							: '=' ;
LT                          : '<';
GT                          :  '>';
LTE                         : '<=';
GTE                         : '>=';
NE                          : '<>';
OPEN_SQUARE_BR				: '[';
CLOSE_SQUARE_BR				: ']';
QUOTE						: '\'';
STRING_LITERAL              : '"' (~["\\\r\n])* '"';
NUMBER						: DIGIT+ ('.' DIGIT+)? ;
TRUE                        : 'True'|'TRUE'|'true';
FALSE                       : 'False'|'FALSE'|'false';
ALPHABETIC_TOKEN            : LETTER+;
ALPHANUMERIC_TOKEN			: [A-Za-z][A-Za-z0-9_\-]*;
SPECIALCHAR_TOKEN			: OPEN_SQUARE_BR ~']'+ CLOSE_SQUARE_BR;
