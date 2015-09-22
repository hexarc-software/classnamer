var classnamer = function () {
    var accum = "";
    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) {
            continue;
        }
        var argType = typeof arg;
        if (argType === "string" || argType === "number" || argType === "boolean") {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = classnamer;
