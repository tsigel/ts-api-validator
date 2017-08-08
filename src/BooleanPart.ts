import { BaseItem } from './BaseItem';
import { registerComponent } from './components';

import { IBooleanPart } from './inderface';


export class BooleanPart extends BaseItem<IBooleanPart> {

    protected getValue(data: any): boolean {
        switch (typeof data) {
            case 'boolean':
                return data;
            case 'string':
            case 'number':
                return Boolean(data);
            default:
                return null;
        }
    }

}

registerComponent('boolean', BooleanPart);
