# Sync slash commands
You need to use the `sync` method of the Skyfold custom class.
## Usage
```javascript
<client>.skyfold.sync(Client#token, ClientUser#id)
```

## Example
```javascript
const { ErineClient } = require('erine');

const bot = new ErineClient({
  intents: Array<string | GatewayIntentBits>
  owners: Array<string>
  prefix: string | asyncFunction
});

bot.load_commands(path_to_commands);
bot.on('ready', function(bot) {
    bot.skyfold.sync(bot.token, bot.user?.id).then(() => console.log('Slash commands synced!'));
});

bot.login(string);
```