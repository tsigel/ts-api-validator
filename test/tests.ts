import { Schema } from '../index';
import { balanceData, balanceSchema } from './balance.conf';
import * as chai from 'chai';
import { unconfirmedData, unconfirmedSchena } from './unconfirmed.conf';
import { ObjectPart } from '../src/ObjectPart';
import { StringPart } from '../src/StringPart';
import { NumberPart } from '../src/NumberPart';
import { StringDatePart } from '../src/StringDatePart';
import { DatePart } from '../src/DatePart';


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

    it('parse', (done) => {
        balanceSchema.parse(balanceData).then((result: typeof balanceData) => {
            chai.assert.deepEqual(result, balanceData);
        }).then(done);
    });
});

describe('check unconfirmed schema', () => {

    it('schema created', () => {
        chai.assert.instanceOf(unconfirmedSchena, Schema);
    });

    it('parse', (done) => {
        unconfirmedSchena.parse(unconfirmedData).then((result: typeof unconfirmedData) => {
            chai.assert.deepEqual(result, unconfirmedData);
        }).then(done);
    });
});

describe('check custom options', () => {
    let schema;

    it('check custom path', (done) => {
        schema = new Schema({
            type: ObjectPart,
            content: {
                id: { type: NumberPart, path: 'some.path.id', required: true }
            }
        });
        schema.parse({ some: { path: { id: '22' } } }).then((result) => {
            chai.assert.deepEqual(result, { id: 22 });
        }).then(done);
    });

    it('check custom parser', (done) => {
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

        Promise.all([
            schema.parse({ id: true }).then((data) => {
                chai.assert.deepEqual(data, { id: 100 });
            }),
            schema.parse({ id: false }).then((data) => {
                chai.assert.deepEqual(data, { id: 10 });
            })
        ]).then(() => done());
    });

    it('check custom parser and path', (done) => {
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

        schema.parse({ some: { path: { id: true } } }).then((result) => {
            chai.assert.deepEqual(result, { id: 100 });
        }).then(done);
    });

    it('check default value', (done) => {
        schema = new Schema({
            type: ObjectPart,
            content: {
                id: { type: NumberPart, defaultValue: 1 }
            }
        });

        Promise.all([
            schema.parse({ id: '2' }).then((data) => {
                chai.assert.deepEqual(data, { id: 2 });
            }),
            schema.parse({}).then((data) => {
                chai.assert.deepEqual(data, { id: 1 });
            })
        ]).then(() => done());
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

            it('check parse', (done) => {
                schema = getSchema();

                Promise.all([
                    schema.parse({}),
                    schema.parse([1, 2]),
                    schema.parse([1]),
                    schema.parse('1'),
                    schema.parse(null),
                    schema.parse(undefined)
                ]).then((data) => {

                    chai.assert.isNull(data[0]);
                    chai.assert.isNull(data[1]);
                    chai.assert.isNull(data[2]);
                    chai.assert.equal(data[3], 1);
                    chai.assert.equal(data[4], null);
                    chai.assert.equal(data[5], null);

                    done();
                });

            });

            it('is empty', (done) => {
                schema = getSchema({ required: true });
                schema.parse({}).then(() => {
                    chai.assert.fail(true);
                }).catch((e) => {
                    chai.assert.equal(e.message, 'Required field type "NumberPart" "undefined" is empty!');
                }).then(done);
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

            it('check parse', (done) => {
                schema = getSchema();

                Promise.all([
                    schema.parse({}),
                    schema.parse([1, 2]),
                    schema.parse([1]),
                    schema.parse(1),
                    schema.parse(null),
                    schema.parse(undefined)
                ]).then((data) => {
                    chai.assert.isNull(data[0]);
                    chai.assert.isNull(data[1]);
                    chai.assert.isNull(data[2]);
                    chai.assert.equal(data[3], '1');
                    chai.assert.equal(data[4], null);
                    chai.assert.equal(data[5], null);

                    done();
                });
            });

            it('is empty', (done) => {
                schema = getSchema({ required: true });
                schema.parse({}).then(() => {
                    chai.assert.fail(true);
                }).catch((e) => {
                    chai.assert.equal(e.message, 'Required field type "StringPart" "undefined" is empty!')
                }).then(done)
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

            it('check parse', (done) => {
                schema = getSchema();

                Promise.all([
                    schema.parse({}),
                    schema.parse([1, 2]),
                    schema.parse([1]),
                    schema.parse(1502197861079),
                    schema.parse(new Date(1502197861079))
                ]).then((data) => {

                    chai.assert.isNull(data[0]);
                    chai.assert.isNull(data[1]);
                    chai.assert.isNull(data[2]);
                    chai.assert.equal(Number(data[3]), 1502197861079);
                    chai.assert.equal(Number(data[4]), 1502197861079);

                    done();
                });
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

            it('check parse', (done) => {
                schema = getSchema({ outPattern: 'DD.MM.YYYY' });

                Promise.all([
                    schema.parse({}),
                    schema.parse([1, 2]),
                    schema.parse([1]),
                    schema.parse(1502197861079),
                    schema.parse(new Date(1502197861079))
                ]).then((data) => {

                    chai.assert.isNull(data[0]);
                    chai.assert.isNull(data[1]);
                    chai.assert.isNull(data[2]);
                    chai.assert.equal(data[3], '08.08.2017');
                    chai.assert.equal(data[4], '08.08.2017');

                    done();
                });
            });

        });

    });

});
