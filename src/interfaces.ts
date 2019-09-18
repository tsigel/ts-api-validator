import { BasePart } from './BasePart';
import { StringDatePart } from './StringDatePart';
import { ObjectPart } from './ObjectPart';
import { ArrayPart } from './ArrayPart';

export interface IPartialOptions<T> {
    type: IBaseItemConstructor<T, any>;
    path?: string | null;
    defaultValue?: T;
    required?: boolean;
    isEmpty?: (value: any) => boolean;
    isValid?: (value: any) => boolean;
    parseValue?: (value: any) => T;
}

export interface IStringDatePart extends IPartialOptions<string> {
    type: typeof StringDatePart;
    outPattern?: string;
}

export interface IObjectPart extends IPartialOptions<Record<string, any>> {
    type: typeof ObjectPart;
    content: Record<string, TSomePart>;
}

export interface IArrayPart<T> extends IPartialOptions<Array<T>> {
    type: typeof ArrayPart;
    content: TSomePart;
}

export type TSomePart =
    IStringDatePart
    | IObjectPart
    | IArrayPart<any>
    | IPartialOptions<any>;

export interface IBaseItemConstructor<T, OPTIONS extends IPartialOptions<T>> {
    new(options: OPTIONS, path?: string): BasePart<IPartialOptions<T>>
}
