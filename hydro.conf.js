/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  var coffee = require('./index');

  hydro.set({
    plugins: [coffee],
    attach: global,
    proxies: {
      test: 'addTest'
    },
    suite: 'hydro-coffee',
    formatter: 'hydro-simple',
    globals: {
      assert: require('simple-assert')
    },
    tests: [
      'test'
    ]
  });
};
