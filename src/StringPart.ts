import { BaseItem } from './BaseItem';
import { registerComponent } from './components';

import { IStringPart } from './inderface';


export class StringPart extends BaseItem<IStringPart> {

    protected getValue(data: any): string {
        return String(data);
    }

}

registerComponent('string', StringPart);
