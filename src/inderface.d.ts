export interface IPartialOptions<T> {
    path?: string;
    defaultValue?: T;
    required?: boolean;
    isEmpty?: (value: any) => boolean;
    isValid?: (value: any) => boolean;
    parseValue?: (value: any) => T;
}

export interface INumberPart extends IPartialOptions<number> {
    type: 'number';
}

export interface IStringPart extends IPartialOptions<string> {
    type: 'string';
}

export interface IBooleanPart extends IPartialOptions<boolean> {
    type: 'boolean';
}

export interface IStringDatePart extends IPartialOptions<string> {
    type: 'string-date';
    outPattern?: string;
}

export interface IDatePart extends IPartialOptions<Date> {
    type: 'date';
}

export interface IAnyPart extends IPartialOptions<any> {
    type: 'any';
}

export interface IObjectPart extends IPartialOptions<IHash<any>> {
    type: 'object';
    content: IHash<TSomePart>;
}

export interface IArrayPart extends IPartialOptions<Array<any>> {
    type: 'array';
    content: TSomePart;
}

export type TSomePart =
    INumberPart
    | IStringPart
    | IBooleanPart
    | IStringDatePart
    | IDatePart
    | IAnyPart
    | IObjectPart
    | IArrayPart;

export interface IHash<T> {
    [key: string]: T;
}
