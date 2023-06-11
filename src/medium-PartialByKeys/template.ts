//不传K就默认keyof T
//extends keyof T 防止传非参数
type PartialByKeys<T, K extends keyof T= keyof T> = BE<AS<T,K>>
// type PartialByKeys<T, K extends keyof T= keyof T> =
// Omit<Omit<T, K> & Partial<Pick<T, K>>, never>
type BE<T> = {
    [P in keyof T] : T[P]
}

type AS<T,K> = ({
    [P in keyof T as P extends K ? P : never] + ?: T[P]
} & {
    [P in keyof T as P extends K ? never : P] : T[P]
})