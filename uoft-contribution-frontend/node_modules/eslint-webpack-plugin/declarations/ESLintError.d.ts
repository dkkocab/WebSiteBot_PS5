export default class ESLintError {
  /**
   * @param {string=} messages
   */
  constructor(messages?: string | undefined);
  name: string;
  stack: string;
}
