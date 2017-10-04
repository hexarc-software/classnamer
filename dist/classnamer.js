"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function classnamer() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var accum = "";
    for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        if (!arg) {
            continue;
        }
        if (typeof arg === "string" || typeof arg === "number" || typeof arg === "boolean") {
            accum += " " + arg;
        }
        else if (Array.isArray(arg)) {
            accum += " " + classnamer.apply(null, arg);
        }
        else {
            for (var key in arg) {
                if (arg[key]) {
                    accum += " " + key;
                }
            }
        }
    }
    return accum.substring(1);
}
exports.default = classnamer;
