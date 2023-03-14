# Getting Parameters
ParamsBuilder is a utility class to build parameters with ease.

## How can I get the parameters?
You should use the `<Context>.get(string)` method.
### Example:
```javascript
const { HybridBuilder, ParamsBuilder } = require('erine');

const body = {
    data: new HybridBuilder()
        .setName('say'),
    params: new ParamsBuilder()
        .addString({
            name: 'text',
            description: 'The message you want to send.',
            required: true,
            long: true
        }),
    async code(context) {
        let message = context.get('text');
        await context.send(`${context.author.tag} says: ${message}`);
    }
}

module.exports = { command }
```