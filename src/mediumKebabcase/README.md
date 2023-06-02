Replace the camelCase or PascalCase string with kebab-case.

FooBarBaz -> foo-bar-baz

For example

type FooBarBaz = KebabCase<"FooBarBaz">;
const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = KebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";