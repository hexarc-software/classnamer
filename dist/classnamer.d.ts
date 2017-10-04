export declare type ClassNamePrimitive = string | number | boolean | null | undefined;
export declare type ClassNameObject = {
    [key: string]: boolean | null | undefined;
};
export declare type ClassNameFragment = ClassNamePrimitive | ClassNameObject | ClassNameFragmentList | null | undefined;
export interface ClassNameFragmentList extends Array<ClassNameFragment> {
}
export default function classnamer(...args: ClassNameFragment[]): string;
