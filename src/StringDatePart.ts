import { OUT_DATE_PATTERN } from './config';
import { IStringDatePart } from './interfaces';
import { date, ICallback } from './utils';
import { BasePart } from './BasePart';
import { DatePart } from './DatePart';


export class StringDatePart extends BasePart<IStringDatePart> {

    protected readonly dateProcessor: ICallback<any, string>;
    protected readonly datePart: DatePart;

    constructor(config: IStringDatePart, path?: string) {
        super(config, path);
        this.dateProcessor = date(this.options.outPattern || OUT_DATE_PATTERN);
        this.datePart = new DatePart({ type: DatePart });
    }

    protected isValid(date: string): boolean {
        return true;
    }

    protected getValue(data: any): string | null | undefined {
        const value = this.datePart.process(data);
        return value == null ? null : this.dateProcessor(value);
    }

}
