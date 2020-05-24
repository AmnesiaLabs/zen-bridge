# one-liner [![Build Status](https://travis-ci.org/chtefi/one-liner.svg?branch=master)](https://travis-ci.org/chtefi/one-liner)

> Transform a string to a one line string by converting and merging line breaks/carriages, tabs, spaces.

## Why

If you want to display some strings in the console that could have potentially have spaces, line breaks etc. that are
not really important.

## Install

```
$ npm install --save one-liner
```

## Usage

```js
var oneliner = require('oneliner')

var oneline = oneliner(`Hey !
  This is my text file
  with a lot of blabla and some code:
    function t(a, b) {
      return a + b;
    }`)

console.log(oneline)
// Hey ! This is my text file with a lot of blabla and some code: function t(a, b) { return a + b; }
```

It also support template literals:

```js
oneliner`This is amazing.
         It truly is phenomenal
         based on what they say`
```

It replaces and collapses `\t\r\n` and spaces.
