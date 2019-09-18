# ts-api-validator

This is library for validate data from server or other API.

Example:
```typescript
import { Schema, ObjectPart, StringPart, ArrayPart } from 'ts-api-validator';

const schema = new Schema({
  type: ArrayPart,
  required: true,
  content: {
    type: ObjectPart,
    required: true,
    content: {
       someField: { type: StringPart, required: true }
    }
  }
}); // This is schema for parse inteface like Array<{ someField: string }>;

schema.parse([{someField: 'some text'}]);
```
