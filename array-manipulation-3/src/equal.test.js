/* global expect, equal */

describe('equal(first, second)', function () {

  beforeEach(function () {
    expect(equal).to.be.a('function');
  });

  context('["foo", "bar", "baz"] and ["foo", "bar", "baz"]', function () {

    it('returns true', function () {
      var output = equal(
        ['foo', 'bar', 'baz'],
        ['foo', 'bar', 'baz']
      );
      expect(output).to.equal(true);
    });

  });

  context('["foo", "bar", "baz"] and ["foo", "bar", "qux"]', function () {

    it('returns false', function () {
      var output = equal(
        ['foo', 'bar', 'baz'],
        ['foo', 'bar', 'qux']
      );
      expect(output).to.equal(false);
    });

  });

  context('[1, 2, 3, 4, 5] and [1, 2, 3, 4, 5]', function () {

    it('returns true', function () {
      var output = equal(
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5]
      );
      expect(output).to.equal(true);
    });

  });

  context('[1, 2, 3, 4, 5] and [1, 2, 3, 3, 5]', function () {

    it('returns false', function () {
      var output = equal(
        [1, 2, 3, 4, 5],
        [1, 2, 3, 3, 5]
      );
      expect(output).to.equal(false);
    });

  });

  context('[false, true, false, true] and [false, true, false, true]', function () {

    it('returns true', function () {
      var output = equal(
        [false, true, false, true],
        [false, true, false, true]
      );
      expect(output).to.equal(true);
    });

  });

  context('[false, true, false, true] and [false, true, false, true]', function () {

    it('returns false', function () {
      var output = equal(
        [false, true, false, true],
        [true, false, true, false]
      );
      expect(output).to.equal(false);
    });

  });

  context('[] and []', function () {

    it('returns true', function () {
      var output = equal(
        [false, true, false, true],
        [true, false, true, false]
      );
      expect(output).to.equal(false);
    });

  });

});
