/*jshint latedef: true */

var TT = require("../titao.js");
var assert = require("assert");

describe("Array", function () {
  describe("isArray()", function () {
    it("should return false when is not array", function () {
      assert.equal(false, TT.isArray({}));
      assert.equal(false, TT.isArray(1));
      assert.equal(false, TT.isArray("Array"));
      assert.equal(false, TT.isArray(true));
    })
    it("should return true when is an array", function () {
      assert.equal(true, TT.isArray([]));
      assert.equal(true, TT.isArray([1]));
      assert.equal(true, TT.isArray([1, 2, 3]));
      assert.equal(true, TT.isArray([1, undefined, 3]));
      assert.equal(true, TT.isArray([1, undefined, "3"]));
    })
  })
  describe("first()", function () {
    it("should return undefined", function () {
      assert.equal(undefined, TT.first([]));
      assert.equal(undefined, TT.first(1));
      assert.equal(undefined, TT.first({}));
      assert.equal(undefined, TT.first(null));
      assert.equal(undefined, TT.first([undefined, 0, 1]));
    })
    it("should return the first value of array", function () {
      assert.equal(3, TT.first([3,2,1]));
      assert.equal(1, TT.first([1]));
      assert.equal("T", TT.first("TITAO"));
      assert.equal(undefined, TT.first([undefined, 0, 1]));
      assert.equal(null, TT.first([null, 0, 1]));
      assert.deepEqual(undefined, TT.first([, 0, 1]));
      assert.deepEqual([4, 5], TT.first([[4, 5],[0, 1]]));
      assert.deepEqual({name: "paulo"},
          TT.first([{name: "paulo"},{surname: "benatto"}]));
    })
  })
  describe("last()", function () {
    it("should return undefined", function () {
      assert.equal(undefined, TT.last([]));
      assert.equal(undefined, TT.last(1));
      assert.equal(undefined, TT.last({}));
      assert.equal(undefined, TT.last(null));
      assert.equal(undefined, TT.last([undefined, 0, 1, undefined]));
    })
    it("should return the last value of array", function () {
      assert.equal(5, TT.last([3, 2, 1, 5]));
      assert.equal(1, TT.last([1]));
      assert.equal("O", TT.last("TITAO"));
      assert.equal(1, TT.last([undefined, 0, 1]));
      assert.equal(null, TT.last([null, 0, 1, null]));
      assert.deepEqual([0,1], TT.last([[1],[0, 1]]));
      assert.deepEqual({surname: "benatto"},
          TT.last([{name: "paulo"},{surname: "benatto"}]));
      assert.deepEqual(TT.first([0,1]), TT.last([1, 0]));
    })
  })
  describe("initial()", function () {
    it("should return an array", function () {
      assert.deepEqual([1, 2], TT.initial([1, 2, 3], 1));
      assert.deepEqual([1, 2], TT.initial([1, 2, 3]));
      assert.deepEqual([1], TT.initial([1, 2, 3, 4, 5], 4));
      assert.deepEqual([1, 2, 3], TT.initial([1, 2, 3], 0));
      assert.deepEqual([1, 2, 3], TT.initial([1, 2, 3], -1));
      assert.deepEqual([], TT.initial({}));
    })
  })
  describe("head()", function () {
    it("should return an array", function () {
      assert.deepEqual([1, 2], TT.head([1, 2, 3]));
      assert.deepEqual([1], TT.head([1]));
      assert.deepEqual([], TT.head([]));
      assert.deepEqual(TT.initial([1,2,3]), TT.head([1,2,3]));
      assert.deepEqual(TT.initial([1, 2], 1), TT.head([1,3]));
    })
  })
  describe("rest()", function () {
    it("should return an array", function () {
      assert.deepEqual([2, 3], TT.rest([1, 2, 3]));
      assert.deepEqual(TT.head([2, 3, 1]), TT.rest([1, 2, 3]));
      assert.deepEqual(TT.initial([1, 2, 3], 0), TT.rest([1, 2, 3], 0));
      assert.deepEqual([], TT.rest([1, 2, 3], 3));
      assert.deepEqual([], TT.rest([1, 2, 3], 4));
    })
  })
  describe("compact()", function () {
    it("should return an array", function () {
      assert.deepEqual([1, 2, 3], TT.compact([1, 2, 3]));
      assert.deepEqual([], TT.compact([null, undefined, 0, ""]));
      assert.deepEqual([-5], TT.compact([null, -5, undefined, 0, "", NaN]));
      assert.deepEqual([{}], TT.compact([null, {}, undefined, 0, "", NaN]));
      assert.deepEqual(TT.initial([1, 2], 1), TT.compact([1, false, 0, "", NaN]));
    })
  })
  describe("flatten()", function () {
    it("should return an array", function () {
      assert.deepEqual([1, 2, 3, 4, 5, 6], TT.flatten([1, [2, [3, [4, [5, [6]]]]]]));
    })
  })  
  describe("tail()", function () {
    it("should return an array", function () {
      assert.deepEqual([2, 3], TT.tail([1, 2, 3]));
      assert.deepEqual([1], TT.tail([1]));
      assert.deepEqual([], TT.tail([]));
    })
  })
  describe("forEach()", function () {
    it("should return an array", function () {
      numbers = [1, 2, 3];
      TT.forEach(numbers, function(value, i, array){
        assert.equal(numbers[i], i + 1);
      });
    })
  })
})
