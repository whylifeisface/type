type Absolute<T extends number | string | bigint> = T extends number | bigint ?
    Absolute<`${T}`> : T extends string ? T extends `-${infer M}` ? M : T :never
 //是不是string int
    //是不是bigint
