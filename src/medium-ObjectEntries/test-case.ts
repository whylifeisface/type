import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
    name: string
    age: number
    locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]
type A = ObjectEntries<Partial<Model>>
type B = Required<Partial<Model>>
type C = ObjectEntries<{ key?: undefined }>
type cases = [
    Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
    Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
    Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
    Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
    Expect<Equal<ObjectEntries<{ key: string | undefined }>, ['key', string | undefined]>>,
]