type Diff<O, O1> = Pick<Merge<O,O1>,Apple<O,Merge<O,O1>>  >
// Exclude<Merge<O,O1>,O> 

type Apple<T, P> = keyof T extends `${infer A}` ? 
    keyof P extends `${infer B}` ? Exclude<B, A> : B : true

// Exclude<A,B> : A : B
// | Exclude<O1,Merge<O,O1>>
// type J = "name" | "age"
// type K = "name" | "age" |"gender"
// type C = Exclude<K,J>