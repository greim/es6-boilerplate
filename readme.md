# React, iojs, koa, gulp, browserify, ES6, babel, boilerplate project.

This is a boilerplate project showcasing a fully-functional hello-world SPA; including both the server side (koa) and the client side (react), plus a bunch of tooling and in-between stuff (gulp, etc). It uses a combination of technologies that others may or may not be like. That's okay. This isn't supposed to be the end-all of technology stacks, just a snapshot of things that I've been messing around with lately. I'll likely be changing my mind constantly about these decisions and updating this project as the winds of technology change, because that's how I roll.

## What is this supposed to be?

I use this as a reference point and a proving ground for building SPAs in io.js. I'll probably clone it when I start new projects. I thought maybe other people could find it instructive/useful also. If you see room for improvement, file an issue!

## What are the design goals?

 * **ES6** - ES6 is fun(ner than ES<=5). I want to be able to use ES6 *throughout* the project; server-side, client-side, even the in gulpfile.
 * **Sane imports** - Basically I don't want intra-module references to be path-like, e.g. `./lib/thing` or `../../../thing`. To signal what's a local module and what isn't, I want local modules to be prefixed with "lib". Thus, intra-module references will look like for example `import thing from lib/thing`.
 * **Use generators** - I want to use generators for async flow control. It's a huge improvement over the way we write asynchronous JS, but on the other hand it's a hackish stand-in until we have async/await. If/when koa starts supporting async/await out of the box (does it yet?) I'll likely update this project accordingly.
 * **Bleeding-edge** - This is a way for me to learn and experiment with the bleeding-edge of the io.js software ecosystem. Express, Node <= 0.12, Backbone.js, callbacks, are all ancient history from the POV of this project.
 * **Learning** - I want to learn not just from building this, but from feedback and criticism from others about how it's built. I hope others can learn from it too.
 * **Proof of concept, not deep use** - I just want to prove to myself and others how something, for example React ES6 classes, could be used, not all of the ins and outs of using them.

## What aren't the design goals?

 * Showcasing what an enterprize-ready software application looks like. Nope.
 * Yeoman- or rails-like scaffolding for new projects, including configurability, database stores, schemas, etc. This thing is a fully-functioning hello-world SPA, but not configurable beyond that except by cloning the repo and hacking it yourself.
 * Covering every possible nice-to-have use case, such as distributed logging, hot-reloaded modules or templates, server-side rendering, etc. The project would just get too big. At the moment the guiding principle for what does or doesn't get covered is "whatever I feel like," however I'm open to suggestions, so log an issue.
 * To be depended upon. I'll change this project with wild abandon as new techology and techniques become known/available to me. I'll follow semver as well as I can, but this is more reference material than something to be depended upon by other code.
 * Promoting one tool or framework over another. In the event this gets eyeballs on it, that would happen as a side effect, but it was never a goal. Ember and Angular are cool. Hapi is cool. Webpack is cool. I just can't include everything here. As usual, I'm amenable to arguments about what tools get used, so log an issue.

