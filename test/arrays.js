var TT = require('../titao.js');
var assert = require("assert")

describe('Array', function(){
  describe('isArray()', function(){
    it('should return false when is not array', function(){
      assert.equal(false, TT.isArray({}));
      assert.equal(false, TT.isArray(1));
      assert.equal(false, TT.isArray("Array"));
      assert.equal(false, TT.isArray(true));
    })
    it('should return true when is an array', function(){
      assert.equal(true, TT.isArray([]));
      assert.equal(true, TT.isArray([1]));
      assert.equal(true, TT.isArray([1,2,3]));
      assert.equal(true, TT.isArray([1,undefined,3]));
      assert.equal(true, TT.isArray([1,undefined,"3"]));
    })
  })
})
