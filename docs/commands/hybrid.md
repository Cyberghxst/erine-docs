# Hybrid Commands
We can create hybrid commands (prefix + slash) like Discord.py using the `HybridBuilder` class.

## Usage
```javascript
const body = {
    data: HybridBuilder
    plugins?: Array<Plugins>
    params?: ParamsBuilder
    code: AsyncFunction
}
```

## Example
```javascript
const { HybridBuilder, ParamsBuilder } = require("erine");

const body = {
    data: new HybridBuilder()
      .setName('ping')
      .setAliases('pong')
      .setDescription('This works with ![ping|pong] and /ping'),
    params: new ParamsBuilder()
      .addMember({ name: 'mymember', description: 'The member', required: true }),
    async code(context) {
        await context.send({ content: `Pong! ${context.author.username}`, ephemeral: true })
    }
}

module.exports = { body } // Important to be named "body".
```