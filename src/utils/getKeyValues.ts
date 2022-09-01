export const getKeyValues = <T, K extends keyof T>(arr: T[], key: K): T[K][] =>
  arr.map((obj) => obj[key])
