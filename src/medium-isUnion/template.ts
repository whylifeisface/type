type IsUnion<T> = [T] extends [never] ? false :
    T extends T ? 
    T extends unknown ? 
    false : [T] extends [never] ? false :true : never