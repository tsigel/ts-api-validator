import { BaseItem } from './BaseItem';
import { registerComponent } from './components';

import { IStringPart } from './inderface';


export class StringPart extends BaseItem<IStringPart> {

    protected getValue(data: any): string {
        switch (typeof data) {
            case 'string':
                return data;
            case 'number':
                return String(data);
            default:
                return null;
        }
    }

}

registerComponent('string', StringPart);
