require(__filename.replace(/\/spec\/.*.js$/,'/lib/timesheets/object-extensions/date'));

describe("Date", function() {
  describe("#fromString", function() {
    it('should accept "1.2.12" and return a date-object from "2012-02-01"', function() {
      expect(Date.fromString('1.2.12')).toEqual(new Date('2012-02-01 00:00:00'));
    });

    it('should not accept "01f2f2012"', function() {
      expect(Date.fromString('01f02f2012')).toNotEqual(new Date('2012-02-01 00:00:00'));
    });

    it('should accept "01.02.12" and return a date-object from "2012-02-01"', function() {
      expect(Date.fromString('01.02.12')).toEqual(new Date('2012-02-01 00:00:00'));
    });

    it('should accept "01/02/12" and return a date-object from "2012-02-01"', function() {
      expect(Date.fromString('01/02/12')).toEqual(new Date('2012-02-01 00:00:00'));
    });

    it('should accept "01-02-12" and return a date-object from "2012-02-01"', function() {
      expect(Date.fromString('01-02-12')).toEqual(new Date('2012-02-01 00:00:00'));
    });

    it('should accept "01.02.2012" and return a date-object from "2012-02-01"', function() {
      expect(Date.fromString('01.02.2012')).toEqual(new Date('2012-02-01 00:00:00'));
    });

    it('should accept "2012-02-01" and return a date-object from "2012-02-01"', function() {
      expect(Date.fromString('2012-02-01')).toEqual(new Date('2012-02-01 00:00:00'));
    });

    it('should accept "Feb 1 2012" and return a date-object from "2012-02-01"', function() {
      expect(Date.fromString('Feb 1 2012')).toEqual(new Date('2012-02-01 00:00:00'));
    });

    it('should accept "31.12.12" and return a date-object from "2012-12-31" (other dates should work too)', function() {
      expect(Date.fromString('31.12.12')).toEqual(new Date('2012-12-31 00:00:00'));
    });

    it('should accept "Dec 01 12" and return a date-object from "2012-02-01"', function() {
      expect(Date.fromString('Dec 01.12')).toEqual(new Date('2012-12-01 00:00:00'));
    });

    it('should accept "December 01 2012" and return a date-object from "2012-02-01"', function() {
      expect(Date.fromString('December 01 2012')).toEqual(new Date('2012-12-01 00:00:00'));
    });

    it('should accept "December 1st 2012" and return a date-object from "2012-02-01"', function() {
      expect(Date.fromString('December 1st 2012')).toEqual(new Date('2012-12-01 00:00:00'));
    });

    it('should accept "December 2nd 2012" and return a date-object from "2012-02-01"', function() {
      expect(Date.fromString('December 2nd 2012')).toEqual(new Date('2012-12-02 00:00:00'));
    });

    it('should accept "December 3rd 2012" and return a date-object from "2012-02-01"', function() {
      expect(Date.fromString('December 3rd 2012')).toEqual(new Date('2012-12-03 00:00:00'));
    });

    it('should accept "December 24th 2012" and return a date-object from "2012-02-01"', function() {
      expect(Date.fromString('December 24th 2012')).toEqual(new Date('2012-12-24 00:00:00'));
    });

    it('should accept "01.December 12" and return a date-object from "2012-12-01"', function() {
      expect(Date.fromString('01.December 12')).toEqual(new Date('2012-12-01 00:00:00'));
    });
  });
});


