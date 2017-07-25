import { TSomePart } from './inderface';
import { BaseItem } from './BaseItem';
import { getComponentConstructor } from './components';


export class Schema {

    private _children: BaseItem<any>;


    constructor(config: TSomePart) {
        const Component = getComponentConstructor(config.type);
        this._children = new Component(config);
    }

    public parse(data: any): any {
        return this._children.process(data);
    }

}
