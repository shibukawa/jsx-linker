// generatedy by JSX compiler 0.9.65 (2013-09-10 22:05:42 +0900; 56dae7ea41e230ec1bfd940129342aa096ad35e1)
var JSX = {};
(function (JSX) {
/**
 * extends the class
 */
function $__jsx_extend(derivations, base) {
	var ctor = function () {};
	ctor.prototype = base.prototype;
	var proto = new ctor();
	for (var i in derivations) {
		derivations[i].prototype = proto;
	}
}

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

/**
 * sideeffect().a /= b
 */
function $__jsx_div_assign(obj, prop, divisor) {
	return obj[prop] = (obj[prop] / divisor) | 0;
}

/*
 * global functions, renamed to avoid conflict with local variable names
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
function $__jsx_isNaN(n) { return n !== n; }
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url, cb) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url, cb);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = true;
function StopIteration() {
	Error.call(this);
	this.name = "StopIteration";
	if (Error.captureStackTrace) Error.captureStackTrace(this, StopIteration);
};

$__jsx_extend([StopIteration], Error);
function SampleClass() {
	this.instanceVariable = "instanceVariable";
};

$__jsx_extend([SampleClass], Object);
SampleClass.prototype.instanceMethod$ = function () {
	return 'instanceMethod()';
};


function SampleClass$staticMethod$() {
	return "staticMethod()";
};

SampleClass.staticMethod$ = SampleClass$staticMethod$;

function ExportedSampleClass() {
	this.instanceVariable = "instanceVariable";
};

$__jsx_extend([ExportedSampleClass], Object);
ExportedSampleClass.prototype.instanceMethod$ = function () {
	return 'instanceMethod()';
};

ExportedSampleClass.prototype.instanceMethod = ExportedSampleClass.prototype.instanceMethod$;

function ExportedSampleClass$staticMethod$() {
	return "staticMethod()";
};

ExportedSampleClass.staticMethod = ExportedSampleClass$staticMethod$;
ExportedSampleClass.staticMethod$ = ExportedSampleClass$staticMethod$;

function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(argv) {
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

SampleClass.constVariable = "constVariable";
ExportedSampleClass.constVariable = "constVariable";

var $__jsx_classMap = {
	"system:lib/built-in.jsx": {
		StopIteration: StopIteration,
		StopIteration$: StopIteration
	},
	"test/sample-class.jsx": {
		SampleClass: SampleClass,
		SampleClass$: SampleClass,
		ExportedSampleClass: ExportedSampleClass,
		ExportedSampleClass$: ExportedSampleClass,
		_Main: _Main,
		_Main$: _Main
	}
};


})(JSX);
