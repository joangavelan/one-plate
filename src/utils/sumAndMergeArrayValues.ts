export const sumAndMergeArrayValues = (a1: number[], a2: number[]): number[] =>
  a1.length === a2.length ? a1.map((v, i) => Math.round(v + a2[i]!)) : a2
