
type IsSymbol<J> = J extends object ? true : false
// type A = IsSymbol<{a:"1"}> 
type IsNumber<J> = J extends number ? true : false
type IsString<J> = J extends string ? true : false
type IsBoolean<J> = J extends boolean ? true : false
type IsArray<J> = J extends any[] ? true : false
// type One = "00000"
// type ChangeOne<I,O> = I extends 0 ?  



type Contain<T extends readonly any[], Type> = T extends [infer X, ...infer Y]
    ? X extends Type ? true : Contain<Y, Type> : false


type All<T extends readonly any[]> = true extends Contain<T, string> ?
    true extends Contain<T, number> ? true extends Contain<T, object> ?
    true extends Contain<T, boolean> ?
    true extends Contain<T, any[]> ?
    true extends Contain<T, null> ?
    false :
    true
    : false
    : false : false : false : false
type AnyOf<T extends readonly any[]> = All<T>

// type A = 1 extends number ? true :false


// type A = [1]
// type B =
// T extends [infer A, ...infer B] ? Contain<[], A> : false

// type Contain<T extends any[], P> =
//     T extends [] ? [P] :
//         T extends [infer A, ...infer B] ?
//             P extends number | string | boolean | symbol ?
//                 P extends A ?
//                     Contain<B, P>
//                 : [P, ...T]
//             :[T]
//             : []

// type Contain<>