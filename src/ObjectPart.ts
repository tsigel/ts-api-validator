import { BaseItem } from './BaseItem';
import { getComponentConstructor, registerComponent } from './components';
import { isObject, each } from 'ts-utils';

import { IObjectPart, IHash, TSomePart } from './inderface';


export class ObjectPart extends BaseItem<IObjectPart> {

    private _childHash: IHash<BaseItem<any>>;


    constructor(config: IObjectPart) {
        super(config);

        each(this.options.content, (config: TSomePart, key) => {
            const Component = getComponentConstructor(config.type);
            this._childHash[key] = new Component(config);
        });
    }

    public process(data: any): any {
        const value = super.process(data);
        if (value && isObject(value)) {
            const result = Object.create(null);
            each(value, (data: any, key: string) => {
                result[key] = this._childHash[key].process(data);
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

registerComponent('object', ObjectPart);
