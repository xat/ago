var expect = require('expect.js');
var ago = require('./ago');
var enCfg = require('./en');
var deCfg = require('./de');
var tpls = ago(enCfg);
var deTpls = ago(deCfg);

var mappings = {
  seconds: 1000,
  minutes: 60000,
  hours: 3600000,
  days: 86400000,
  weeks: 604800000,
  months: 2592000000,
  years: 31536000000
};

var now = Date.now();

describe('timetpl tests', function() {
  it('should format the time correctly', function() {
    expect(tpls(now - 10 * mappings.seconds)).to.be.equal('a few seconds ago');
    expect(tpls(now - mappings.minutes)).to.be.equal('a minute ago');
    expect(tpls(now - 2 * mappings.minutes)).to.be.equal('2 minutes ago');
    expect(tpls(now - mappings.hours)).to.be.equal('a hour ago');
    expect(tpls(now - 20 * mappings.hours)).to.be.equal('20 hours ago');
    expect(tpls(now - mappings.years)).to.be.equal('a year ago');
    expect(tpls(now - 5 * mappings.years)).to.be.equal('5 years ago');

    expect(tpls(now + mappings.minutes)).to.be.equal('in a minute');
    expect(deTpls(now + mappings.minutes)).to.be.equal('in einer Minute');
  });
});