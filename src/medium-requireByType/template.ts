type RequiredByKeys<T, K extends keyof T = keyof T> = Omit<Omit<T, K> & Required<Pick<T, K>>, never>
    // Required<Pick<T, K>>