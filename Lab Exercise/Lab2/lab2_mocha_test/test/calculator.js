// test/calculator.js
var assert    = require("chai").assert;
var calculator = require("../app/calculator");

describe("Sample Test cases", () => {
  describe("Addition:", () => {
    var add   = calculator.add(24,8);
    it("add(24, 8) expected result 32 PASS", () => {
      assert.equal(add,32);
    });
    it("add(24, 8) expected result 33 FAIL", () => {
        assert.equal(add,33);
    });
  });

  describe("Subtraction:", () => {
    var sub   = calculator.sub(24,8);
    it("sub(24, 8) expected result 16 PASS", () => {
      assert.equal(sub, 16);
    });
    it("sub(24, 8) expected result 24 FAIL", () => {
        assert.equal(sub, 24);
    });
  });

  describe("Multiplication:", () => {
    var mul = calculator.mul(24,8);
    it("mul(24, 8) expected result 192 PASS", () => {
      assert.equal(mul,192);
    });
    it("mul(24, 8) expected result 200 FAIL", () => {
        assert.equal(mul, 200);
    });
  });

  describe("Division:", () => {
    var div   = calculator.div(24,8);
    it("div(24, 8) expected result 3 PASS", () => {
      assert.equal(div, 3);
    });
    it("div(24, 8) expected result 8 FAIL", () => {
        assert.equal(div, 8);
    });
  });

});