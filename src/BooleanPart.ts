import { BaseItem } from './BaseItem';
import { registerComponent } from './components';

import { IBooleanPart } from './inderface';


export class BooleanPart extends BaseItem<IBooleanPart> {

    protected getValue(data: any): boolean {
        return Boolean(data);
    }

}

registerComponent('boolean', BooleanPart);
