# timetpl

Create time templates.

## Usage

```javascript

var compiler = timetpl([
  { tpl: '%secs seconds ago', handler: function (diff, past, helper) { if (!past) return; return { secs: helper('seconds')} } },
  { tpl: 'in %secs seconds', handler: function (diff, past, helper) { if (past) return; return { secs: helper('seconds')} } }
]);

var past = Date.now() - 3000;
var future = Date.now() + 3000;

compiler(past); // outputs: "3 seconds ago"
compiler(future); // outputs: "in 3 seconds"

```

## License
Copyright (c) 2014 Simon Kusterer
Licensed under the MIT license.