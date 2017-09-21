import { BaseItem } from './BaseItem';
import { IPartialOptions } from './interfaces';


export class BooleanPart extends BaseItem<IPartialOptions<boolean>> {

    protected getValue(data: any): boolean {
        switch (typeof data) {
            case 'boolean':
                return data;
            case 'string':
            case 'number':
                return Boolean(data);
            default:
                return null;
        }
    }

}
