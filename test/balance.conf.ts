import { Schema } from '../src/Schema';

export default new Schema({
    type: 'object',
    required: true,
    content: {
        address: { type: 'string', required: true },
        balance: { type: 'number', required: true },
        confirmations: { type: 'number', required: true }
    }
});
