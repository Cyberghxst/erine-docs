# Custom Plugins
Erine has built-in plugins to save some work when creating commands, also, you can create your own plugins.

## What you will need?
- Create the class. (to emit the error instance)
- The plugin itself.

## Creating the error class
Error classes are used to cast an instance of that class and be able to handle errors with using conditions.
```javascript
// We are going to create a plugin to allow only messages to be sent in a specific channel.
class NotInMainChat {
    // Basically this will be the data emitted in the error.
    constructor (ctx, channel) {
        this.ctx = ctx
        this.channel = channel
    }
}

module.exports = { NotInMainChat }
```

## Creating the plugin
If the condition is not met, we emit the contextError event and pass it a new instance of the previously created class as a parameter.
```javascript
const CustomPlugins = {
    async onlyInMainChat(ctx) {
        if(ctx.channel?.id !== 'my awesome channel ID') {
            ctx.bot.emit('contextError', new NotInMainChat(ctx, ctx.channel));
            return false
        } else return true
    }
}

module.exports = { CustomPlugins }
```

## Using your plugins in commands
You just need to request your custom plugin like you normally would with plugins.
```javascript
const { CustomPlugins } = require(path_to_file);

const body = {
    data: new PrefixBuilder()
        .setNames('hi'),
    plugins: [CustomPlugins.onlyInMainChat],
    async code(context) {
        await context.send("Hello, I'm a bot.");
    }
}

module.exports = { body }
```

## Handling the error
```javascript
const { NotInMainChat } = require(path_to_file); // Don't forget to require the error class if you have it located in different files.
// More logic here...
client.on('contextError', async (error) => {
    if (error instanceof NotInMainChat) {
        err.ctx.send('You can just send messages in main chat.');
    }
});
```