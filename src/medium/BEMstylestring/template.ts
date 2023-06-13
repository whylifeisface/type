type BEM<B extends string, E extends string[], M extends string[]> =
    E["length"] extends 0 ? `${B}--${M[number]}`

        : M["length"] extends 0 ? `${B}__${E[0]}` :
            E extends [infer A extends string, ...infer S ] ? `${B}__${A}--${M[number]}`
                : number
