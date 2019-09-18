export const assocPath = (path: Array<string>, store: object) => {
    return path.reduce((acc: object, item: string) => {
        return acc && acc.hasOwnProperty(item) ? (acc as any)[item] : null;
    }, store);
};

export const isObject = (some: any) => typeof some === 'object' && !Array.isArray(some) && some != null;

const numToLength = (length: number, num: number): string => {
    let str = String(num);
    for (let i = str.length; i < length; i++) {
        str = '0' + str;
    }
    return str;
};

const dateParsers = [
    {
        pattern: 'YYYY',
        handler: (localDate: Date): string => String(localDate.getFullYear())
    },
    {
        pattern: 'YY',
        handler: (localDate: Date): string => String(localDate.getFullYear()).substr(2)
    },
    {
        pattern: 'MM',
        handler: (localDate: Date): string => String(numToLength(2, localDate.getMonth() + 1))
    },
    {
        pattern: 'M',
        handler: (localDate: Date): string => String(localDate.getMonth() + 1)
    },
    {
        pattern: 'DD',
        handler: (localDate: Date): string => String(numToLength(2, localDate.getDate()))
    },
    {
        pattern: 'D',
        handler: (localDate: Date): string => String(localDate.getDate())
    },
    {
        pattern: 'hh',
        handler: (localDate: Date): string => String(numToLength(2, localDate.getHours()))
    },
    {
        pattern: 'h',
        handler: (localDate: Date): string => String(localDate.getHours())
    },
    {
        pattern: 'mm',
        handler: (localDate: Date): string => String(numToLength(2, localDate.getMinutes()))
    },
    {
        pattern: 'm',
        handler: (localDate: Date): string => String(localDate.getMinutes())
    },
    {
        pattern: 'ss',
        handler: (localDate: Date): string => String(numToLength(2, localDate.getSeconds()))
    },
    {
        pattern: 's',
        handler: (localDate: Date): string => String(localDate.getSeconds())
    }
];

interface IDatePattern {
    pattern: string;
    handler: (localDate: Date) => string;
}

export interface ICallback<T, R> {
    (data: T): R;
}

const isNumber = (num: any): num is number => typeof num === 'number';

export function date(pattern: string, processor?: ICallback<any, Date>): ICallback<any, string> {
    const localPatterns: Array<IDatePattern> = [];
    let forFind = pattern;
    let parse: ICallback<any, Date>;
    dateParsers.forEach((datePattern: IDatePattern) => {
        if (forFind.indexOf(datePattern.pattern) !== -1) {
            forFind = forFind.replace(datePattern.pattern, '');
            localPatterns.push(datePattern);
        }
    });
    if (processor) {
        parse = (toParse: any) => {
            const result = processor(toParse);
            return isNumber(result) ? new Date(<number>result) : <Date>result;
        };
    } else {
        parse = (data: Date | number) => {
            return isNumber(data) ? new Date(<number>data) : <Date>data;
        };
    }
    return (localDate: any): string => {
        const _date = parse(localDate);
        return localPatterns.reduce((result: string, datePattern: IDatePattern) => {
            return result.replace(datePattern.pattern, datePattern.handler(_date));
        }, pattern);
    };
}