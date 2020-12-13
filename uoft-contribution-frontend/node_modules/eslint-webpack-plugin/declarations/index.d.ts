export default ESLintWebpackPlugin;
export type Compiler = import('webpack').Compiler;
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
declare class ESLintWebpackPlugin {
  /**
   * @param {Options} options
   */
  constructor(options?: Options);
  options: import('./options').Options;
  /**
   * @param {Compiler} compiler
   */
  run(compiler: Compiler): Promise<void>;
  /**
   * @param {Compiler} compiler
   * @returns {void}
   */
  apply(compiler: Compiler): void;
  /**
   *
   * @param {Compiler} compiler
   * @returns {string}
   */
  getContext(compiler: Compiler): string;
}
