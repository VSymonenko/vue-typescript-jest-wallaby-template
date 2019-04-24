/**
 * Representing each item for site navigation's.
 * Implement this everywhere you need a route
 *
 * @export
 * @interface Navigation
 */
export interface Navigation {
  name: string;
  children?: Navigation[];
  path?: string;
}
