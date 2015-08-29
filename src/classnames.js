function default_1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return args.reduce(function (accum, arg) {
        do {
            if (!arg) {
                break;
            }
            else if (typeof arg === "string" || typeof arg === "number") {
                accum.push(arg);
            }
            else {
                for (var key in arg) {
                    if (arg[key]) {
                        accum.push(key);
                    }
                }
            }
        } while (false);
        return accum;
    }, []).join(" ");
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
