export type ClassNamePrimitive = string | number | boolean;
export type ClassNameObject = { [key: string]: boolean };
export type ClassNameFragment = ClassNamePrimitive | ClassNameObject | ClassNameFragmentList;
export interface ClassNameFragmentList extends Array<ClassNameFragment> { }
export type IFormat = (...args: ClassNameFragment[]) => string;

export const format: IFormat = function() {
    let accum = "";
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        if (!arg) {
            continue;
        }
        let argType = typeof arg;
        if (argType === "string" || argType === "number" || argType === "boolean") {
            accum += " " + arg;
        } else if (Array.isArray(arg)) {
            accum += " " + format.apply(null, arg);
        } else {
            for (let key in arg) {
                if (arg[key]) {
                    accum += " " + key;
                }
            }
        }
    }
    return accum.substring(1);
}
