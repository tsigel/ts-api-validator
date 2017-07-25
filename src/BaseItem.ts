import { get } from 'ts-utils';
import { IPartialOptions } from './inderface';


export abstract class BaseItem<T extends IPartialOptions<any>> {

    protected options: T;
    protected path: string;

    constructor(options: T, path?: string) {
        this.options = options;
        this.path = path;

        if (this.options.isEmpty) {
            this.isEmpty = this.options.isEmpty;
        }
        if (this.options.isValid) {
            this.isValid = this.options.isValid;
        }

        if (this.options.required && ('defaultValue' in this.options)) {
            throw new Error('Wrong params! Conflict options "required" and defaultValue');
        }
    }

    public process(data: any): any {
        const path = this.getPath();
        let value = this.getValue(this.getDataByPath(data, path));
        const isEmpty = this.isEmpty(value);
        const isValid = this.isValid(value);

        if (this.options.required) {
            if (isEmpty) {
                throw new Error(`Required field "${path}" is empty!`);
            }
        }

        if (('defaultValue' in this.options) && isEmpty) {
            value = this.options.defaultValue;
        } else {
            if (!isValid) {
                throw new Error(`Field "${path}" is invalid!`);
            }
        }

        return value;
    }

    protected getPath(): string {
        return this.options.path || this.path;
    }

    protected isEmpty(data: any): boolean {
        return data == null;
    }

    protected isValid(data: any): boolean {
        return true;
    }

    protected getDataByPath(data: any, path: string): any {
        if (this.options.parseValue) {
            if (path) {
                return this.options.parseValue(get(data, path));
            } else {
                return this.options.parseValue(data);
            }
        } else {
            return get(data, path);
        }
    }

    protected abstract getValue(data: any): any

}
