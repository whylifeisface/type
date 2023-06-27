type ToPrimitive<T> = {
    [P in keyof T]: T[P] extends string ? string :
        T[P] extends number ? number : T[P] extends boolean ? boolean :
            T[P] extends [infer A, infer B] ? [A, B] :
                T[P] extends [infer C] ? [C] :
                    T[P] extends object ?
                        {
                            [K in keyof T[P]]: false
                        } : false
}
// type A<T> = {
//     [P in keyof T
// ] :
// [P, GetType<T[P]>]
// }

type SS = 's' extends string ? true : false;
