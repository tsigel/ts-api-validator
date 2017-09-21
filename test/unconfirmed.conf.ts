import { Schema } from '../index';
import { IHash, TSomePart } from '../src/interfaces';
import { ArrayPart } from '../src/ArrayPart';
import { ObjectPart } from '../src/ObjectPart';
import { NumberPart } from '../src/NumberPart';
import { StringPart } from '../src/StringPart';

export const unconfirmedSchena = new Schema({
    type: ArrayPart,
    required: true,
    content: {
        type: ObjectPart,
        required: true,
        content: {
            amount: { type: NumberPart, required: true },
            assetId: { type: StringPart, required: false },
            fee: { type: NumberPart, required: true },
            feeAsset: { type: NumberPart, required: false },
            attachment: { type: StringPart, required: true },
            id: { type: StringPart, required: true },
            recipient: { type: StringPart, required: true },
            sender: { type: StringPart, required: true },
            senderPublicKey: { type: StringPart, required: true },
            signature: { type: StringPart, required: true },
            timestamp: { type: NumberPart, required: true },
            type: { type: NumberPart, required: true }
        } as IHash<TSomePart>
    }
});

export const unconfirmedData = [
    {
        'type': 4,
        'id': 'HETqf1QpG77EEAdWGVqbRSFmwRxT1F1WbDA1BqjEJUHd',
        'sender': '3P6hQxcmfKkT5vP6fbSjfLmDvGqptTijrgV',
        'senderPublicKey': 'Lw8iM4i9yJSde6ttmwEgJTPRoSYNo7kzfNCSAnN2n77',
        'fee': 100000,
        'timestamp': 1502183372414,
        'signature': '2YYzC4xxTqZCTNGn21AjyfzQGSAtfYiToDBuNjvfsiy3JeAJrcpY3RmKKFJjTasJtf6D5HdrCEph6v2wHZuVBYiH',
        'recipient': '3PFGuX41ShY9a8YtRVKdqq3AJNoWqWE1Bcu',
        'assetId': '8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS',
        'amount': 24100000,
        'feeAsset': null,
        'attachment': 'KpeGo9APzoQJb4ar2fA'
    },
    {
        'type': 4,
        'id': 'B3STVxxUFVyw9GUxtx8Boo3eDD2CcFGs2EJG2BRUfYkH',
        'sender': '3PCtTTucovbmjXeknqdTpeMGr9hLC2VobbV',
        'senderPublicKey': 'F9SGkmYi36dBV9qsae6sg53azZ7zyYmu5B8hSBYZgvoE',
        'fee': 100000,
        'timestamp': 1502183348504,
        'signature': '555UBYHZmbT3zgeRsgoX9XUQRCMfpPV9hwyAWoGTaN9UbPDUpkddyEeRQv28DmuV2uSZVyVaBcjQfK4kUHUadw72',
        'recipient': '3PJ9cuJu247fAt4xNYsmmS5UYcBcA5EWKVC',
        'assetId': null,
        'amount': 1053,
        'feeAsset': null,
        'attachment': '5LFVz2k3cZ4avvzKQFqQ7FmCiJFiT'
    },
    {
        'type': 4,
        'id': 'Aer8p3wY4HpAE1g6FHEaUpoEtiP6AcLiv5JcPyaU3b4n',
        'sender': '3P31zvGdh6ai6JK6zZ18TjYzJsa1B83YPoj',
        'senderPublicKey': '46t5F1bUxG4mAQUiDyMKDBpWhHChLQSyhnVJ8R5jaLqH',
        'fee': 100000,
        'timestamp': 1502183350907,
        'signature': '2mf6ki7LcsCMbiwFmPTausuX4MkxcKjomjjRvp17j7Se65YncdKXUwnnT8YBEQ3SFyj7y58H9SJcR7zXWd4GgESi',
        'recipient': '3P4QHNKnU5SXTpyqftXdsPivzGgZ7fHzEhL',
        'assetId': null,
        'amount': 1399900000,
        'feeAsset': null,
        'attachment': ''
    },
    {
        'type': 4,
        'id': 'Af5yLzLB9PYfAda6G7KnCdvp93dHyAZsj1jQ1Aaewgd9',
        'sender': '3P31zvGdh6ai6JK6zZ18TjYzJsa1B83YPoj',
        'senderPublicKey': '46t5F1bUxG4mAQUiDyMKDBpWhHChLQSyhnVJ8R5jaLqH',
        'fee': 100000,
        'timestamp': 1502183351071,
        'signature': 'GHDk2ewid67zrk2WPuo3ma8a7axE6dSqPp7ZHuHh5DFNRwEonzQ7qNVwat5NwG9girrwdAz2Ljt1PpaYFDQ2TKu',
        'recipient': '3PJDCHMxsNpS3TxZgkH8w3TxG4YZVe4Lja7',
        'assetId': null,
        'amount': 1999900000,
        'feeAsset': null,
        'attachment': ''
    },
    {
        'type': 4,
        'id': 'AWvFBh7zvzDjcsGi3e2RTivwV5CwLm84peCKwiKzS33v',
        'sender': '3PPq2qoTUMMCRZdviQkbggaDXyj8BVvqCZ4',
        'senderPublicKey': 'GEC63vThord6TQZ7MHmfz1anZBQZbmZnTT2UK4dYsCH3',
        'fee': 100000,
        'timestamp': 1502183341092,
        'signature': 'VyTsTQRhzDa912Q3h8DKDAQMafkGV39NvVMUyp2Luq7zXMV2oKCMe8wWfojfJYT7VnboUdQQoSBYzDrwAADhQc2',
        'recipient': '3P6vBAjvK1nWhwwm1Ttp1rSVtkdaMiBybq6',
        'assetId': null,
        'amount': 920000000,
        'feeAsset': null,
        'attachment': ''
    },
    {
        'type': 4,
        'id': 'CrfpnzbkTZz4qR5Qi7E6cwYibM2LWjqbLpNLF3mMzo2v',
        'sender': '3PGWF3fusvWfvF2zxzAzo8Yz3c3Lx6j1VQW',
        'senderPublicKey': '4NamDDx21DW6QUhFh5ZucV7V7PTE2eP5Jv4PNAKXh7h7',
        'fee': 100000,
        'timestamp': 1502183298470,
        'signature': 'An4P4cTqqvQfr9WEJAy8k5eJV5k6BuqA6vrUivEDKmASab8dgVB7nySQ1x32JbwPiszK6K3RAtRPawoYvReaf7b',
        'recipient': '3PE93oWhtuqJXhigh18ATTiUzxZau983vuD',
        'assetId': null,
        'amount': 316166000,
        'feeAsset': null,
        'attachment': ''
    }
];
