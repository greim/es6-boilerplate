# ES6 boilerplate SPA.

This is an annotated, end-to-end showcase for a fully-functional (but minimal) hello-world webapp.
Technologies used:

 * **io.js**: Server platform. https://iojs.org/
 * **es6**: Language. http://www.2ality.com/2014/08/es6-today.html
 * **babel**: Transpilation. https://babeljs.io/
 * **browserify**: Bundling and import strategy. http://browserify.org/
 * **koa**: Server-side framework. http://koajs.com/
 * **react**: Client-side framework. http://facebook.github.io/react/
 * **gulp**: Build tooling. http://gulpjs.com/
 * **less**: CSS dialect. http://lesscss.org/

## Why?

Most great libs and frameworks have great docs that answer the question *How do you use this?*
But when it comes to fitting all these pieces together, there isn't much out there.
So I set out to illustrate *one way* that the pieces could fit together.
I might borrow from this when I start new projects, and update it when I learn new things.
I thought maybe other people would find it instructive/useful also.

## Design goals

 * **ES6** - ES6 everywhere.
 * **Minimal** - No deep functionality, just how to fit pieces together.
 * **Sane imports** - `import thing from 'lib/thing'`, never `'../../../thing'`.
 * **Eliminate callbacks** - Use generators, and eventually async/await, for async flow control.
 * **Bleeding-edge** - Messing with new toys is fun, and useful if/when those toys become widely-adopted.
 * **Learning and sharing** - More eyeballs on this would be nice.

## Not design goals

 * Showcasing an enterprize-ready solution.
 * Yeoman- or rails-like configurable scaffolding for new projects.
 * Covering every possible nice-to-have use case.

## How does one run this project?

 1. Have `io.js` installed.
 1. Have `gulp` installed. (`npm install gulp -g`)
 1. Clone this repo to `$REPO`.
 1. Stand in `$REPO` and type `npm install`.
 1. Stand in `$REPO` and type `gulp`.
 1. Visit http://localhost:8888 in your browser.




