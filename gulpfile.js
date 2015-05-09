// --------------------------------------------------------
// Copyright (c) 2015 by Greg Reimer <gregreimer@gmail.com>
// MIT License. See license.txt for more info.

/*
 * This is the entry point for running gulp. However,
 * since we want to write everything in es6, this file
 * just invokes the babel require hook and then pulls
 * in the rest of the gulp logic (and by extension, the
 * rest of the server-side logic) through the babel
 * transpiler.
 */

'use strict'

require('babel/register')({
  ignore: false,
  only: [
    __dirname + '/node_modules/lib/**/*.js',
    __dirname + '/node_modules/lib/*.js',
    __dirname + '/gulpfile-es6.js',
    __dirname + '/app.js',
  ]
})

require('./gulpfile-es6')
