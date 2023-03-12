# Custom prefixes
The bot prefix is declared in the client constructor, this option supports a string or a function, this is useful for making custom prefixes per server.

## Example
```javascript
const { ErineClient } = require('erine');

const bot = new ErineClient({
    intents: Array<string | GatewayIntentBits>
    owners: Array<string>
    prefix: async function(context) {
        // do something...
    }
});

bot.login(string);
```