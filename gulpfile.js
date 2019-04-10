'use strict';

const { series, parallel, src, dest, watch } = require( 'gulp' );

const uglify  = require( 'gulp-uglify' ),
      sass    = require( 'gulp-sass' );

const js = () => {
  return src( './src/js/script.js' )
    .pipe( uglify() )
    .pipe( dest( './assets' ) );
}

const css = () => {
  return src( './src/sass/*.scss' )
    .pipe( sass({
      outputStyle: 'compressed'
    })
    .on( 'error', sass.logError ))
    .pipe( dest( './assets' ) );
}

const watchFiles = () => {
  watch( './src/sass/**/*.scss', parallel( css ) );
  watch( './src/js/**/*.js', parallel( js ) );
}

const build = ( done ) => {
  parallel( css, js );
  done();
}

exports.dev = series( build, watchFiles );