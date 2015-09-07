var dts = require('dts-bundle');

dts.bundle({
    name: "classnamer",
    main: "dist/classnamer.d.ts",
    out: "./../index.d.ts"
});
