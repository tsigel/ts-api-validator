import { BaseItem } from './BaseItem';
import { IPartialOptions } from './interfaces';


export class StringPart extends BaseItem<IPartialOptions<string>> {

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
