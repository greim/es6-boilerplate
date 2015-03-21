
'use strict'

import gulp from 'gulp'
import less from 'gulp-less'
import source from 'vinyl-source-stream'
import babelify from 'babelify'
import watchify from 'watchify'
import browserify from 'browserify'
import props from 'lib/props'
import app from './server'

const bundleTools = (() => {

  function jsError(err) {
    if (err.lineNumber) {
      console.error('%s in %s, line %d, column %d', err.description, err.fileName, err.lineNumber, err.column)
    } else {
      console.error(err.stack)
    }
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
          .on('error', cssError)
          .pipe(less(lessOpts))
          .pipe(gulp.dest(opts.destDir));
        }
        gulp.watch(opts.watchGlob, bundle);
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
          const bundling = bundler.bundle()
          bundling.on('error', jsError)
          return bundling
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
  destDir: './static/css'
}))






