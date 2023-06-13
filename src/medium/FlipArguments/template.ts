type FlipArguments<T extends (...arg: any[]) => any> =
    T extends (...arg: infer R) => infer M ?
    (...arg:Reverse<R>) => M  : never