(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tsRollupDemo = {}));
})(this, (function (exports) { 'use strict';

  var fn = function (data, y) {
      console.log('测试,watch');
      console.log('测试,watch');
      console.log('测试,watch');
      console.log(data, y);
  };
  // const test = () => {
  //   console.log('test');
  // };

  fn(1, 't');
  var foo = function (data) {
      console.log(data);
  };
  foo('1');

  exports.foo = foo;

}));
