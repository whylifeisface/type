type RemoveIndexSignature<T> = {
    [P in keyof T as string extends P ? never : number extends P ?
    never : symbol extends P ?
    never : P]: T[P]
}
// P extends string 不行 string extends P 可以