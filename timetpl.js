!function(glob) {

  var mappings = {
    seconds: 1000,
    minutes: 60000,
    hours: 3600000,
    days: 86400000,
    weeks: 604800000
  };

  var timeify = function(ms) {
    return function(to, prec) {
      var x = Math.pow(10, prec || 0);
      return Math.round(ms / mappings[to] * x) / x;
    };
  };

  var compile = function(tpl, data) {
    if (typeof data !== 'object') return tpl;
    for (var k in data) {
      if (!data.hasOwnProperty(k)) continue;
      tpl = tpl.replace('%'+k, data[k]);
    }
    return tpl;
  };

  var timetpl = function(cfg) {
    cfg || (cfg = []);
    var len = cfg.length;

    return function(then, now) {
      now || (now = Date.now());
      var past = now > then;
      var diff = Math.abs(now - then);
      var helper = timeify(diff);
      var res;

      for (var i=0; i<len; i++) {
        res = cfg[i].handler(diff, past, helper, then, now);
        if (res) {
          return compile(cfg[i].tpl, res);
        }
      }

      return void 0;
    };
  };

  // Node.js / browserify
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = timetpl;
  }
  // <script>
  else {
    glob.timetpl = timetpl;
  }

}(this);