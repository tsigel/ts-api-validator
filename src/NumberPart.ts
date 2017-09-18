import { BaseItem } from './BaseItem';
import { registerComponent } from './components';

import { INumberPart } from './interfaces';


export class NumberPart extends BaseItem<INumberPart> {

    protected getValue(data: any): number {
        switch (typeof data) {
            case 'number':
                return data;
            case 'string':
                return Number(data);
            default:
                return null;
        }
    }

    protected isEmpty(data: any): boolean {
        return data == null || isNaN(data);
    }

}

registerComponent('number', NumberPart);
