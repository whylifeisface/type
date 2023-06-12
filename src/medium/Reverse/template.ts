type Reverse<T extends any[]> = T extends [...infer First, infer Rest] ?
    [Rest,...Reverse<First>]
: []