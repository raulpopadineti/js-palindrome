module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
};

String.prototype.blank = function() {
  return !!this.match(/^\s*$/);
};

Array.prototype.last = function() {
  return this[this.length - 1];
};

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  // Returns only the content's letters
  this.letters = function() {
    return (this.content.match(/[a-z]/gi) || []).join('');
  };

  // Returns content processed for palindrome testing.
  this.processedContent = function() {
    return this.letters().toLowerCase();
  };

  // Returns true for a palindrome, false otherwise
  this.palindrome = function() {
    return this.processedContent() === this.processedContent().reverse();
  };
};
