type KebabCase<S> = 


    Lim<S> extends 
    `${infer A}${infer B}` ?
A extends '-' ? B : `${A}${B}`  : S

type Lim<S> = S extends
    `${infer A}${infer B}` ?
    A extends '�' ? `${A}${Lim<B>}` :
    A extends "-" ? `${A}${Lim<B>}` :
    A extends '_' ? `${A}${Lim<B>}` :
    Uppercase<A> extends A ?
    `-${Lowercase<A>}${Lim<B>}` : `${A}${Lim<B>}` : S


// `${infer A }${infer B }${infer C } ` ?
//     Uppercase<B> extends B ?
//     `${ A } -${ Lowercase<B> }${ KebabCase<C> } ` :`${ A }${ B }${ KebabCase<C> } `  : S
// S extends `${infer N }${infer M } ` ? Uppercase<M> extends M ?
//     KebabCase<`${ N } -${ Lowercase<M> } `>:S
//     : S 