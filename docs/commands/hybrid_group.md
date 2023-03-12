# Hybrid Groups
We can create hybrid command groups (prefix + slash) like Discord.py using the `HybridGroup` class.

## Usage
```javascript
const body = {
    data: HybridBuilder
}
```

## Example
```javascript
const { HybridBuilder, HybridGroup } = require("erine");

const body = {
    data: new HybridGroup()
        .setName('parent')
        .setDescription('A pack of subcommands.')
        .addCommand({
            data: new HybridBuilder()
                .setName('child-one')
                .setDescription('I\'m the first command of this group.'),
            async code(context) {
                await context.send(`My parent is ${context.parent.name}.`)
            }
        })
        .addCommand({
            data: new HybridBuilder()
                .setName('child-two')
                .setDescription('I\'m the second command of this group.'),
            async code(context) {
                await context.send(`My parent is ${context.parent.name}.`)
            }
        })
        // Every .addCommand(...) represents a subcommand.
}

module.exports = { body } // Important to be named "body".
```