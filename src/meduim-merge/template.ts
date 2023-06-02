type Merge<F, S> = 
{
    [K in keyof F | keyof S] : K extends keyof F ?
    K extends keyof S ? S[K] : F[K]: K extends keyof S ? S[K]: never
}
//keyof F | keyof S