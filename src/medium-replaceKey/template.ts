type ReplaceKeys<U, T, Y> = U extends U ? {
    [key in keyof U]: key extends T ?
    key extends keyof Y ? Y[key] 
    :never : U[key]
} : never
// pass  U extends U 遍历 union