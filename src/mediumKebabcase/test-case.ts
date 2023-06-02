import type { Equal, Expect } from '@type-challenges/utils'
type A = KebabCase<'FooBarBaz'>
type B = KebabCase<'fooBarBaz'>
type C = KebabCase<'foo-bar'>
type D = KebabCase<'Foo-Bar'>
type E = KebabCase<'😎'>
type F = KebabCase<'-'>
type G = KebabCase<'foo_bar'>
type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]