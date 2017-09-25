import { IBaseItemConstructor, TSomePart } from './interfaces';
import { BaseItem } from './BasePart';


export class Schema {

    private _children: BaseItem<any>;


    constructor(config: TSomePart) {
        const Component = config.type as IBaseItemConstructor<any>;
        this._children = new Component(config);
    }

    public parse(data: any): any {
        return this._children.process(data);
    }

}
