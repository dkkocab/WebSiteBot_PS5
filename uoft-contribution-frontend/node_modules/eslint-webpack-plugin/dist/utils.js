"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFiles = parseFiles;
exports.replaceBackslashes = replaceBackslashes;
exports.parseFoldersToGlobs = parseFoldersToGlobs;

var _fs = require("fs");

var _arrify = _interopRequireDefault(require("arrify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\())/g;
/**
 * @param {string|string[]} files
 * @param {string} context
 * @returns {string[]}
 */

function parseFiles(files, context) {
  return (0, _arrify.default)(files).map(file => `${replaceBackslashes(context).replace(UNESCAPED_GLOB_SYMBOLS_RE, '\\$2')}/${replaceBackslashes(file)}`);
}
/**
 * @param {string} str
 * @returns {string}
 */


function replaceBackslashes(str) {
  return str.replace(/\\/g, '/');
}
/**
 * @param {string|string[]} patterns
 * @param {string|string[]} extensions
 * @returns {string[]}
 */


function parseFoldersToGlobs(patterns, extensions) {
  const extensionsList = (0, _arrify.default)(extensions);
  const [prefix, postfix] = extensionsList.length > 1 ? ['{', '}'] : ['', ''];
  const extensionsGlob = extensionsList.map(extension => extension.replace(/^\./u, '')).join(',');
  return (0, _arrify.default)(patterns).map(pattern => replaceBackslashes(pattern)).map(pattern => {
    try {
      // The patterns are absolute because they are prepended with the context.
      const stats = (0, _fs.statSync)(pattern);
      /* istanbul ignore else */

      if (stats.isDirectory()) {
        return pattern.replace(/[/\\]*?$/u, `/**/*.${prefix + extensionsGlob + postfix}`);
      }
    } catch (_) {// Return the pattern as is on error.
    }

    return pattern;
  });
}