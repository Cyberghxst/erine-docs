# Plugins
Erine has plugins available to save you some work when creating commands.

To handle plugins errors, use the `contextError` event, for more information see [Events](events/events.md).

## Plugin List
### Client-oriented plugins
- Plugins.hasAnyBotPerms(...PermissionResolvable)
- Plugins.hasAnyBotChannelPerms(...PermissionResolvable)
- Plugins.hasBotPerms(...PermissionResolvable)
- Plugins.hasBotPermsInChannel(...PermissionResolvable)

### Guild-oriented plugins
- Plugins.isGuild
- Plugins.isNSFW
- Plugins.isInChannelType

### Member-oriented plugins
- Plugins.cooldown(number, Bucket)
- Plugins.hasAnyPerms(...PermissionResolvable)
- Plugins.hasAnyChannelPerms(...PermissionResolvable)
- Plugins.hasPerms(...PermissionResolvable)
- Plugins.hasPermsInChannel(...PermissionResolvable)
- Plugins.isOwner
- Plugins.onlyForIDs(...Snowflake)

## Example
```javascript
const { Bucket, HybridBuilder, Plugins } = require('erine');

const body = {
    data: new HybridBuilder()
        .setName('eval')
        .setDescription('Evals the provided code.'),
    plugins: [Plugins.isOwner, Plugins.cooldown(5000, Bucket.User)],
    async (context) {
        // Code here...
    }
}

module.exports = { body }
```