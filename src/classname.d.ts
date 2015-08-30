export interface ClassNameFragment {
    [key: string]: boolean;
}
export declare function format(...args: Array<string | number | ClassNameFragment>): string;
export declare function none(): void;
