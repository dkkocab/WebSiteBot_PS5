"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = require("path");

var _arrify = _interopRequireDefault(require("arrify"));

var _micromatch = _interopRequireDefault(require("micromatch"));

var _options = require("./options");

var _linter = _interopRequireDefault(require("./linter"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @typedef {import('webpack').Compiler} Compiler */

/** @typedef {import('./options').Options} Options */
const ESLINT_PLUGIN = 'ESLintWebpackPlugin';

class ESLintWebpackPlugin {
  /**
   * @param {Options} options
   */
  constructor(options = {}) {
    this.options = (0, _options.getOptions)(options);
    this.run = this.run.bind(this);
  }
  /**
   * @param {Compiler} compiler
   * @returns {void}
   */


  apply(compiler) {
    if (!this.options.lintDirtyModulesOnly) {
      compiler.hooks.run.tapPromise(ESLINT_PLUGIN, this.run);
    } // TODO: Figure out want `compiler.watching` is and how to use it in Webpack5.
    // From my testing of compiler.watch() ... compiler.watching is always
    // undefined (webpack 4 doesn't define it either) I'm leaving it out
    // for now.


    compiler.hooks.watchRun.tapPromise(ESLINT_PLUGIN, this.run);
  }
  /**
   * @param {Compiler} compiler
   */


  async run(compiler) {
    // Do not re-hook
    if ( // @ts-ignore
    compiler.hooks.thisCompilation.taps.find( // @ts-ignore
    ({
      name
    }) => name === ESLINT_PLUGIN)) return;
    const options = { ...this.options,
      // @ts-ignore
      files: (0, _utils.parseFiles)(this.options.files, this.getContext(compiler)),
      extensions: (0, _arrify.default)(this.options.extensions)
    };
    const wanted = (0, _utils.parseFoldersToGlobs)(options.files, options.extensions);
    /** @type {import('./linter').Linter} */

    let lint;
    /** @type {import('./linter').Reporter} */

    let report;

    try {
      ({
        lint,
        report
      } = (0, _linter.default)(options));
    } catch (e) {
      compiler.hooks.thisCompilation.tap(ESLINT_PLUGIN, compilation => compilation.errors.push(e));
      return;
    } // @ts-ignore


    const processModule = module => {
      const file = module.resource;

      if (file && _micromatch.default.isMatch(file, wanted)) {
        // Queue file for linting.
        lint(file);
      }
    };

    compiler.hooks.thisCompilation.tap(ESLINT_PLUGIN, compilation => {
      // Gather Files to lint
      compilation.hooks.succeedModule.tap(ESLINT_PLUGIN, processModule); // await and interpret results

      compilation.hooks.afterSeal.tapPromise(ESLINT_PLUGIN, processResults);

      async function processResults() {
        const {
          errors,
          warnings,
          generateReportAsset
        } = await report();

        if (warnings) {
          // @ts-ignore
          compilation.warnings.push(warnings);
        }

        if (errors) {
          // @ts-ignore
          compilation.errors.push(errors);
        }

        if (generateReportAsset) {
          await generateReportAsset(compilation);
        }
      }
    });
  }
  /**
   *
   * @param {Compiler} compiler
   * @returns {string}
   */


  getContext(compiler) {
    if (!this.options.context) {
      return String(compiler.options.context);
    }

    if (!(0, _path.isAbsolute)(this.options.context)) {
      return (0, _path.join)(String(compiler.options.context), this.options.context);
    }

    return this.options.context;
  }

}

var _default = ESLintWebpackPlugin;
exports.default = _default;