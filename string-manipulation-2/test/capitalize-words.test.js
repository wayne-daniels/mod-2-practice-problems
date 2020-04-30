var expect = require('chai').expect;
var capitalizeWords = require('../capitalize-words');

describe.skip('capitalizeWords(string)', function () {

  it('capitalizes the words in "needs solution"', function () {
    var input = 'needs solution';
    var output = capitalizeWords(input);
    expect(output).to.equal('Needs Solution');
  });

  it('capitalizes the words in "Add string manipulation practice."', function () {
    var input = 'Add string manipulation practice.';
    var output = capitalizeWords(input);
    expect(output).to.equal('Add String Manipulation Practice.');
  });

  it('capitalizes the words in "aLl CoDe aLl DaY', function () {
    var input = 'aLl CoDe aLl DaY';
    var output = capitalizeWords(input);
    expect(output).to.equal('All Code All Day');
  });

  it('capitalizes the words in "HTML, CSS, JavaScript, PHP, SQL"', function () {
    var input = 'HTML, CSS, JavaScript, PHP, SQL';
    var output = capitalizeWords(input);
    expect(output).to.equal('Html, Css, Javascript, Php, Sql');
  });

});
