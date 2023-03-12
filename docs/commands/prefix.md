# Prefixed Commands
We have to use the `PrefixBuilder` class.

## Usage
```javascript
const body = {
    data: PrefixBuilder
    plugins?: Array<Plugins>
    params?: ParamsBuilder
    code: AsyncFunction
}
```

## Example
```javascript
const { PrefixBuilder } = require('erine');

const body = {
    data: new PrefixBuilder()
        .setNames('ping')
        .setDescription('Returns the bot websocket latency.'),
    async code(context) {
        await context.send({ content: `My websocket latency is: ${context.bot.ws.ping} ms` });
    }
}

module.exports = { body } // Important to be named body.
```