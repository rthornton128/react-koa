#!/usr/bin/env node

const Koa = require('koa');
const compress = require('koa-compress');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();

// enable compression, using defaults
app.use(compress({}));

// serve the webpack distribution directory
app.use(serve(path.resolve(__dirname, "../dist")));

app.listen(3000);

console.log("listening on port 3000")