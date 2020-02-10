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

  this.processor = function(string) {
    return string.toLowerCase();
  };

  // Returns content processed for palindrome testing.
  this.processedContent = function() {
    return this.processor(this.content);
  };

  // Returns true for a palindrome, false otherwise
  this.palindrome = function() {
    return this.processedContent() === this.processedContent().reverse();
  };

  // Returns a LOUDER version of content
  this.louder = function() {
    return this.content.toUpperCase();
  };
};

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function() {
    return this.processor(this.translation);
  }
};

TranslatedPhrase.prototype = new Phrase();
