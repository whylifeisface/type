type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}` ? First | StringToUnion<Rest> :never
type S = StringToUnion<'ABCD'>
// never 不会显示出来 'A' => `${infer First}${infer Rest}` First = A   Rest = ""