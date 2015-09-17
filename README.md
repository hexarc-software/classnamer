Classnamer
===========

[![Version](http://img.shields.io/npm/v/classnamer.svg)](https://www.npmjs.org/package/classnamer)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://badges.mit-license.org)
[![Downloads](http://img.shields.io/npm/dm/classnamer.svg)](https://npmjs.org/package/classnamer)
[![Downloads](http://img.shields.io/npm/dt/classnamer.svg)](https://npmjs.org/package/classnamer)

An utility for formatting css classnames written in TypeScript (inspired by [classnames](https://github.com/JedWatson/classnames)).
Compatible with TypeScript 1.6 commonjs module resolution.

Install with npm:

```sh
npm install classnamer
```

Using with node.js (TypeScript):

```js
//classic node style import
import classnamer = require("classnamer");

//or ES6 way

//import all as classnamer
import * as classnamer from "classnamer"

//import types and functions
import { ClassNameObject, ClassNamePrimitive, ClassNameFragment, ClassNameFragmentList, format } from "classnamer"
```

Using with node.js (JavaScript):

```js
var classnamer = require("classnamer");
```

## Usage
The `format` function takes any number of `ClassNameFragment` arguments and produces the string result.

The `ClassNameFragment` type is a union of `ClassNamePrimitive`, `ClassNameObject` and `ClassNameFragmentList`.

The `ClassNamePrimitive` type can be `string`, `number` or `boolean`.

The `ClassNameObject` is a map with boolean values which indicate should keys be included in the output or not.

The `ClassNameFragmentList` type represents a list of `ClassNameFragment` objects.

```js
format("super", "man"); // => "super man"
format("super", { man : true }); // => "super man"
format({ super: true }, { man : true }); // => "super man"

// lots of arguments of various types
format("super", { man: true, krypton: false }, "zor", { el: true }); // => "super man zor el"

// other falsy values are just ignored
format(null, false, "super", undefined, 0, 1, { man: null }, ""); // => "super 1"
```

`ClassNameFragmentList` will be recursively flattened as per the rules above:

```js
let fragments: ClassNameFragmentList = ["man", { kripton: true, phantom: false }];
format("super", fragments); // => "super man kripton"
```

## License

[MIT](LICENSE)
