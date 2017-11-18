var test = require( 'tape' )

var glob = require( '../redstar.js' )

test( '*', function ( t ) {
  glob( '*', function ( err, files ) {
    t.deepEqual(
      files,
      [ 'test.js' ]
    )
    t.end()
  } )
} )

test( '**', function ( t ) {
  glob( '**', function ( err, files ) {
    t.deepEqual(
      files.sort(),
      [
        'test.js',
        'stage/foo.js',
        'stage/foo.css',
        'stage/foo.txt',
        'stage/level1-a/foo1a.css',
        'stage/level1-a/foo1a.js',
        'stage/level1-a/foo1a.txt',
        'stage/level1-b/foo1a.css',
        'stage/level1-b/foo1a.js',
        'stage/level1-b/foo1a.txt',
        'stage/level1-a/level2-a/foo2a.css',
        'stage/level1-a/level2-a/foo2a.js',
        'stage/level1-a/level2-a/foo2a.txt',
        'stage/level1-a/level2-b/foo2b.txt',
        'stage/level1-a/level2-c/foo2c.css'
      ].sort()
    )
    t.end()
  } )
} )

test( '**/*   ( should have same effect as ** )', function ( t ) {
  glob( '**/*', function ( err, files ) {
    t.deepEqual(
      files.sort(),
      [
        'test.js',
        'stage/foo.js',
        'stage/foo.css',
        'stage/foo.txt',
        'stage/level1-a/foo1a.css',
        'stage/level1-a/foo1a.js',
        'stage/level1-a/foo1a.txt',
        'stage/level1-b/foo1a.css',
        'stage/level1-b/foo1a.js',
        'stage/level1-b/foo1a.txt',
        'stage/level1-a/level2-a/foo2a.css',
        'stage/level1-a/level2-a/foo2a.js',
        'stage/level1-a/level2-a/foo2a.txt',
        'stage/level1-a/level2-b/foo2b.txt',
        'stage/level1-a/level2-c/foo2c.css'
      ].sort()
    )
    t.end()
  } )
} )

test( 'stage/*', function ( t ) {
  glob( 'stage/*', function ( err, files ) {
    t.deepEqual(
      files.sort(),
      [
        'stage/foo.css',
        'stage/foo.js',
        'stage/foo.txt'
      ].sort()
    )
    t.end()
  } )
} )

test( 'stage/**', function ( t ) {
  glob( 'stage/**', function ( err, files ) {
    t.deepEqual(
      files.sort(),
      [
        'stage/foo.js',
        'stage/foo.css',
        'stage/foo.txt',
        'stage/level1-a/foo1a.css',
        'stage/level1-a/foo1a.js',
        'stage/level1-a/foo1a.txt',
        'stage/level1-b/foo1a.css',
        'stage/level1-b/foo1a.js',
        'stage/level1-b/foo1a.txt',
        'stage/level1-a/level2-a/foo2a.css',
        'stage/level1-a/level2-a/foo2a.js',
        'stage/level1-a/level2-a/foo2a.txt',
        'stage/level1-a/level2-b/foo2b.txt',
        'stage/level1-a/level2-c/foo2c.css'
      ].sort()
    )
    t.end()
  } )
} )

test( '**/*.js', function ( t ) {
  glob( '**/*.js', function ( err, files ) {
    t.deepEqual(
      files.sort(),
      [
        'test.js',
        'stage/foo.js',
        'stage/level1-a/foo1a.js',
        'stage/level1-b/foo1a.js',
        'stage/level1-a/level2-a/foo2a.js'
      ].sort()
    )
    t.end()
  } )
} )

test( 'stage/**/*.js', function ( t ) {
  glob( 'stage/**/*.js', function ( err, files ) {
    t.deepEqual(
      files.sort(),
      [
        'stage/foo.js',
        'stage/level1-a/foo1a.js',
        'stage/level1-b/foo1a.js',
        'stage/level1-a/level2-a/foo2a.js'
      ].sort()
    )
    t.end()
  } )
} )

test( '**/*.css', function ( t ) {
  glob( '**/*.css', function ( err, files ) {
    t.deepEqual(
      files.sort(),
      [
        'stage/foo.css',
        'stage/level1-a/foo1a.css',
        'stage/level1-b/foo1a.css',
        'stage/level1-a/level2-a/foo2a.css',
        'stage/level1-a/level2-c/foo2c.css'
      ].sort()
    )
    t.end()
  } )
} )

test( '**/level1-a/**/*.txt', function ( t ) {
  glob( '**/level1-a/**/*.txt', function ( err, files ) {
    t.deepEqual(
      files.sort(),
      [
        'stage/level1-a/foo1a.txt',
        'stage/level1-a/level2-a/foo2a.txt',
        'stage/level1-a/level2-b/foo2b.txt'
      ].sort()
    )
    t.end()
  } )
} )
