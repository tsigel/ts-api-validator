import { BaseItem } from './BaseItem';
import { IPartialOptions } from './interfaces';


export class DatePart extends BaseItem<IPartialOptions<Date>> {

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
