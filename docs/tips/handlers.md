# Handlers
Load commands and events with the built-in methods.
## Command loader
```javascript
const { ErineClient } = require('erine');

const bot = new ErineClient({
  intents: Array<string | GatewayIntentBits>
  owners: Array<string>
  prefix: string | asyncFunction
});

bot.load_commands(path_to_commands);

bot.login(string);
```

## Event loader
```javascript
const { ErineClient } = require('erine');

const bot = new ErineClient({
  intents: Array<string | GatewayIntentBits>
  owners: Array<string>
  prefix: string | asyncFunction
});

bot.load_events(path_to_events);

bot.login(string);
```