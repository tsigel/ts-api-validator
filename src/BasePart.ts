import { IPartialOptions } from './interfaces';
import { assocPath } from './utils';


export abstract class BasePart<T extends IPartialOptions<any>> {

    protected options: T;
    protected path: string | null;

    constructor(options: T, path?: string) {
        this.options = options;
        this.path = path || null;

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

    public process(data: any): T['defaultValue'] {
        const path = this.getPath();
        const pathData = this.getDataByPath(data, path);
        let value = pathData == null ? pathData : this.getValue(pathData);
        const isEmpty = this.isEmpty(value);
        const isValid = this.isValid(value);
        const type = (this.options.type as any).name || (this.options.type as any).prototype.constructor.name;
        const pathTpl = path ? ` with path "${path}" ` : ' ';

        if (this.options.required) {
            if (isEmpty) {
                throw new Error(`Required field type "${type}"${pathTpl}is empty!`);
            }
        }

        if (('defaultValue' in this.options) && isEmpty) {
            value = this.options.defaultValue;
        } else {
            if (!isValid) {
                throw new Error(`Field${pathTpl}is invalid!`);
            }
        }

        return value;
    }

    protected getPath(): string | null {
        return this.options.path === null ? null : this.options.path || this.path;
    }

    protected isEmpty(data: any): boolean {
        return data == null;
    }

    protected isValid(data: any): boolean {
        return true;
    }

    protected getDataByPath(data: any, path: string | null): any {
        if (this.options.parseValue) {
            if (path) {
                return this.options.parseValue(assocPath(path.split('.'), data));
            } else {
                return this.options.parseValue(data);
            }
        } else if (path != null) {
            return assocPath(path.split('.'), data);
        } else {
            return data;
        }
    }

    protected abstract getValue(data: any): any

}
