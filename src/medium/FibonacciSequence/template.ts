type Fibonacci<T extends string ,Prev = 1,Current = 1> = any
    T extends 0 ? Current : Fibonacci<MinusOne<T>>
//TODO