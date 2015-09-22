export declare type ClassNamePrimitive = string | number | boolean;
export declare type ClassNameObject = {
    [key: string]: boolean;
};
export declare type ClassNameFragment = ClassNamePrimitive | ClassNameObject | ClassNameFragmentList;
export interface ClassNameFragmentList extends Array<ClassNameFragment> {
}
export declare type IFormat = (...args: ClassNameFragment[]) => string;
declare const classnamer: IFormat;
export default classnamer;
