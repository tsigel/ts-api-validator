import { BaseItem } from './BaseItem';
import { getComponentConstructor, registerComponent } from './components';
import { isArray } from 'ts-utils';

import { IArrayPart } from './inderface';


export class ArrayPart extends BaseItem<IArrayPart> {

    private _child: BaseItem<any>;

    constructor(config: IArrayPart) {
        super(config);
        const Component = getComponentConstructor(this.options.content.type);
        this._child = new Component(this.options.content);
    }

    public process(data: any): any {
        const value = super.process(data);
        if (value && isArray(value)) {
            return value.map((data) => {
                return this._child.process(data);
            });
        } else {
            return value;
        }
    }

    protected getValue(data: any): Array<any> {
        if (isArray(data)) {
            return data;
        } else {
            return null;
        }
    }

}

registerComponent('array', ArrayPart);
