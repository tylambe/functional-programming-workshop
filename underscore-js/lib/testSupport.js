(function() {
  'use strict';

  mocha.setup({ ui: 'bdd' });
  window.expect = chai.expect;

  window.onload = function() {
    window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();
  };

  // Disable native collection functions
  var nativeMap = Array.prototype.nativeMap;
  var nativeIndexOf = Array.prototype.indexOf;
  var nativeForEach = Array.prototype.forEach;
  var nativeFilter = Array.prototype.filter;
  var nativeReduce = Array.prototype.reduce;
  var nativeEvery = Array.prototype.every;
  var nativeSome = Array.prototype.some;

  before(function() {
    Array.prototype.map = null;
    Array.prototype.indexOf = null;
    Array.prototype.forEach = null;
    Array.prototype.filter = null;
    Array.prototype.reduce = null;
    Array.prototype.every = null;
    Array.prototype.some = null;
  });

  after(function() {
    Array.prototype.map = nativeMap;
    Array.prototype.indexOf = nativeIndexOf;
    Array.prototype.forEach = nativeForEach;
    Array.prototype.filter = nativeFilter;
    Array.prototype.reduce = nativeReduce;
    Array.prototype.every = nativeEvery;
    Array.prototype.some = nativeSome;
  });
}());
