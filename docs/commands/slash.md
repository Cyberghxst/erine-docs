# Slash Commands
We can use the `SlashCommandBuilder` class from Discord.js

## Example
```javascript
const { SlashCommandBuilder } = require('discord.js');

const body = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!'),
  async code(interaction) {
    interaction.send(`Pong! <@${interaction.author.id}>`);
  }
}

module.exports = { body } // Important to be named "body".
```

## Subcommands
You can use subcommands doing the following:
```javascript
const { SlashCommandBuilder } = require('discord.js');

const body = {
  data: new SlashCommandBuilder()
    .setName('bot')
    .setDescription('Bot information.')
    .addSubcommand(subcommand => 
      subcommand
        .setName('ping')
        .setDescription('Returns the client websocket ping.')
    ),
  async code(context) {
    let subcommand = context.data.options._subcommand;
    if (subcommand === 'ping') {
      await context.send(`Latency: ${context.bot.ws.ping} ms`);
    }
  }
}

module.exports = { body }
```