/** @typedef {import("eslint").ESLint.Options} ESLintOptions */
/** @typedef {import('eslint').ESLint.LintResult} LintResult */
/** @typedef {import('eslint').ESLint.LintResultData} LintResultData */
/**
 * @callback FormatterFunction
 * @param {LintResult[]} results
 * @param {LintResultData=} data
 * @returns {string}
 */
/**
 * @typedef {Object} OutputReport
 * @property {string=} filePath
 * @property {string|FormatterFunction=} formatter
 */
/**
 * @typedef {Object} Options
 * @property {string=} context
 * @property {boolean=} emitError
 * @property {boolean=} emitWarning
 * @property {string=} eslintPath
 * @property {boolean=} failOnError
 * @property {boolean=} failOnWarning
 * @property {string|string[]=} files
 * @property {string|string[]=} extensions
 * @property {boolean=} fix
 * @property {string|FormatterFunction=} formatter
 * @property {boolean=} lintDirtyModulesOnly
 * @property {boolean=} quiet
 * @property {OutputReport=} outputReport
 */
/**
 * @param {Options} pluginOptions
 * @returns {Options}
 */
export function getOptions(pluginOptions: Options): Options;
/**
 * @param {Options} loaderOptions
 * @returns {ESLintOptions}
 */
export function getESLintOptions(loaderOptions: Options): ESLintOptions;
export type ESLintOptions = import('eslint').ESLint.Options;
export type LintResult = import('eslint').ESLint.LintResult;
export type LintResultData = import('eslint').ESLint.LintResultData;
export type FormatterFunction = (
  results: LintResult[],
  data?: LintResultData | undefined
) => string;
export type OutputReport = {
  filePath?: string | undefined;
  formatter?: (string | FormatterFunction) | undefined;
};
export type Options = {
  context?: string | undefined;
  emitError?: boolean | undefined;
  emitWarning?: boolean | undefined;
  eslintPath?: string | undefined;
  failOnError?: boolean | undefined;
  failOnWarning?: boolean | undefined;
  files?: (string | string[]) | undefined;
  extensions?: (string | string[]) | undefined;
  fix?: boolean | undefined;
  formatter?: (string | FormatterFunction) | undefined;
  lintDirtyModulesOnly?: boolean | undefined;
  quiet?: boolean | undefined;
  outputReport?: OutputReport | undefined;
};
