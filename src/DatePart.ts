import { BaseItem } from './BaseItem';
import { registerComponent } from './components';

import { IDatePart } from './interfaces';


export class DatePart extends BaseItem<IDatePart> {

    protected getValue(data: any): Date {

        if (data instanceof Date) {
            return data;
        }

        if (typeof data === 'number') {
            return new Date(data);
        }

        return null;
    }

}

registerComponent('date', DatePart);
