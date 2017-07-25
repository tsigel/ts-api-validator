import { BaseItem } from './BaseItem';
import { registerComponent } from './components';

import { INumberPart } from './inderface';


export class NumberPart extends BaseItem<INumberPart> {

    protected getValue(data: any): number {
        return Number(data);
    }

    protected isEmpty(data: any): boolean {
        return data == null || isNaN(data);
    }

}

registerComponent('number', NumberPart);
