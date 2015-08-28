var browserify = require("browserify");
var tsify = require("tsify");
var fs = require("fs");

browserify()
    .add('test.ts')
    .plugin('tsify', { noImplicitAny: true })
    .bundle()
    .on('error', function (error) { console.error(error.toString()); })
    .pipe(fs.createWriteStream(__dirname  + "/bundle.js"));
