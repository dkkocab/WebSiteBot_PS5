/** @typedef {import('eslint').ESLint} ESLint */
/** @typedef {import('eslint').ESLint.Formatter} Formatter */
/** @typedef {import('eslint').ESLint.LintResult} LintResult */
/** @typedef {import('webpack').Compiler} Compiler */
/** @typedef {import('webpack').Compilation} Compilation */
/** @typedef {import('webpack-sources').Source} Source */
/** @typedef {import('./options').Options} Options */
/** @typedef {import('./options').FormatterFunction} FormatterFunction */
/** @typedef {(compilation: Compilation) => Promise<void>} GenerateReport */
/** @typedef {{errors?: ESLintError, warnings?: ESLintError, generateReportAsset?: GenerateReport}} Report */
/** @typedef {() => Promise<Report>} Reporter */
/** @typedef {(files: string|string[]) => void} Linter */
/**
 * @param {Options} options
 * @returns {{lint: Linter, report: Reporter}}
 */
export default function linter(
  options: Options
): {
  lint: Linter;
  report: Reporter;
};
export type ESLint = import('eslint').ESLint;
export type Formatter = import('eslint').ESLint.Formatter;
export type LintResult = import('eslint').ESLint.LintResult;
export type Compiler = import('webpack').Compiler;
export type Compilation = import('webpack').Compilation;
export type Source = import('webpack-sources/lib/Source');
export type Options = {
  context?: string | undefined;
  emitError?: boolean | undefined;
  emitWarning?: boolean | undefined;
  eslintPath?: string | undefined;
  failOnError?: boolean | undefined;
  failOnWarning?: boolean | undefined;
  files?: string | string[] | undefined;
  extensions?: string | string[] | undefined;
  fix?: boolean | undefined;
  formatter?: string | import('./options').FormatterFunction | undefined;
  lintDirtyModulesOnly?: boolean | undefined;
  quiet?: boolean | undefined;
  outputReport?: import('./options').OutputReport | undefined;
};
export type FormatterFunction = (
  results: import('eslint').ESLint.LintResult[],
  data?: import('eslint').ESLint.LintResultData | undefined
) => string;
export type GenerateReport = (compilation: Compilation) => Promise<void>;
export type Report = {
  errors?: ESLintError | undefined;
  warnings?: ESLintError | undefined;
  generateReportAsset?:
    | ((compilation: Compilation) => Promise<void>)
    | undefined;
};
export type Reporter = () => Promise<Report>;
export type Linter = (files: string | string[]) => void;
import ESLintError from './ESLintError';
