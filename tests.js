var expect = require('expect.js');
var ago = require('./ago');

var tpls = ago([
  { tpl: 'a few seconds ago', handler: function (diff, isPast, to) { return isPast && (to('seconds') < 45) } },
  { tpl: 'a minute ago', handler: function (diff, isPast, to) { return isPast && (to('minutes') === 1) } },
  { tpl: '%num minutes ago', handler: function (diff, isPast, to) { return isPast && (to('minutes') < 45) && { num: to('minutes') } } },
  { tpl: 'a hour ago', handler: function (diff, isPast, to) { return isPast && (to('hours') === 1) } },
  { tpl: '%num hours ago', handler: function (diff, isPast, to) { return isPast && (to('hours') < 22) && { num: to('hours') } } },
  { tpl: 'a day ago', handler: function (diff, isPast, to) { return isPast && (to('days') === 1) } },
  { tpl: '%num days ago', handler: function (diff, isPast, to) { return isPast && (to('days') < 26) && { num: to('days') } } },
  { tpl: 'a month ago', handler: function (diff, isPast, to) { return isPast && (to('months') === 1) } },
  { tpl: '%num months ago', handler: function (diff, isPast, to) { return isPast && (to('months') < 11) && { num: to('months') } } },
  { tpl: 'a year ago', handler: function (diff, isPast, to) { return isPast && (to('years') === 1) } },
  { tpl: '%num years ago', handler: function (diff, isPast, to) { return isPast && { num: to('years') } } },

  { tpl: 'in a few seconds', handler: function (diff, isPast, to) { return !isPast && (to('seconds') < 45) } },
  { tpl: 'in a minute', handler: function (diff, isPast, to) { return !isPast && (to('minutes') === 1) } },
  { tpl: 'in %num minutes', handler: function (diff, isPast, to) { return !isPast && (to('minutes') < 45) && { num: to('minutes') } } },
  { tpl: 'in a hour', handler: function (diff, isPast, to) { return !isPast && (to('hours') === 1) } },
  { tpl: 'in %num hours', handler: function (diff, isPast, to) { return !isPast && (to('hours') < 22) && { num: to('hours') } } },
  { tpl: 'in a day', handler: function (diff, isPast, to) { return !isPast && (to('days') === 1) } },
  { tpl: 'in %num days', handler: function (diff, isPast, to) { return !isPast && (to('days') < 26) && { num: to('days') } } },
  { tpl: 'in a month', handler: function (diff, isPast, to) { return !isPast && (to('months') === 1) } },
  { tpl: 'in %num months', handler: function (diff, isPast, to) { return !isPast && (to('months') < 11) && { num: to('months') } } },
  { tpl: 'in a year', handler: function (diff, isPast, to) { return !isPast && (to('years') === 1) } },
  { tpl: 'in %num years', handler: function (diff, isPast, to) { return !isPast && { num: to('years') } } }
]);


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
  });
});