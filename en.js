!function(glob) {

  var cfg = [
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
  ];

  // Node.js / browserify
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = cfg;
  }
  // <script>
  else {
    glob.ago_cfgs || (glob.ago_cfgs = {});
    glob.ago_cfgs.en = cfg;
  }

}(this);

