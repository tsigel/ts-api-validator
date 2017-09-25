import { BaseItem } from './BasePart';
import { isArray } from 'ts-utils';

import { IArrayPart, IBaseItemConstructor } from './interfaces';


export class ArrayPart extends BaseItem<IArrayPart> {

    private _child: BaseItem<any>;

    constructor(config: IArrayPart, path?: string) {
        super(config, path);
        const Component = this.options.content.type as IBaseItemConstructor<any>;
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
