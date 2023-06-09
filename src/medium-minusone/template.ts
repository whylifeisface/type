type MinusOne<T extends number | string> =  (MinusOneString<T>)
    //结果是string 如何强转为number

type MinusOneString<T extends number | string> = `${T}` extends `${infer First}${infer Rest}` ?
    // true : false
    Rest extends "" ?
        First extends "1" ? "0" :
            First extends "2" ? "1" :
                First extends "3" ? "2" :
                    First extends "4" ? "3" :
                        First extends "5" ? "4" :
                            First extends "6" ? "5" :
                                First extends "7" ? "6" :
                                    First extends "8" ? '7' :
                                        First extends "9" ? "8"
                                            : never
        : `${First}${MinusOne<Rest>}`
    : true