type ObjectEntries<T> = { [K in keyof Required<T>]: [K, T[K] ] }[keyof T]
// TODO
// K extends unknown ? [K, T[K] extends undefined ? T[K]:Required<T>[K]] : never
// type S = undefined extends any ? true : never