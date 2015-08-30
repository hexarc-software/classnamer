declare module classnames {
    interface ClassNameFragment {
        [key: string]: boolean;
    }
    function format(...args: Array<string | number | ClassNameFragment>): string;
    function none(): void;
}
