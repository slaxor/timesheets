String.prototype.toPaddedString = function(length, padchar) {
  length = length || 2;
  padchar = padchar || '0';
  var str = this.toString();
  while (str.length < length) {
    str = padchar + str;
  }
  return str;
};

