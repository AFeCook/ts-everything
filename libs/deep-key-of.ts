/**
 * 获取深层结构的key以及keyPath
 */
export type DeepKeyOf<T> = T extends Record<string, any> ? {
  [k in keyof T]: k extends string ? k | `${k}.${DeepKeyOf<T[k]>}` : never;
}[keyof T] : never;