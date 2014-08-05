var expect = require('expect.js');
var timetpl = require('./timetpl');

var tpls = timetpl([
  { tpl: '%secs seconds ago', handler: function (diff, past, helper) { if (!past) return; return { secs: helper('seconds')} } },
  { tpl: 'in %secs seconds', handler: function (diff, past, helper) { if (past) return; return { secs: helper('seconds')} } }
]);

var past = Date.now() - 3000;
var future = Date.now() + 3000;

describe('timetpl tests', function() {
  it('should format the time correctly', function() {
    expect(tpls(past)).to.be.equal('3 seconds ago');
    expect(tpls(future)).to.be.equal('in 3 seconds');
  });
});