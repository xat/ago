# ago.js

ago.js lets you create time based templates.

## Usage

```javascript

var compiler = ago([
  { tpl: '%secs seconds ago', handler: function (diff, past, to) { if (!past) return; return { secs: to('seconds')} } },
  { tpl: 'in %secs seconds', handler: function (diff, past, to) { if (past) return; return { secs: to('seconds')} } }
]);

var past = Date.now() - 3000;
var future = Date.now() + 3000;

compiler(past); // outputs: "3 seconds ago"
compiler(future); // outputs: "in 3 seconds"


```


## Install


`bower install ago`


## Contribute


* Setup: `npm install`
* Build: `gulp`
* Test: `npm test`


## License
Copyright (c) 2014 Simon Kusterer
Licensed under the MIT license.