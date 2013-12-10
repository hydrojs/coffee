/**
 * Core dependencies.
 */

var path = require('path');

/**
 * CoffeeScript extensions.
 */

var extensions = ['.coffee', '.litcoffee', '.coffee.md'];

/**
 * CoffeeScript plugin for hydro.
 *
 * Require `coffee-script` if there is a test file with one of
 * CoffeeScript's extensions.
 *
 * You can force require coffee by passing the `--coffee` flag
 * or by setting `coffee` to `true`:
 *
 *    $ hydro --coffee
 *
 *    hydro.set('coffee', true);
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  var required = false;
  var curr = null;

  if (hydro.get('coffee')) return require('coffee-script');

  hydro.on('pre:file', function(file, done) {
    if (required) return done();
    var ext = path.basename(file).split('.');
    if (ext[0] === '') ext.shift();

    while (ext.shift()) {
      curr = '.' + ext.join('.');
      if (~extensions.indexOf(curr)) {
        require('coffee-script');
        required = true;
        break;
      }
    }

    done();
  });
};

/**
 * CLI flags.
 */

module.exports.flags = {
  '--coffee': 'require coffee-script'
};
