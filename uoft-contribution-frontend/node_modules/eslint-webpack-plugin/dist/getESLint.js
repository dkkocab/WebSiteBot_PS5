"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getESLint;

var _options = require("./options");

/** @typedef {import('eslint').ESLint} ESLint */

/** @typedef {import('./options').Options} Options */

/**
 * @param {Options} options
 * @returns {{ESLint: ESLint, eslint: ESLint}}
 */
function getESLint(options) {
  let {
    eslintPath
  } = options;

  if (!eslintPath) {
    eslintPath = 'eslint';
  }

  const {
    ESLint
  } = require(eslintPath); // Filter out loader options before passing the options to ESLint.


  const eslint = new ESLint((0, _options.getESLintOptions)(options));
  return {
    ESLint,
    eslint
  };
}