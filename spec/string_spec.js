require(__filename.replace(/\/spec\/.*.js$/,'/lib/timesheets/object-extensions/string'));

describe("String", function() {
  describe("#toPaddedString", function() {
    it('should accept "1.2.12" and return a date-object from "2012-02-01"', function() {
      var number = '23';
      expect(number.toPaddedString(3)).toEqual('023');
    });
  });
});
