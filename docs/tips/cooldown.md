# Cooldown
Erine provides you a built-in plugin to cooldown your commands with ease.

## Buckets
- `<Bucket>.Channel`: Represents a GuildChannel.
- `<Bucket>.Member`: Represents a GuildMember.
- `<Bucket>.Guild`: Represents a Guild.
- `<Bucket>.User`: Represents a Discord User.

## Example
```javascript
const { Bucket, HybridBuilder, Plugins } = require('erine');

const body = {
    data: new HybridBuilder()
        .setName('say'),
    plugins: [
        Plugins.cooldown(5000, Bucket.User)
    ],
    async code(context) {
        await context.send('Hello from Erine!');
    }
}

module.exports = { body }
```

You must handle cooldown errors with `<Errors>.CommandInCooldown`, check [Errors].