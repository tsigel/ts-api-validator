import { BasePart } from './BasePart';
import { IArrayPart, IBaseItemConstructor } from './interfaces';


export class ArrayPart<T> extends BasePart<IArrayPart<T>> {

    private _child: BasePart<any>;

    constructor(config: IArrayPart<T>, path?: string) {
        super(config, path);
        const Component = this.options.content.type as IBaseItemConstructor<any, any>;
        this._child = new Component(this.options.content);
    }

    public process(data: any): any {
        const value = super.process(data);
        if (value && Array.isArray(value)) {
            return value.map((data: any) => {
                return this._child.process(data);
            });
        } else {
            return value;
        }
    }

    protected getValue(data: any): Array<any> | null {
        if (Array.isArray(data)) {
            return data;
        } else {
            return null;
        }
    }

}
