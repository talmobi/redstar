var glob = require( './redstar.js' )

// glob( '**/level2*/*c*', function ( err, files, dirs ) {
//   console.log( '== files == ' )
//   console.log( files )
// 
//   console.log( '== dirs == ' )
//   console.log( dirs )
// } )

glob( '**/level*a*/*', function ( err, files, dirs ) {
  console.log( '== files == ' )
  console.log( files )

  console.log( '== dirs == ' )
  console.log( dirs )
} )
