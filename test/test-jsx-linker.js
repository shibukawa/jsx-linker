var JSX={};(function(JSX){function $__jsx_extend(b,e){var a=function(){};a.prototype=e.prototype;var c=new a;for(var d in b){b[d].prototype=c}}function $__jsx_merge_interface(c,b){for(var a in b.prototype)if(b.prototype.hasOwnProperty(a))c.prototype[a]=b.prototype[a]}function $__jsx_lazy_init(a,b,d){function c(a,b,c){delete a[b];a[b]=c;return c}Object.defineProperty(a,b,{get:function(){return c(a,b,d())},set:function(d){c(a,b,d)},enumerable:true,configurable:true})}function $__jsx_div_assign(a,b,c){return a[b]=a[b]/c|0}var $__jsx_parseInt=parseInt;var $__jsx_parseFloat=parseFloat;function $__jsx_isNaN(a){return a!==a}var $__jsx_isFinite=isFinite;var $__jsx_encodeURIComponent=encodeURIComponent;var $__jsx_decodeURIComponent=decodeURIComponent;var $__jsx_encodeURI=encodeURI;var $__jsx_decodeURI=decodeURI;var $__jsx_ObjectToString=Object.prototype.toString;var $__jsx_ObjectHasOwnProperty=Object.prototype.hasOwnProperty;function $__jsx_profiler(){}JSX.require=function(b){var a=$__jsx_classMap[b];return a!==undefined?a:null};JSX.profilerIsRunning=function(){return $__jsx_profiler.getResults!=null};JSX.getProfileResults=function(){return($__jsx_profiler.getResults||function(){return{}})()};JSX.postProfileResults=function(a,b){if($__jsx_profiler.postResults==null)throw new Error('profiler has not been turned on');return $__jsx_profiler.postResults(a,b)};JSX.resetProfileResults=function(){if($__jsx_profiler.resetResults==null)throw new Error('profiler has not been turned on');return $__jsx_profiler.resetResults()};JSX.DEBUG=false;function J(){};$__jsx_extend([J],Error);function _(){this.Q=true;this.O=true;this.A=0;this.E=0;this._=0;this.C=0;this.D=null;this.J=null;this.B=[]};$__jsx_extend([_],Object);_.prototype.H=function(){};_.prototype.I=function(){};_.prototype.M=function(c){var a;var b;b=this.D=c;a='1..'+(b.length+'');console.info(a)};_.prototype.beforeClass=_.prototype.M;_.prototype.L=function(){var a;if(this.B.length===0){N(this)}else{a=this.B.shift();a()}};_.prototype.afterClass=_.prototype.L;_.prototype.N=function(a,g){var c;var b;var d;var e;var f;a=a.replace(/[$].*$/,'');c=this.B.length;this.J=a;this.H();try{g()}catch(a){if(a instanceof Error){if(a instanceof C){b=a.message?' - '+a.message:''}else{b=' - failed with exception';if(a.message){b+=': '+a.message}}d='	not ok '+(++this._+'')+b;console.info(d);if(a.stack&&this.O){e=a.stack;f=e.replace(/^/gm,'# ');console.info(f)}}else{throw a}}if(c===this.B.length){L(this,a)}};_.prototype.run=_.prototype.N;function L(a,b){var c;var d;var e;a.I();++a.A;c='	1..'+(a._+'');console.info(c);if(a._===a.C){++a.E;d='ok '+(a.A+'')+' - '+b;console.info(d)}else{e='not ok '+(a.A+'')+' - '+b;console.info(e)}a._=0;a.C=0};function N(a){var b;var c;var d;var e;if(a.A!==a.E){b=(e=a.A)-a.E;c='tests failed '+(b+'')+' of '+(e+'');d=c.replace(/^/gm,'# ');console.info(d)}};function M(a,b){++a._;return new F(a,b)};function K(b,a,d,h,i){var c;var e;var f;var g;c=a!=null?' - '+a:'';e='	not ok '+(b._+'')+c;console.info(e);if(d!=null){f='comparing with '+d+c.replace(' - ',' for ');g=f.replace(/^/gm,'# ');console.info(g);D(b,'got:      ',h);D(b,'expected: ',i)}throw new C(a!=null?a:'')};function D(f,b,a){var c;var d;var e;if(typeof a==='object'){c=b.replace(/^/gm,'# ');console.info(c);console.dir(a)}else{d=b+(a+'');e=d.replace(/^/gm,'# ');console.info(e)}};_.prototype.toString=function(){return this.D!=null?'TestCase['+this.D.join(', ')+']':'TestCase'};function B(){_.call(this)};$__jsx_extend([B],_);B.prototype.H=function(){if(A._.existsSync('test.txt')){A._.unlinkSync('test.txt')}};B.prototype.I=function(){if(A._.existsSync('test.txt')){A._.unlinkSync('test.txt')}};B.prototype.P=function(){({});A._.writeFileSync('test.txt','Hello World','utf8');A._.existsSync('test.txt');P(M(this,A._.existsSync('test.txt')),true)};B.prototype.test_filewriter=B.prototype.P;function H(){};$__jsx_extend([H],Object);function I(){};$__jsx_extend([I],Object);function G(){};$__jsx_extend([G],Object);function S(a){console.log('Hello World');({});A._.writeFileSync('test.txt','Hello World','utf8');A._.existsSync('test.txt')};G.main=S;function A(){};$__jsx_extend([A],Object);function T(A){var _;_='require('+JSON.stringify(A)+')';return eval(_)};function Q(){};$__jsx_extend([Q],Object);function R(){};$__jsx_extend([R],Object);var js$0=function(){var a=function(){return this}();return{global:a,eval:a.eval,invoke:function(a,b,c){return a[b].apply(a,c)}}}();function E(a,b,c){this.G=a;this.K=b;this.F=c};function F(a,b){E.call(this,a,b,null)};$__jsx_extend([E,F],Object);function P(a,b){var c;O(a,(c=a.K)==b,c,b,'==')};function O(a,f,g,h,i){var b;var c;var d;var e;if(f){b=a.G;c=a.F;++b.C;d=c!=null?' - '+c:'';e='	ok '+(b._+'')+d;console.info(e)}else{K(a.G,a.F,i,g,h)}};function C(a){Error.call(this,a);this.message=a;this.name='TestCase.Failure';if(Error.captureStackTrace)Error.captureStackTrace(this,C)};$__jsx_extend([C],Error);$__jsx_lazy_init(A,'_',function(){return T('fs')});var $__jsx_classMap={'test-jsx-linker.jsx':{_Test:B},'../src/jsx-linker.jsx':{_Main:G}}}(JSX))