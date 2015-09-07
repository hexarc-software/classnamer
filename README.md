Classnamer
===========

[![Version](http://img.shields.io/npm/v/classnamer.svg)](https://www.npmjs.org/package/classnamer)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://badges.mit-license.org)

An utility for formatting css classnames written in TypeScript (inspired by [classnames](https://github.com/JedWatson/classnames)).

Install with npm:

```sh
npm install classnamer
```

Using with node.js (TypeScript):

```TypeScript
//add typings
/// <reference path="./node_modules/classnamer/index.d.ts"/>

//classic node style import
import classnamer = require("classnamer");

//or ES6 way

//import all as classnamer
import * as classnamer from "classnamer"

//import types and functions
import { ClassNameFragment, format } from "classnamer"
```

Using with node.js (JavaScript):

```JavaScript
var classnamer = require("classnamer");
```

## Usage
The `format` function takes any number of arguments which can be `string`,
`number` or `ClassNameFragment` and produces the string result.

The `ClassNameFramgent` is a map with boolean values which indicates should
keys be included in the output or not.
