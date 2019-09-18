import { BasePart } from './BasePart';
import { IPartialOptions } from './interfaces';


export class NumberPart extends BasePart<IPartialOptions<number>> {

    protected isValid(data: number | null): boolean {
        return data == null || !isNaN(data);
    }

    protected getValue(data: any): number | null {
        switch (typeof data) {
            case 'number':
                return data;
            case 'string':
                return Number(data);
            default:
                return data == null ? data : null;
        }
    }

}
