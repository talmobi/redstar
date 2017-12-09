#  redstar - simple file globber

## Simple to use
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

# About
Simple globber. Ignores `**/node_modules/**`, `**.git/**` and `.hidden` files by default.

# Why
Lightweight quick and easy -- had some trouble/slowness with other popular glob modules.

# How
fs.readdir and minimist.

# Alternatives
[node-glob](https://github.com/isaacs/node-glob#glob)

# Test
```bash
npm test
```
