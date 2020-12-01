/** @typedef {import('eslint').ESLint} ESLint */
/** @typedef {import('./options').Options} Options */
/**
 * @param {Options} options
 * @returns {{ESLint: ESLint, eslint: ESLint}}
 */
export default function getESLint(
  options: Options
): {
  ESLint: import('eslint').ESLint;
  eslint: import('eslint').ESLint;
};
export type ESLint = import('eslint').ESLint;
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
