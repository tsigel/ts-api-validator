import { BasePart } from './BasePart';
import { IPartialOptions } from './interfaces';


export class DatePart extends BasePart<IPartialOptions<Date>> {

    protected getValue(data: any): Date | null | undefined {
        if (data == null) {
            return data;
        }

        switch (typeof data) {
            case 'object':
            case 'string':
            case 'number':
                return DatePart._returnValidDate(data);
            default:
                return null;
        }
    }

    protected isValid(data: any): boolean {
        return !data || data instanceof Date && !isNaN(data.getTime());
    }

    private static _returnValidDate<T>(date: Date | string | number | object): Date | null | undefined {
        if (typeof date === 'object') {
            if (date instanceof Date) {
                return date;
            } else {
                return null;
            }
        }

        return new Date(date);
    }

}
