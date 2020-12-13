"use strict";

/* eslint no-console: 0 */
var consoleWarn = console.warn;
var consoleError = console.error;
var errorAllowlist = [];

function throwError(msg) {
  if (errorAllowlist.every(function (regex) {
    return !regex.test(msg);
  })) throw new Error(msg);
}

console.warn = throwError;
console.error = throwError;
before(function () {
  console.error = throwError;
  console.warn = throwError;
});
beforeEach(function () {
  console.error = throwError;
  console.warn = throwError;
});
after(function () {
  console.warn = consoleWarn;
  console.error = consoleError;
});
afterEach(function () {
  console.warn = consoleWarn;
  console.error = consoleError;
});
//# sourceMappingURL=_failTestsOnErrors.js.map