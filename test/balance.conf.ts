import { Schema } from '../index';
import { INumberPart } from '../src/inderface';

export const balanceSchema = new Schema({
    type: 'object',
    required: true,
    content: {
        address: { type: 'string', required: true },
        balances: {
            type: 'array',
            required: true,
            content: {
                type: 'object',
                required: true,
                content: {
                    assetId: { type: 'string', required: true },
                    balance: { type: 'number', required: true },
                    reissuable: { type: 'boolean', required: true },
                    quantity: { type: 'number', required: true },
                    issueTransaction: {
                        type: 'object',
                        required: true,
                        content: {
                            type: { type: 'number', required: true } as INumberPart,
                            id: { type: 'string', required: true },
                            sender: { type: 'string', required: true },
                            senderPublicKey: { type: 'string', required: true },
                            fee: { type: 'number', required: true },
                            timestamp: { type: 'number', required: true },
                            signature: { type: 'string', required: true },
                            assetId: { type: 'string', required: true },
                            name: { type: 'string', required: true },
                            description: { type: 'string', required: true },
                            quantity: { type: 'number', required: true },
                            decimals: { type: 'number', required: true },
                            reissuable: { type: 'boolean', required: true }
                        }
                    }
                }
            }
        }
    }
});

export const balanceData = {
    "address": "3P7urwKRYXFo7HgR2xgvv4U7cqUpaT2Cn6y",
    "balances": [
        {
            "assetId": "FLbGXzrpqkvucZqsHDcNxePTkh2ChmEi4GdBfDRRJVof",
            "balance": 0,
            "reissuable": false,
            "quantity": 4601662500000000,
            "issueTransaction": {
                "type": 3,
                "id": "FLbGXzrpqkvucZqsHDcNxePTkh2ChmEi4GdBfDRRJVof",
                "sender": "3PQempWgZs3GwkXXMJ18oHhuk3WwfDk9Na8",
                "senderPublicKey": "9X4UgaB1sFBMdrEkh2YVMP2a7iNNPB4oXr4JUpe9kdME",
                "fee": 100000000,
                "timestamp": 1481361170950,
                "signature": "4mtwffFMJfNczhryyW6RSuq53ytUmzUCWNgdwCyy2VyMDFNvEuTRaMfUWcmsKdatmzKJAY36SYrkuvfqFMHux9PH",
                "assetId": "FLbGXzrpqkvucZqsHDcNxePTkh2ChmEi4GdBfDRRJVof",
                "name": "Incent",
                "description": "Incent",
                "quantity": 4601662500000000,
                "decimals": 8,
                "reissuable": false
            }
        },
        {
            "assetId": "Dq6ku3HyiMfKvorz2PLRAPwa9ykF78V1uiBhXtMbL2f2",
            "balance": 0,
            "reissuable": false,
            "quantity": 1000000000000,
            "issueTransaction": {
                "type": 3,
                "id": "Dq6ku3HyiMfKvorz2PLRAPwa9ykF78V1uiBhXtMbL2f2",
                "sender": "3P5e2t14MTL4DdG154x8MqkKJZYm7KwA3ye",
                "senderPublicKey": "HSa9YhmfnQ9HQtw9WQpykadEHL9YBm5mBdvDd8kVrMBD",
                "fee": 100000000,
                "timestamp": 1497662282230,
                "signature": "43tBHBGqHg6KqSR6KoMxXWqCnYfZXCw3bLDjQnEpnqPvpDLXBRTtd7RuyAU77oWc3uzRDu2KEKHbvvSMoSX6MvYP",
                "assetId": "Dq6ku3HyiMfKvorz2PLRAPwa9ykF78V1uiBhXtMbL2f2",
                "name": "Krosscoin",
                "description": "cryptocurrency for the church and for charity organizations",
                "quantity": 1000000000000,
                "decimals": 3,
                "reissuable": false
            }
        },
        {
            "assetId": "zMFqXuoyrn5w17PFurTqxB7GsS71fp9dfk6XFwxbPCy",
            "balance": 1,
            "reissuable": false,
            "quantity": 2100000000000000,
            "issueTransaction": {
                "type": 3,
                "id": "zMFqXuoyrn5w17PFurTqxB7GsS71fp9dfk6XFwxbPCy",
                "sender": "3PBLdLAs6qZq2AVdEmBfh2RubQYETm8vvg4",
                "senderPublicKey": "4eShfsm6Xu9iGifs53XvzfBLJMt6Scpy5zsB4ovvbY9e",
                "fee": 100000000,
                "timestamp": 1501667530617,
                "signature": "2FnWpi8L5cAsmAJcHF6MJvYeDMsgA9AcwfrrjhuLuDXuMQWZUFpG6XZSrRHBpwd6SBL9nwfeGi6kdaQptk8veW2A",
                "assetId": "zMFqXuoyrn5w17PFurTqxB7GsS71fp9dfk6XFwxbPCy",
                "name": "Bitcoin Cash",
                "description": "Bitcoin Cash",
                "quantity": 2100000000000000,
                "decimals": 8,
                "reissuable": false
            }
        },
        {
            "assetId": "APz41KyoKuBBh8t3oZjqvhbbsg6f63tpZM5Ck5LYx6h",
            "balance": 0,
            "reissuable": true,
            "quantity": 2500000000000000,
            "issueTransaction": {
                "type": 3,
                "id": "APz41KyoKuBBh8t3oZjqvhbbsg6f63tpZM5Ck5LYx6h",
                "sender": "3PQrvrcwT7rWZfUz3fV66C3suv3nFkw1k94",
                "senderPublicKey": "EdHXjLuqvbvcJYmDpQWqN4Eqjq5tWh5zkqz62YGBsmuF",
                "fee": 100000000,
                "timestamp": 1482792152131,
                "signature": "3B6ZmY2LoG99JmV2z3RMmDo7oMXtSAXCUHX3UwrJHevxLgWrXkPsbZTbcyP32RJ1Mt8uKErCV36LGjkZuLdQUnrj",
                "assetId": "APz41KyoKuBBh8t3oZjqvhbbsg6f63tpZM5Ck5LYx6h",
                "name": "B@nkcoin",
                "description": "B@nkcoin Bankcoin.Global Asset. Main\nhttp://bankcoin.global/ B@ is a part of all the services offered in bankcoin.global International",
                "quantity": 2500000000000000,
                "decimals": 8,
                "reissuable": true
            }
        },
        {
            "assetId": "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS",
            "balance": 1,
            "reissuable": false,
            "quantity": 2100000000000000,
            "issueTransaction": {
                "type": 3,
                "id": "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS",
                "sender": "3PC4roN512iugc6xGVTTM2XkoWKEdSiiscd",
                "senderPublicKey": "BJ3Q8kNPByCWHwJ3RLn55UPzUDVgnh64EwYAU5iCj6z6",
                "fee": 100000000,
                "timestamp": 1480690876160,
                "signature": "6JAr35fMADxhhK5jEXCKBzZAMCBoXBPcW4D9iaBDnhATxQ7Dk5EgJKBSWCeauqftSUVWgY79bMjdxqomCRxafFd",
                "assetId": "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS",
                "name": "WBTC",
                "description": "Bitcoin Token",
                "quantity": 2100000000000000,
                "decimals": 8,
                "reissuable": false
            }
        }
    ]
};
