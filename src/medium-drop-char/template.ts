type DropChar<S, C> =
    S extends `${infer T}${infer M}` ?
        T extends C ?
            DropChar<M, C> :
            C extends M ?
                DropChar<T, C> :
                `${T}${DropChar<M, C>}` : S

// S extends `${infer T}${C}${infer M}` ?
//     DropChar<`${T}${M}`, C> :S