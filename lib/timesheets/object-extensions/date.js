require('object-extensions/string');

Date.prototype.strftime = function (datestr) {
  function pad(number, length) {
     var str = number.toString();
     while (str.length < length) {
       str = '0' + str;
     }
     return str;
  }

  return datestr.replace('%d', pad(this.getDate(),2)).
    replace('%m', pad(this.getMonth() + 1,2)).
    replace('%Y', this.getFullYear()).
    replace('%y', pad(this.getYear() - 100,2));
};

Date.fromString = function (datestr) {
  var normalized_date, match,
    months = ['Jan','Feb','Mar','Apr', 'May', 'Jun','Jul','Aug','Sep', 'Oct', 'Nov', 'Dec'];
    normalized_date = (function() {
      match = datestr.match(/^(\d?\d)[ /.-](\d?\d)[ /.-](\d?\d?\d\d)/);
      if (match) {
        return match[3] + '-' + match[2].toPaddedString() + '-' + match[1].toPaddedString();
      }
      match = datestr.match(/^(\d\d\d\d)[ /.-](\d?\d)[ /.-](\d?\d)/);
      if (match) {
        return match[1] + '-' + match[2].toPaddedString() + '-' + match[3].toPaddedString();
      }
      match = datestr.match(/^(Jan|Feb|Mar|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\w*[ /.-](\d?\d)(st|nd|rd|th)?[ /.-](\d?\d?\d\d)/);
      if (match) {
        return match[4] + '-' + (months.indexOf(match[1]) + 1).toString().toPaddedString() +
          '-' + match[2].toPaddedString();
      }
      match = datestr.match(/^(\d?\d)(st|nd|rd|th)?[ /.-](Jan|Feb|Mar|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\w*[ /.-](\d?\d?\d\d)/);
      if (match) {
        return match[4] + '-' + (months.indexOf(match[3]) + 1).toString().toPaddedString() +
          '-' + match[1].toPaddedString();
      }
    }());
    if (!normalized_date) {return;}
    if (normalized_date.match(/^\d\d-/)) {normalized_date = '20' + normalized_date;}
    return new this(normalized_date + ' 00:00:00');
};

