import { Schema } from '../src/Schema';
import { IHash, INumberPart, TSomePart } from '../src/inderface';

export default new Schema({
    type: 'array',
    required: true,
    content: {
        type: 'object',
        content: {
            amount: { type: 'number', required: true },
            assetId: { type: 'number', required: true },
            fee: { type: 'number', required: true },
            feeAsset: { type: 'number', required: true },
            attachment: { type: 'string', required: true },
            id: { type: 'string', required: true },
            recipient: { type: 'string', required: true },
            sender: { type: 'string', required: true },
            senderPublicKey: { type: 'string', required: true },
            signature: { type: 'string', required: true },
            timestamp: { type: 'number', required: true },
            type: { type: 'number', required: true }
        } as IHash<TSomePart>
    }
});
