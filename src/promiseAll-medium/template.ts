// type Tuple<T> = Readonly<Array<T>>
// declare function PromiseAll<T extends Tuple<any>>(values: readonly [...T]):
//     // any
//     Promise<{
//     [P in keyof T]: Awaited<T[P]>
// }>
declare function PromiseAll(values:any):any
///没看懂
//    Promise<{
//     [P in keyof T]: Awaited<T[P]>
// }>

// (values: readonly [...T]) 参数