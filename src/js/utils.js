/*
** Env endpoints
*/
export const NODE_ENV = detectIsNode() ? process.env.NODE_ENV : window._env.NODE_ENV;

/*
** Various detection functions
*/
export function detectIsNode() {
  return typeof window === "undefined"
}