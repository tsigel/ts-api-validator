import { BasePart } from './BasePart';
import { IPartialOptions } from './interfaces';


export class StringPart extends BasePart<IPartialOptions<string>> {

    protected getValue(data: any): string | null {
        switch (typeof data) {
            case 'string':
                return data;
            case 'number':
                return String(data);
            default:
                return data == null ? data : null;
        }
    }

}
