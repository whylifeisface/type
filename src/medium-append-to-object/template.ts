type AppendToObject<T, U extends string, V> = Merges<{ [P in keyof T]: T[P] } & { [P in U]: V }>
type Merges<T> = {
    [P in keyof T]: T[P]
}