// --------------------------------------------------------
// Copyright (c) 2015 by Greg Reimer <gregreimer@gmail.com>
// MIT License. See mit-license.txt for more info.

/*
 * Okay, here's the actual gulpfile logic, written in es6 (yay).
 */

'use strict'

import gulp from 'gulp'
import less from 'gulp-less'
import source from 'vinyl-source-stream'
import babelify from 'babelify'
import watchify from 'watchify'
import browserify from 'browserify'
import props from 'lib/props'
import app from './app'

/*
 * These tools are reusable to allow
 * calling with different options.
 */
const bundleTools = (() => {

  function jsError(err) {
    console.log(err.message)
    process.exit(1);
  }

  function cssError(err) {
    console.error(err.message)
    process.exit(1)
  }

  const lessOpts = { sourceMap: true }
      , browserifyOpts = { debug: true, cache: {}, packageCache: {}, fullPaths: true }

  return {

    css(opts) {
      return () => {
        function bundle() {
          console.log('compiling less %s -> %s', opts.entryPoint, opts.destDir);
          return gulp.src(opts.entryPoint)
          .pipe(less(lessOpts))
          .on('error', cssError)
          .pipe(gulp.dest(opts.destDir))
        }
        /*
         * So there's a nasty issue preventing gulp watch
         * from working in ES6 due to some outdated libs
         * in play. Commenting out watch as a workaround,
         * but hopefully the libs will update themselves
         * and eliminate the issue. Until then you need to
         * restart server for CSS to update :(
         * https://github.com/zloirock/core-js/issues/34
         */
        //gulp.watch(opts.watchGlob, bundle)
        return bundle();
      }
    },

    js(opts) {
      return () => {

        const bundler = watchify(browserify(opts.entryPoint, browserifyOpts)
        .transform(babelify))
        .on('update', bundle)

        return bundle()

        function bundle() {
          console.log('compiling js %s -> %s', opts.entryPoint, opts.destDir)
          return bundler.bundle()
          .on('error', jsError)
          .pipe(source(opts.outputFileName))
          .pipe(gulp.dest(opts.destDir))
        }
      }
    }
  }
})()

gulp.task('default', ['js', 'css'], done => {
  app.listen(props.port)
  setImmediate(() => {
    console.log('-----------------------')
    console.log('server listening on %d', props.port)
  })
  done()
})

gulp.task('js', bundleTools.js({
  entryPoint: './node_modules/lib/main.jsx',
  destDir: './static/js',
  outputFileName: 'main.js'
}))

gulp.task('css', bundleTools.css({
  entryPoint: './less/main.less',
  destDir: './static/css',
  watchGlob: './less/**/*.less'
}))


