
'use strict'

var patt = /x/

// this is a god-awful hack that future babel versions should alleviate

patt.test = function(str){
  return str !== __dirname + '/gulpfile-es6.js'
    && !str.startsWith(__dirname + '/node_modules/lib/')
    && str !== __dirname + '/server.js'
}

require('babel/register')({
  ignore: patt
})

require('./gulpfile-es6')
