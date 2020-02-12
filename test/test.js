let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
  describe("#palindrome", function() {
    it("returns false for an empty phrase", function() {
      let emptyPhrase = new Phrase('');
      assert(!emptyPhrase.palindrome());
    });

    it("returns false for a non-palindrome", function() {
      let nonPalindrome = new Phrase('test');
      assert(!nonPalindrome.palindrome());
    });

    it("returns true for a plain palindrome", function() {
      let palindrome = new Phrase('racecar');
      assert(palindrome.palindrome());
    });

    it("returns true for a mixed-case palindrome", function() {
      let mixedCase = new Phrase('RaCecAr');
      assert(mixedCase.palindrome());
    });

    it("returns true for a palindrome with punctuation", function() {
      let complexPalindrome =  new Phrase("A man, a plan, a canal—Panama!");
      assert(complexPalindrome.palindrome());
    });
  });

  describe("#letters", function() {
    it("returns only letters", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    });

    it("returns blank for digits", function() {
      let digits = new Phrase("1234");
      assert.strictEqual(digits.letters(), "");
    });
  });
});