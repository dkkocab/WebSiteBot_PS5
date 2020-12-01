"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _WebpackError = _interopRequireDefault(require("webpack/lib/WebpackError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
class ESLintError extends _WebpackError.default {
  /**
   * @param {string=} messages
   */
  constructor(messages) {
    super(messages);
    this.name = 'ESLintError';
    this.stack = '';
  }

}

exports.default = ESLintError;