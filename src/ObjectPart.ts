import { BasePart } from './BasePart';
import { each, isObject } from 'ts-utils';

import { IBaseItemConstructor, IHash, IObjectPart, TSomePart } from './interfaces';


export class ObjectPart extends BasePart<IObjectPart> {

    private _childHash: IHash<BasePart<any>>;


    constructor(config: IObjectPart, path?: string) {
        super(config, path);

        const myPath = this.getPath();

        this._childHash = Object.create(null);

        each(this.options.content, (config: TSomePart, key) => {
            const Component = config.type as IBaseItemConstructor<any>;
            const localPath = path == null ? String(key) : `${myPath}.${key}`;
            this._childHash[key] = new Component(config, localPath);
        });
    }

    public process(data: any): any {
        const value = super.process(data);
        if (value && isObject(value)) {
            const result = Object.create(null);
            Object.keys(this._childHash).forEach((name) => {
                result[name] = this._childHash[name].process(data);
            });
            return result;
        } else {
            return value;
        }
    }

    protected getValue(data: any): Array<any> {
        if (isObject(data)) {
            return data;
        } else {
            return null;
        }
    }

}
