
/*
 * This is the entry point for running gulp. However,
 * since we want to write everything in es6, this file
 * just invokes the babel require hook and then pulls
 * in the rest of the gulp logic (and by extension, the
 * rest of the server-side logic) through the babel
 * transpiler.
 */

'use strict'

var patt = /x/

// this is a god-awful hack that future babel versions should alleviate

patt.test = function(str){
  return str !== __dirname + '/gulpfile-es6.js'
    && !str.startsWith(__dirname + '/node_modules/lib/')
    && str !== __dirname + '/app.js'
}

require('babel/register')({
  ignore: patt
})

require('./gulpfile-es6')
