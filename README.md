[![NPM
version](https://badge.fury.io/js/hydro-coffee.png)](http://badge.fury.io/js/hydro-coffee)
[![Build Status](https://secure.travis-ci.org/hydrojs/hydro-coffee.png)](http://travis-ci.org/hydrojs/hydro-coffee)
[![Coverage Status](https://coveralls.io/repos/hydrojs/hydro-coffee/badge.png?branch=master)](https://coveralls.io/r/hydrojs/hydro-coffee?branch=master)

# hydro-coffee

## Synopsis

CoffeeScript support for [hydro](https://github.com/hydrojs/hydro)

## Usage

```js
hydro.set({
  plugins: ['hydro-coffee']
});
```

The plugin will look for files with one of CoffeeScript's extensions and if one
is found it will require 'coffee-script'.

If you want to require CoffeeScript regardless, you can either supply `--coffee`
to `hydro` or set the appropriate config key to `true`:

```bash
$ hydro --coffee
```

```js
hydro.set('coffee', true);
```

## Installation

```bash
npm install hydro-coffee
```

## Tests

```bash
$ npm test
```

Coverage:

```bash
$ npm run coverage
```

## License

(The MIT License)

Copyright (c) 2013 Veselin Todorov <hi@vesln.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
