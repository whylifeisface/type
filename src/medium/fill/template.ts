type Fill<
    T extends unknown[],
    N,
    Start extends number = 0,
    End extends number = T['length'],
> = {
    [P in keyof T ] : P extends `${Start}` ? P extends `${End}` ? N : N : T[P]
}
//需要 bigger 还有解法不理解 { [P in keyof T ] : T } 是数组 P是下标