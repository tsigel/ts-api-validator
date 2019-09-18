import 'jest';
import { Schema } from '../index';
import { ObjectPart } from '../src/ObjectPart';
import { NumberPart } from '../src/NumberPart';
import { StringPart } from '../src/StringPart';
import { DatePart } from '../src/DatePart';
import { StringDatePart } from '../src/StringDatePart';
import { balanceData, balanceSchema } from './balance.conf';
import { unconfirmedData, unconfirmedSchena } from './unconfirmed.conf';


it('Check param without path', () => {
    const schema = new Schema({
        type: ObjectPart,
        content: {
            test: {
                type: StringPart,
                path: null,
                parseValue: function (data) {
                    expect(typeof data).toBe('object');
                    expect(data.test).toBe('test');
                }
            }
        }
    });

    schema.parse({ test: 'test' });
});

describe('Check balance schema', () => {

    it('Schema created', () => {
        expect(balanceSchema).toBeInstanceOf(Schema);
    });

    it('Parse', () => {
        const result: typeof balanceData = balanceSchema.parse(balanceData);
        expect(result).toEqual(balanceData);
    });
});

describe('Check unconfirmed schema', () => {

    it('Schema created', () => {
        expect(unconfirmedSchena).toBeInstanceOf(Schema);
    });

    it('Parse', () => {
        const result: typeof unconfirmedData = unconfirmedSchena.parse(unconfirmedData);
        expect(result).toEqual(unconfirmedData);
    });
});

describe('Check custom options', () => {
    let schema;

    it('Check custom path', () => {
        schema = new Schema({
            type: ObjectPart,
            content: {
                id: { type: NumberPart, path: 'some.path.id', required: true }
            }
        });
        const result = schema.parse({ some: { path: { id: '22' } } });
        expect(result).toEqual({ id: 22 });
    });

    it('Check custom parser', () => {
        schema = new Schema({
            type: ObjectPart,
            content: {
                id: {
                    type: NumberPart,
                    parseValue: (data: any) => {
                        return data ? 100 : 10;
                    },
                    required: true
                }
            }
        });
        expect(schema.parse({ id: true })).toEqual({ id: 100 });
        expect(schema.parse({ id: false })).toEqual({ id: 10 });
    });

    it('Check custom parser and path', () => {
        schema = new Schema({
            type: ObjectPart,
            content: {
                id: {
                    type: NumberPart,
                    parseValue: (data: any) => {
                        return data ? 100 : 10;
                    },
                    required: true, path: 'some.path.id'
                }
            }
        });
        expect(schema.parse({ some: { path: { id: true } } })).toEqual({ id: 100 });
    });

    it('Check default value', () => {
        schema = new Schema({
            type: ObjectPart,
            content: {
                id: { type: NumberPart, defaultValue: 1 }
            }
        });
        expect(schema.parse({ id: '2' })).toEqual({ id: 2 });
        expect(schema.parse({})).toEqual({ id: 1 });
    });

});

describe('Check components', () => {

    let schema;

    describe('Number', () => {

        const getSchema = function (options?: any) {
            options = options || Object.create(null);
            return new Schema({
                type: NumberPart,
                ...options
            });
        };

        it('Check parse', () => {
            schema = getSchema();
            expect(schema.parse({})).toBe(null);
            expect(schema.parse([1, 2])).toBe(null);
            expect(schema.parse([1])).toBe(null);
            expect(schema.parse('1')).toBe(1);
            expect(schema.parse(null)).toBe(null);
            expect(schema.parse(undefined)).toBe(undefined);
        });

        it('Is empty', () => {
            schema = getSchema({ required: true });
            try {
                expect(isNaN(schema.parse(undefined))).toBe(true);
                fail();
            } catch (e) {
                expect(e.message).toBe('Required field type "NumberPart" is empty!');
            }
        });

    });

    describe('String', () => {

        const getSchema = function (options?: any) {
            options = options || Object.create(null);
            return new Schema({
                type: StringPart,
                ...options
            });
        };

        it('Check parse', () => {
            schema = getSchema();
            expect(schema.parse({})).toBe(null);
            expect(schema.parse([1, 2])).toBe(null);
            expect(schema.parse([1])).toBe(null);
            expect(schema.parse(1)).toBe('1');
            expect(schema.parse(null)).toBe(null);
            expect(schema.parse(undefined)).toBe(undefined);
        });

        it('Is empty', () => {
            schema = getSchema({ required: true });
            try {
                expect(isNaN(schema.parse({}))).toBe(true);
                fail();
            } catch (e) {
                expect(e.message).toBe('Required field type "StringPart" is empty!');
            }
        });

    });

    describe('Date', () => {

        const getSchema = function (options?: any) {
            options = options || Object.create(null);
            return new Schema({
                type: DatePart,
                ...options
            });
        };

        it('Check parse', () => {
            schema = getSchema();
            expect(schema.parse({})).toBe(null);
            expect(schema.parse([1, 2])).toBe(null);
            expect(schema.parse([1])).toBe(null);
            expect(Number(schema.parse(1502197861079))).toBe(1502197861079);
            expect(Number(schema.parse(new Date(1502197861079)))).toBe(1502197861079);
        });

    });

    describe('StringDate', () => {

        const getSchema = function (options?: any) {
            options = options || Object.create(null);
            return new Schema({
                type: StringDatePart,
                ...options
            });
        };

        it('Check parse', () => {
            schema = getSchema({ outPattern: 'DD.MM.YYYY' });
            expect(schema.parse({})).toBe(null);
            expect(schema.parse([1, 2])).toBe(null);
            expect(schema.parse([1])).toBe(null);
            expect(schema.parse(1502197861079)).toBe('08.08.2017');
            expect(schema.parse(new Date(1502197861079))).toBe('08.08.2017');
        });

    });

});
