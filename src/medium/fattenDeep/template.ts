type FlattenDepth<T,U=1> = T extends [infer First, ...infer Rest]

    ? First extends any[] ? FlattenDepth<First, U> : [First, ...FlattenDepth<Rest,U>] : T
// TODO U是减少多少个括号