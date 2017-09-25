import { Schema } from '../index';
import { balanceData, balanceSchema } from './balance.conf';
import * as chai from 'chai';
import { unconfirmedData, unconfirmedSchena } from './unconfirmed.conf';
import { ObjectPart } from '../src/ObjectPart';
import { NumberPart } from '../src/NumberPart';
import { StringPart } from '../src/StringPart';
import { DatePart } from '../src/DatePart';
import { StringDatePart } from '../src/StringDatePart';


it('check param without path', () => {
    const schema = new Schema({
        type: ObjectPart,
        content: {
            test: {
                type: StringPart, path: null, parseValue: function (data) {
                    chai.assert.instanceOf(data, Object);
                    chai.assert.equal(data.test, 'test');
                }
            }
        }
    });

    schema.parse({ test: 'test' });
});

describe('check balance schema', () => {

    it('schema created', () => {
        chai.assert.instanceOf(balanceSchema, Schema);
    });

    it('parse', () => {
        const result: typeof balanceData = balanceSchema.parse(balanceData);
        chai.assert.deepEqual(result, balanceData);
    });
});

describe('check unconfirmed schema', () => {

    it('schema created', () => {
        chai.assert.instanceOf(unconfirmedSchena, Schema);
    });

    it('parse', () => {
        const result: typeof unconfirmedData = unconfirmedSchena.parse(unconfirmedData);
        chai.assert.deepEqual(result, unconfirmedData);
    });
});

describe('check custom options', () => {
    let schema;

    it('check custom path', () => {
        schema = new Schema({
            type: ObjectPart,
            content: {
                id: { type: NumberPart, path: 'some.path.id', required: true }
            }
        });
        const result = schema.parse({ some: { path: { id: '22' } } });
        chai.assert.deepEqual(result, { id: 22 });
    });

    it('check custom parser', () => {
        schema = new Schema({
            type: ObjectPart,
            content: {
                id: {
                    type: NumberPart, parseValue: (data: any) => {
                        return data ? 100 : 10
                    }, required: true
                }
            }
        });
        chai.assert.deepEqual(schema.parse({ id: true }), { id: 100 });
        chai.assert.deepEqual(schema.parse({ id: false }), { id: 10 });
    });

    it('check custom parser and path', () => {
        schema = new Schema({
            type: ObjectPart,
            content: {
                id: {
                    type: NumberPart, parseValue: (data: any) => {
                        return data ? 100 : 10
                    }, required: true, path: 'some.path.id'
                }
            }
        });
        chai.assert.deepEqual(schema.parse({ some: { path: { id: true } } }), { id: 100 });
    });

    it('check default value', () => {
        schema = new Schema({
            type: ObjectPart,
            content: {
                id: { type: NumberPart, defaultValue: 1 }
            }
        });
        chai.assert.deepEqual(schema.parse({ id: '2' }), { id: 2 });
        chai.assert.deepEqual(schema.parse({}), { id: 1 });
    });

});

describe('check components', () => {

    let schema;

    describe('number', () => {

        const getSchema = function (options?: any) {
            options = options || Object.create(null);
            return new Schema({
                type: NumberPart,
                ...options
            });
        };

        it('check parse', () => {
            schema = getSchema();
            chai.assert.isNull(schema.parse({}));
            chai.assert.isNull(schema.parse([1, 2]));
            chai.assert.isNull(schema.parse([1]));
            chai.assert.equal(schema.parse('1'), 1);
            chai.assert.equal(schema.parse(null), null);
            chai.assert.equal(schema.parse(undefined), null);
        });

        it('is empty', () => {
            schema = getSchema({ required: true });
            try {
                chai.assert.isNaN(schema.parse({}));
                chai.assert.fail(true);
            } catch (e) {
                chai.assert.equal(e.message, 'Required field type "NumberPart" "undefined" is empty!')
            }
        });

    });

    describe('string', () => {

        const getSchema = function (options?: any) {
            options = options || Object.create(null);
            return new Schema({
                type: StringPart,
                ...options
            });
        };

        it('check parse', () => {
            schema = getSchema();
            chai.assert.isNull(schema.parse({}));
            chai.assert.isNull(schema.parse([1, 2]));
            chai.assert.isNull(schema.parse([1]));
            chai.assert.equal(schema.parse(1), '1');
            chai.assert.equal(schema.parse(null), null);
            chai.assert.equal(schema.parse(undefined), null);
        });

        it('is empty', () => {
            schema = getSchema({ required: true });
            try {
                chai.assert.isNaN(schema.parse({}));
                chai.assert.fail(true);
            } catch (e) {
                chai.assert.equal(e.message, 'Required field type "StringPart" "undefined" is empty!')
            }
        });

    });

    describe('date', () => {

        const getSchema = function (options?: any) {
            options = options || Object.create(null);
            return new Schema({
                type: DatePart,
                ...options
            });
        };

        it('check parse', () => {
            schema = getSchema();
            chai.assert.isNull(schema.parse({}));
            chai.assert.isNull(schema.parse([1, 2]));
            chai.assert.isNull(schema.parse([1]));
            chai.assert.equal(Number(schema.parse(1502197861079)), 1502197861079);
            chai.assert.equal(Number(schema.parse(new Date(1502197861079))), 1502197861079);
        });

    });

    describe('string-date', () => {

        const getSchema = function (options?: any) {
            options = options || Object.create(null);
            return new Schema({
                type: StringDatePart,
                ...options
            });
        };

        it('check parse', () => {
            schema = getSchema({ outPattern: 'DD.MM.YYYY' });
            chai.assert.isNull(schema.parse({}));
            chai.assert.isNull(schema.parse([1, 2]));
            chai.assert.isNull(schema.parse([1]));
            chai.assert.equal(schema.parse(1502197861079), '08.08.2017');
            chai.assert.equal(schema.parse(new Date(1502197861079)), '08.08.2017');
        });

    });

});
