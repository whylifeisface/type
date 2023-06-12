type TupleToNestedObject<T extends any[], U > = T extends [infer First extends PropertyKey, ...infer Rest] ?
    Record<First , TupleToNestedObject<Rest,U>> : U
// type TupleToNestedObject<T, U> = T extends [infer F, ...infer R] ? {
    // [K in F&string]:TupleToNestedObject<R,U>
// } : U