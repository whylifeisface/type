type Flip<T extends object> = {
    [P in keyof T as T[P] extends string|number ? T[P] : never] : P
}
//TODO