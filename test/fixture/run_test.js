var assert = require('assert');
console.log('Try reading common.js module');
var sample = require('./sample.common.js');
console.log('    read successfully');

assert.equal(sample.ExportedSampleClass.staticMethod(), 'staticMethod()');

var obj = new sample.ExportedSampleClass();

assert.equal(obj.instanceMethod(), 'instanceMethod()');

console.log('Try reading amd module');

var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

global.define = require('amdefine')(module);

requirejs(['sample.amd'], function (sample2) {
    console.log('    read successfully');
    assert.equal(sample2.ExportedSampleClass.staticMethod(), 'staticMethod()');
    var obj = new sample2.ExportedSampleClass();
    assert.equal(obj.instanceMethod(), 'instanceMethod()');
});

