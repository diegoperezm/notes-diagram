/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var grammarDagreD3 = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[9,15,17,23],$V1=[1,8],$V2=[1,9],$V3=[1,10],$V4=[1,15,17,23],$V5=[1,18],$V6=[1,26],$V7=[1,27],$V8=[1,30],$V9=[1,9,15,17,23,30,34],$Va=[1,43],$Vb=[1,44],$Vc=[1,46],$Vd=[1,47],$Ve=[1,61],$Vf=[1,62],$Vg=[1,64],$Vh=[1,65],$Vi=[1,9,11,15,17,23,26,34],$Vj=[4,7],$Vk=[1,9,11,15,17,23,30,32,34],$Vl=[1,9,15,17,23,34];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"mnumber":3,"NUMBER":4,"data":5,"[":6,"]":7,"\"":8,"LOWERCASE":9,"mdata":10,":":11,"context":12,"CONTEXT":13,"states":14,"ID":15,"INITIAL":16,"UPPERCASE":17,"mactions":18,"mentry":19,"mexit":20,"minvokes":21,"FINAL":22,"INVOKE":23,"SRC":24,"ONDONE":25,"ONERROR":26,"mstates":27,"actions":28,"invokes":29,"@":30,"entry":31,"ENTRY":32,"exit":33,"EXIT":34,"expressions":35,"$accept":0,"$end":1},
terminals_: {2:"error",4:"NUMBER",6:"[",7:"]",8:"\"",9:"LOWERCASE",11:":",13:"CONTEXT",15:"ID",16:"INITIAL",17:"UPPERCASE",22:"FINAL",23:"INVOKE",24:"SRC",25:"ONDONE",26:"ONERROR",30:"@",32:"ENTRY",34:"EXIT"},
productions_: [0,[3,2],[3,2],[5,2],[5,2],[5,3],[5,1],[5,3],[5,3],[10,3],[12,0],[12,2],[12,2],[14,6],[14,6],[14,7],[14,7],[14,8],[14,1],[14,2],[14,3],[14,4],[14,5],[14,4],[14,6],[14,7],[14,5],[14,6],[14,8],[14,9],[14,7],[14,8],[14,8],[14,9],[14,3],[14,4],[14,5],[14,5],[14,6],[14,2],[14,9],[14,10],[14,10],[14,11],[27,1],[27,2],[28,1],[28,2],[18,2],[18,2],[29,1],[29,2],[21,2],[21,2],[31,1],[31,2],[19,2],[19,2],[33,1],[33,2],[20,2],[20,2],[35,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
this.$=[+$$[$0-1],+$$[$0]]
break;
case 2:
this.$=[...$$[$0-1],+$$[$0]]
break;
case 3:
this.$=[[]]
break;
case 4:
this.$=[""]
break;
case 5:
this.$=[$$[$0-1]]
break;
case 6:
this.$=[+$$[$0]]
break;
case 7:
this.$=[[+$$[$0-1]]]
break;
case 8:
this.$=[[$$[$0-1]]]
break;
case 9:
this.$=[$$[$0-2],...$$[$0]]
break;
case 13:

  states.push("INITIAL",$$[$0-2],$$[$0]);  
  edges.push(["INITIAL",$$[$0-2],"", "INITIAL"+"-"+$$[$0-2]+"-"+"xstate.init"]);
  edges.push([$$[$0-2],$$[$0],$$[$0-1],$$[$0-2]+"-"+$$[$0]+"-"+$$[$0-1] ]);

break;
case 14: case 24: case 27:

  states.push("INITIAL",$$[$0-2]);  
  edges.push(["INITIAL",$$[$0-2],"", "INITIAL"+"-"+$$[$0-2]+"-"+"xstate.init"]);

break;
case 15: case 16: case 30:

  states.push("INITIAL",$$[$0-3],$$[$0-1]);  
  edges.push(["INITIAL",$$[$0-3],"", "INITIAL"+"-"+$$[$0-3]+"-"+"xstate.init"]);
  edges.push([$$[$0-3],$$[$0-1],$$[$0-2],$$[$0-3]+"-"+$$[$0-1]+"-"+$$[$0-2] ]);

break;
case 17: case 28: case 31: case 32:

  states.push("INITIAL",$$[$0-4],$$[$0-2]);  
  edges.push(["INITIAL",$$[$0-4],"", "INITIAL"+"-"+$$[$0-4]+"-"+"xstate.init"]);
  edges.push([$$[$0-4],$$[$0-2],$$[$0-3],$$[$0-4]+"-"+$$[$0-2]+"-"+$$[$0-3] ]);

break;
case 18:

  if(!states.includes($$[$0])) {
    states.push($$[$0]);
  }

break;
case 19:

  if(!states.includes($$[$0-1])) {
    states.push($$[$0-1]);
  }
 let invokeIndex = invokes.map(ele => ele.id).indexOf(...$$[$0]);
 edges.push([
           $$[$0-1],
           invokes[invokeIndex].onDone,
           'onDone',
           $$[$0-1]+"-"+ invokes[invokeIndex].onDone+"-"+"done.invoke." + invokes[invokeIndex].id
          ],
          [
           $$[$0-1],
           invokes[invokeIndex].onError,
           'onError',
           $$[$0-1]+"-"+ invokes[invokeIndex].onError+"-"+"error.platform." + invokes[invokeIndex].id

           ],
 );

break;
case 20:

  if(!states.includes($$[$0-2])) {
    states.push($$[$0-2]);
  }
  if(!states.includes($$[$0])) {
    states.push($$[$0]);
  }
  edges.push([$$[$0-2], $$[$0], $$[$0-1],$$[$0-2]+"-"+$$[$0]+"-"+$$[$0-1]]);

break;
case 21: case 23:

  if(!states.includes($$[$0-3])) {
    states.push($$[$0-3]);
  }
  if(!states.includes($$[$0-1])) {
    states.push($$[$0-1]);
  }
  edges.push([$$[$0-3], $$[$0-1], $$[$0-2],$$[$0-3]+"-"+$$[$0-1]+"-"+$$[$0-2]]);

break;
case 22: case 36: case 37:

  if(!states.includes($$[$0-4])) {
    states.push($$[$0-4]);
  }
  if(!states.includes($$[$0-2])) {
    states.push($$[$0-2]);
  }
  edges.push([$$[$0-4], $$[$0-2], $$[$0-3],$$[$0-4]+"-"+$$[$0-2]+"-"+$$[$0-3]]);

break;
case 25:

  states.push("INITIAL",$$[$0-3]);  
  edges.push(["INITIAL",$$[$0-3],"", "INITIAL"+"-"+$$[$0-3]+"-"+"xstate.init"]);

break;
case 26:

  let invokeIndexS = invokes.map(ele => ele.id).indexOf(...$$[$0]);
  states.push("INITIAL");  
  states.push($$[$0-1]);  
  states.push(invokes[invokeIndexS].onDone);
  states.push(invokes[invokeIndexS].onError);
  
  edges.push(["INITIAL",$$[$0-1],"", "INITIAL"+"-"+$$[$0-1]+"-"+"xstate.init"]);
  edges.push([
           $$[$0-1],
           invokes[invokeIndexS].onDone,
           'onDone',
           $$[$0-1] + "-" + invokes[invokeIndexS].onDone+"-"+"done.invoke." + invokes[invokeIndexS].id
          ],
          [
           $$[$0-1],
           invokes[invokeIndexS].onError,
           'onError',
           $$[$0-1]  + "-" + invokes[invokeIndexS].onError+"-"+"error.platform." + invokes[invokeIndexS].id
           ],
 );


break;
case 29:

  states.push("INITIAL",$$[$0-5],$$[$0-3]);  
  edges.push([1]);
  edges.push(["INITIAL",$$[$0-5],"", "INITIAL"+"-"+$$[$0-5]+"-"+"xstate.init"]);
  edges.push([$$[$0-5],$$[$0-3],$$[$0-4],$$[$0-5]+"-"+$$[$0-3]+"-"+$$[$0-4] ]);

break;
case 33:

  states.push("INITIAL",$$[$0-5],$$[$0-3]);  
  edges.push(["INITIAL",$$[$0-5],"", "INITIAL"+"-"+$$[$0-5]+"-"+"xstate.init"]);
  edges.push([$$[$0-5],$$[$0-3],$$[$0-4],$$[$0-5]+"-"+$$[$0-3]+"-"+$$[$0-4] ]);

break;
case 34:

  if(!states.includes($$[$0-2])) {
    states.push($$[$0-2]);
  }
  edges.push([$$[$0-2],"",$$[$0-1], $$[$0-2]+"-"+$$[$0-1]]);

break;
case 35:

  if(!states.includes($$[$0-3])) {
    states.push($$[$0-3]);
  }
  if(!states.includes($$[$0-1])) {
    states.push($$[$0-1]);
  }

  edges.push([$$[$0-3], $$[$0-1], $$[$0-2],$$[$0-3]+"-"+$$[$0-1]+"-"+$$[$0-2]]);

break;
case 38:

  if(!states.includes($$[$0-5])) {
    states.push($$[$0-5]);
  }
  if(!states.includes($$[$0-3])) {
    states.push($$[$0-3]);
  }
  edges.push([$$[$0-5], $$[$0-3], $$[$0-4],$$[$0-5]+"-"+$$[$0-3]+"-"+$$[$0-4]]);

break;
case 39:

  if(!states.includes($$[$0-1])) {
    states.push($$[$0-1]);
  }
    states.push("FINAL");
    edges.push([$$[$0-1], "FINAL", ""]);

break;
case 40:

    let  objInvoke      = {};
    objInvoke.id        = $$[$0-6]; 
    objInvoke.onDone    = $$[$0-2]; 
    objInvoke.onError   = $$[$0]; 
    invokes.push(objInvoke);

break;
case 41:

  let objInvokeOnDoneAct             = {}; 
  objInvokeOnDoneAct.id              = $$[$0-7];
  objInvokeOnDoneAct.onDone          = $$[$0-3];
  objInvokeOnDoneAct.onError         = $$[$0];
  invokes.push(objInvokeOnDoneAct);

break;
case 42:

  let objInvokeOnErrorAct              = {}; 
  objInvokeOnErrorAct.id               = $$[$0-7];
  objInvokeOnErrorAct.onDone           = $$[$0-3];   
  objInvokeOnErrorAct.onError          = $$[$0-1]; 
  invokes.push(objInvokeOnErrorAct);

 
break;
case 43:

  let objInvokeOnDoneErrorAct             = {}; 
  objInvokeOnDoneErrorAct.id              = $$[$0-8];
  objInvokeOnDoneErrorAct.onDone          = $$[$0-4];
  objInvokeOnDoneErrorAct.onError         = $$[$0-1];
  invokes.push(objInvokeOnDoneErrorAct);

break;
case 46: case 47: case 50: case 51: case 54: case 55: case 58: case 59:
this.$=$$[$0]
break;
case 48:

  this.$=[$$[$0]].reduce((acc,val) => acc.concat(val),[]);

break;
case 49: case 53:

  this.$=[$$[$0-1],$$[$0]].reduce((acc,val) => acc.concat(val),[]);

break;
case 52:

 this.$=[$$[$0]].reduce((acc,val) => acc.concat(val),[]);

break;
case 62:


let temp = [states, edges]; 
states   = [];
edges    = [];

return temp; 

break;
}
},
table: [o($V0,[2,10],{35:1,12:2,13:[1,3]}),{1:[3]},{9:[1,7],10:5,14:6,15:$V1,17:$V2,23:$V3,27:4},{11:[1,11]},{1:[2,62],14:12,15:$V1,17:$V2,23:$V3},o($V0,[2,12]),o($V4,[2,44]),{11:[1,13]},{9:[1,14]},o($V4,[2,18],{21:15,9:[1,16],22:[1,17],30:$V5}),{15:[1,19]},o($V0,[2,11]),o($V4,[2,45]),{4:[1,23],5:20,6:[1,21],8:[1,22]},{16:[1,24]},o($V4,[2,19],{29:25,9:$V6,30:$V7}),{11:$V8,17:[1,28],18:29},o($V4,[2,39]),{9:$V6,29:31,30:$V7},{9:[1,32]},o($V0,[2,9]),{3:35,4:[1,34],7:[1,33]},{8:[1,36],9:[1,37]},o($V0,[2,6]),{17:[1,38]},o($V9,[2,53]),o($V9,[2,50]),{9:[1,39]},o($V4,[2,20],{19:40,20:41,18:42,11:$V8,32:$Va,34:$Vb}),o($V4,[2,34],{28:45,9:$Vc,11:$Vd}),{9:$Vc,11:$Vd,28:48},o($V9,[2,52]),{24:[1,49]},o($V0,[2,3]),{4:[1,51],7:[1,50]},{4:[1,53],7:[1,52]},o($V0,[2,4]),{8:[1,54]},{9:[1,55],19:56,21:57,30:$V5,32:$Va},o($V9,[2,51]),o($V4,[2,21],{20:58,18:59,31:60,9:$Ve,11:$V8,32:$Vf,34:$Vb}),o($V4,[2,23],{33:63,9:$Vg,34:$Vh}),o($V4,[2,35],{28:45,20:66,9:$Vc,11:$Vd,34:$Vb}),{9:$Ve,31:67,32:$Vf},{9:$Vg,33:68,34:$Vh},o($Vi,[2,49]),o($Vi,[2,46]),{9:[1,69]},o($Vi,[2,48]),{9:[1,70]},o($V0,[2,7]),o($Vj,[2,1]),o($V0,[2,8]),o($Vj,[2,2]),o($V0,[2,5]),{11:$V8,17:[1,71],18:72},{9:$Ve,21:73,30:$V5,31:60,32:$Vf},o($V4,[2,26],{29:25,20:74,9:$V6,30:$V7,34:$Vb}),o($V4,[2,22],{33:63,9:$Vg,34:$Vh}),o($V4,[2,37],{28:45,20:75,9:$Vc,11:$Vd,34:$Vb}),o($Vk,[2,57]),o($Vk,[2,54]),{9:[1,76]},o($Vl,[2,61]),o($Vl,[2,58]),{9:[1,77]},o($V4,[2,36],{33:63,9:$Vg,34:$Vh}),o($Vk,[2,56]),o($Vl,[2,60]),o($Vi,[2,47]),{25:[1,78]},o($V4,[2,13],{19:79,20:80,21:81,18:82,11:$V8,30:$V5,32:$Va,34:$Vb}),o($V4,[2,14],{28:45,9:$Vc,11:$Vd}),o($V4,[2,24],{29:25,20:83,9:$V6,30:$V7,34:$Vb}),o($V4,[2,27],{33:63,9:$Vg,34:$Vh}),o($V4,[2,38],{33:63,9:$Vg,34:$Vh}),o($Vk,[2,55]),o($Vl,[2,59]),{17:[1,84]},o($V4,[2,15],{31:60,20:85,21:86,18:87,9:$Ve,11:$V8,30:$V5,32:$Vf,34:$Vb}),o($V4,[2,16],{33:63,9:$Vg,34:$Vh}),{9:$V6,20:88,29:25,30:$V7,34:$Vb},o($V4,[2,30],{28:45,20:89,9:$Vc,11:$Vd,34:$Vb}),o($V4,[2,25],{33:63,9:$Vg,34:$Vh}),{11:$V8,18:91,26:[1,90]},o($V4,[2,17],{33:63,9:$Vg,34:$Vh}),{9:$V6,20:92,29:25,30:$V7,34:$Vb},o($V4,[2,32],{28:45,20:93,9:$Vc,11:$Vd,34:$Vb}),o($V4,[2,28],{33:63,9:$Vg,34:$Vh}),o($V4,[2,31],{33:63,9:$Vg,34:$Vh}),{17:[1,94]},{9:$Vc,11:$Vd,26:[1,95],28:45},o($V4,[2,29],{33:63,9:$Vg,34:$Vh}),o($V4,[2,33],{33:63,9:$Vg,34:$Vh}),o($V4,[2,40],{18:96,11:$V8}),{17:[1,97]},o($V4,[2,42],{28:45,9:$Vc,11:$Vd}),o($V4,[2,41],{18:98,11:$V8}),o($V4,[2,43],{28:45,9:$Vc,11:$Vd})],
defaultActions: {},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

let invokes = [];
let states  = [];
let edges   = [];
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 16
break;
case 2:return 13
break;
case 3:return 23
break;
case 4:return 15
break;
case 5:return 24
break;
case 6:return 25
break;
case 7:return 26
break;
case 8:return 32
break;
case 9:return 34
break;
case 10:return 22
break;
case 11:return 4
break;
case 12:return 9
break;
case 13:return 17
break;
case 14:return 11
break;
case 15:return 8
break;
case 16:return 30
break;
case 17:return 6
break;
case 18:return 7
break;
}
},
rules: [/^(?:\s+)/,/^(?:\*)/,/^(?:context\b)/,/^(?:invoke:)/,/^(?:id:)/,/^(?:src:)/,/^(?:ondone:)/,/^(?:onerror:)/,/^(?:entry:)/,/^(?:exit:)/,/^(?:final\b)/,/^(?:[0-9]+)/,/^(?:[a-z0-9-]+)/,/^(?:[A-Z0-9-]+)/,/^(?::)/,/^(?:")/,/^(?:@)/,/^(?:\[)/,/^(?:\])/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammarDagreD3;
exports.Parser = grammarDagreD3.Parser;
exports.parse = function () { return grammarDagreD3.parse.apply(grammarDagreD3, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}