# params-list

Return function or class constructor parameters as an array of strings. Commonly used for dependency injection. Inspired by [args-list][args-list-url].

## Installation

    npm install --save params-list

## Usage

```javascript
const paramsList = require('params-list');

class SomeClass {
  constructor(dep1, dep2, dep3) {
    // do something here
  }
}

console.log(paramsList(SomeClass)); // outputs ['dep1', 'dep2', 'dep3']

function SomeConstructor(foo, bar, baz) {
  // do something here
}

console.log(paramsList(SomeConstructor)); // outputs ['foo', 'bar', 'baz']
```

## Tests

    npm test

[args-list-url]: https://github.com/scottcorgan/args-list
