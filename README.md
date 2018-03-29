[![npm](https://img.shields.io/npm/v/redstar.svg?maxAge=3600&style=flat-square)](https://www.npmjs.com/package/redstar)
[![npm](https://img.shields.io/npm/l/redstar.svg?maxAge=3600&style=flat-square)](https://github.com/talmobi/redstar/blob/master/LICENSE)

#  redstar 💥
basic file globber

## Easy to use
```js
var glob = require( 'redstar' )
glob( 'src/**/*.js', function ( err, files, dirs ) {
  if ( err ) {
    // any errors e.g. permission EACCES errors etc
    err.forEach( function ( err ) {
      console.error( err )
    } )
  }

  // all matched files
  files.forEach( function ( file ) {
    console.log( 'file: ' + file )
  } )

  // all recursed dirs ( including dirs without any matching files )
  dirs.forEach( function ( dir ) {
    console.log( 'dir: ' + dir )
  } )
} )
```

## About
Simple globber. Ignores `**/node_modules/**`, `**.git/**` and `.hidden` files by default.

## Why
Small, quick, and easy -- had some inconsistency problems using other popular alternatives.

## How
fs.readdir and [minimatch](https://github.com/isaacs/minimatch).

## Alternatives
[node-glob](https://github.com/isaacs/node-glob)

## Test
```bash
npm test
```
