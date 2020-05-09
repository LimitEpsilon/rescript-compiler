'use strict';

var $$Array = require("../../lib/js/array.js");
var Caml_array = require("../../lib/js/caml_array.js");

function f(a, b, param) {
  return a + b | 0;
}

function f2(a) {
  return function (param) {
    return a + 1 | 0;
  };
}

var a = String(3);

var b = 101;

var arr = $$Array.init(2, (function (param) {
        return 0;
      }));

for(var i = 0; i <= 1; ++i){
  Caml_array.caml_array_set(arr, i, i + 1 | 0);
}

console.log(/* tuple */[
      a,
      b,
      arr
    ]);

var c = arr;

exports.f = f;
exports.f2 = f2;
exports.a = a;
exports.b = b;
exports.c = c;
/* a Not a pure module */
