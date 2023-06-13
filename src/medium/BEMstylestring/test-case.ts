import type {Equal, Expect} from '@type-challenges/utils'

type A = BEM<'btn', ['price'], []>
type B = BEM<'btn', ['price'], ['warning', 'success']>
type cases = [
    Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
    Expect<Equal<BEM<'btn',
        ['price'],
        ['warning', 'success']>,
        'btn__price--warning' | 'btn__price--success'>>,
    Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>,
        'btn--small' | 'btn--medium' | 'btn--large'>>,
]