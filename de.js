!function(glob) {

  var cfg = [
    { tpl: 'vor ein paar Sekunden', handler: function (diff, isPast, to) { return isPast && (to('seconds') < 45) } },
    { tpl: 'vor einer Minute', handler: function (diff, isPast, to) { return isPast && (to('minutes') === 1) } },
    { tpl: 'vor %num Minuten', handler: function (diff, isPast, to) { return isPast && (to('minutes') < 45) && { num: to('minutes') } } },
    { tpl: 'vor einer Stunde', handler: function (diff, isPast, to) { return isPast && (to('hours') === 1) } },
    { tpl: 'vor %num Stunden', handler: function (diff, isPast, to) { return isPast && (to('hours') < 22) && { num: to('hours') } } },
    { tpl: 'vor einem Tag', handler: function (diff, isPast, to) { return isPast && (to('days') === 1) } },
    { tpl: 'vor %num Tagen', handler: function (diff, isPast, to) { return isPast && (to('days') < 26) && { num: to('days') } } },
    { tpl: 'vor einem Monat', handler: function (diff, isPast, to) { return isPast && (to('months') === 1) } },
    { tpl: 'vor %num Monaten', handler: function (diff, isPast, to) { return isPast && (to('months') < 11) && { num: to('months') } } },
    { tpl: 'vor einem Jahr', handler: function (diff, isPast, to) { return isPast && (to('years') === 1) } },
    { tpl: 'vor %num Jahren', handler: function (diff, isPast, to) { return isPast && { num: to('years') } } },

    { tpl: 'in ein paar Sekunden', handler: function (diff, isPast, to) { return !isPast && (to('seconds') < 45) } },
    { tpl: 'in einer Minute', handler: function (diff, isPast, to) { return !isPast && (to('minutes') === 1) } },
    { tpl: 'in %num Minuten', handler: function (diff, isPast, to) { return !isPast && (to('minutes') < 45) && { num: to('minutes') } } },
    { tpl: 'in einer Stunde', handler: function (diff, isPast, to) { return !isPast && (to('hours') === 1) } },
    { tpl: 'in %num Stunden', handler: function (diff, isPast, to) { return !isPast && (to('hours') < 22) && { num: to('hours') } } },
    { tpl: 'in einem Tag', handler: function (diff, isPast, to) { return !isPast && (to('days') === 1) } },
    { tpl: 'in %num Tagen', handler: function (diff, isPast, to) { return !isPast && (to('days') < 26) && { num: to('days') } } },
    { tpl: 'in einem Monat', handler: function (diff, isPast, to) { return !isPast && (to('months') === 1) } },
    { tpl: 'in %num Monaten', handler: function (diff, isPast, to) { return !isPast && (to('months') < 11) && { num: to('months') } } },
    { tpl: 'in einem Jahr', handler: function (diff, isPast, to) { return !isPast && (to('years') === 1) } },
    { tpl: 'in %num Jahren', handler: function (diff, isPast, to) { return !isPast && { num: to('years') } } }
  ];

  // Node.js / browserify
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = cfg;
  }
  // <script>
  else {
    glob.ago_cfgs || (glob.ago_cfgs = {});
    glob.ago_cfgs.de = cfg;
  }

}(this);

