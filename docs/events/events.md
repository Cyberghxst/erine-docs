# Events
Erine allows you to handle every client event with ease.

### Handling events
You can declare events in your main file by doing
```javascript
const { ErineClient } = require('erine');

const bot = new ErineClient({
  intents: Array<string>
  owners: Array<string>
  prefix: string | asyncFunction
});

bot.on(event_name, function(...args) { /* Code here. */ });

bot.login(string);
```
or using the load_events method
```javascript
const { ErineClient } = require('erine');

const bot = new ErineClient({
  intents: Array<string>
  owners: Array<string>
  prefix: string | asyncFunction
});

bot.load_events(path_to_events);

bot.login(string);
```

## You must know...
`<client>` parameter is enforced for every event function (when using load_events method), examples:
### Message Create
```javascript
const event = {
  name: 'messageCreate',
  async code(client, message) {
    // More logic here.
  }
}
```

### Guild Member Add
```javascript
const event = {
  name: 'guildMemberAdd',
  async code(client, member) {
    // More logic here.
  }
}
```