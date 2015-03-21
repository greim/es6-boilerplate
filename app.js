// --------------------------------------------------------
// Copyright (c) 2015 by Greg Reimer <gregreimer@gmail.com>
// MIT License. See license.txt for more info.

/*
 * Here's our main server app. This doesn't actually
 * run a server, it just exports a koa app that can
 * be run from anywhere, for example from gulp for dev,
 * or from a special runner script in deployment.
 */

'use strict'

import koa from 'koa'
import templates from 'lib/template-helper'
import fileService from 'koa-static'

const app = koa()

export default app

// logging -----------------------
app.use(function*(next) {
  try {
    yield next
  } finally {
    console.log('%s %s %s %s',
      new Date().toISOString(),
      this.request.method,
      this.request.url,
      this.response.status
    )
  }
})

// add status (hackish) -----------------------
// open to suggestions of a better way here
app.use(function*(next) {
  try {
    yield next
  } catch(ex) {
    this.response.status = ex.status || 500
    throw ex
  }
})

// serve out of static dir -----------------------
app.use(fileService(__dirname + '/static', {}))

// send page -----------------------
app.use(function*() {
  this.body = templates('/app.html', {})
})
