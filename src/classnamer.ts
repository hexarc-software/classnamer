export interface ClassNameFragment {
    [key: string]: boolean;
}

export function format(...args: Array<string | number | ClassNameFragment>): string {
    return args.reduce<Array<string | number>>((accum, arg) => {
        do {
            if (!arg) {
                break;
            } else if (typeof arg === "string" || typeof arg === "number") {
                accum.push(arg);
            } else {
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
