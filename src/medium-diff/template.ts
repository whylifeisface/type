type Apple<T, P> = keyof T extends `${infer A}` ?
    keyof P extends `${infer B}` ? Exclude<B, A> : B : true
type Diff<O, O1> = {
    [P in keyof (O & O1) as P extends keyof (O | O1) ? never : P]: (O & O1)[P]
}

// [{P in keyof {(O & O1)} } {as P extends keyof {(O | O1)} ? never : P}]

// Exclude<A,B> : A : B
// | Exclude<O1,Merge<O,O1>>
// type J = "name" | "age"
// type K = "name" | "age" |"gender"
// type C = Exclude<K,J>