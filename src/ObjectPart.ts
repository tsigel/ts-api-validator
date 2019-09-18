import { BasePart } from './BasePart';
import { IBaseItemConstructor, IObjectPart, TSomePart } from './interfaces';
import { isObject } from './utils';


export class ObjectPart extends BasePart<IObjectPart> {

    private readonly _childHash: Record<string, BasePart<any>>;


    constructor(config: IObjectPart, path?: string) {
        super(config, path);

        const myPath = this.getPath();

        this._childHash = Object.create(null);

        Object.entries(this.options.content).forEach(([key, config]: [string, TSomePart]): void => {
            const Component = config.type as IBaseItemConstructor<any, any>;
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
            return [];
        }
    }

}
