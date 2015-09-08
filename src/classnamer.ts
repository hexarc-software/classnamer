export type ClassNamePrimitive = string | number | boolean;
export type ClassNameObject = { [key: string]: boolean };
export type ClassNameFragment = ClassNamePrimitive | ClassNameObject | ClassNameFragmentList;
export interface ClassNameFragmentList extends Array<ClassNameFragment> { }

export function format(...args: ClassNameFragment[]): string {
    return args.reduce<Array<string | number | boolean>>((accum, arg) => {
        do {
            if (!arg) {
                break;
            } else if (typeof arg === "string" || typeof arg === "number" || typeof arg === "boolean") {
                accum.push(arg);
            } else if (Array.isArray(arg)) {
                accum.push(format.apply(null, arg));
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
