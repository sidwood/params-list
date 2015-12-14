'use strict';

// init
const CONSTRUCTOR_PARAMS_REGEX = /constructor\s*[^\(]*\(\s*([^\)]*)\)/m;
const FUNCTION_PARAMS_REGEX = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;

module.exports = function paramsList(fn) {
  const matchGroups = fn.toString().match(CONSTRUCTOR_PARAMS_REGEX) ||
                      fn.toString().match(FUNCTION_PARAMS_REGEX);
  const params = matchGroups[1].trim().split(/[\s,]+/);
  return params[0] === '' ? [] : params;
};
