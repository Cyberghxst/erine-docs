# Errors
To handle errors from Erine's custom classes, you can use this class in conjunction with the contextError event.

## Error Classes
### Client-oriented classes
- Errors.MissingBotChannelPermission
- Errors.MissingBotPermission

### Command-oriented classes
- Errors.CommandNotFound

### Guild-oriented classes
- Errors.GuildOnly
- Errors.MissingPermission
- Errors.MissingChannelPermission
- Errors.NotInChannelType

### Parameter-oriented classes
- Errors.NotParamBoolean
- Errors.NotParamNumber
- Errors.InvalidParamChoice
- Errors.InvalidParamMember
- Errors.InvalidParamChannel
- Errors.InvalidParamRole
- Errors.InvalidChannelType
- Errors.MissingRequiredParam

### Process-oriented classes
- Errors.UnknownCommandError

### User-oriented classes
- Errors.NotNSFW
- Errors.OnlyForIDs
- Errors.NotOwner

## Example
```javascript
const { Errors } = require('erine');

const event = {
    name: 'contextError',
    async code(err) {
        if (err instanceof Errors.CommandNotFound) {
            err.ctx.send('Command not found!');
        } else if (err instanceof Errors.NotNSFW) {
            err.ctx.send('The channel must be NSFW!');
        } else if (err instanceof Errors.NotOwner) {
            err.ctx.send('You\'re not my owner.');
        } else {
            console.log(err);
        }
    }
}

module.exports = { event }
```