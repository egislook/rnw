"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ExecutionEnvironment = require("fbjs/lib/ExecutionEnvironment");

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function getQuery() {
  return _ExecutionEnvironment.canUseDOM && window.matchMedia != null ? window.matchMedia('(prefers-color-scheme: dark)') : null;
}

var query = getQuery();
var listenerMapping = new WeakMap();
var Appearance = {
  getColorScheme: function getColorScheme() {
    return query && query.matches ? 'dark' : 'light';
  },
  addChangeListener: function addChangeListener(listener) {
    var mappedListener = listenerMapping.get(listener);

    if (!mappedListener) {
      mappedListener = function mappedListener(_ref) {
        var matches = _ref.matches;
        listener({
          colorScheme: matches ? 'dark' : 'light'
        });
      };

      listenerMapping.set(listener, mappedListener);
    }

    if (query) {
      query.addListener(mappedListener);
    }
  },
  removeChangeListener: function removeChangeListener(listener) {
    var mappedListener = listenerMapping.get(listener);

    if (mappedListener) {
      if (query) {
        query.removeListener(mappedListener);
      }

      listenerMapping.delete(listener);
    }
  }
};
var _default = Appearance;
exports.default = _default;
module.exports = exports.default;