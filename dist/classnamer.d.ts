export declare type ClassNamePrimitive = string | number | boolean;
export declare type ClassNameObject = {
    [key: string]: boolean;
};
export declare type ClassNameFragment = ClassNamePrimitive | ClassNameObject | ClassNameFragmentList;
export interface ClassNameFragmentList extends Array<ClassNameFragment> {
}
export interface IFormat {
    (...args: ClassNameFragment[]): string;
}
export declare const format: IFormat;
