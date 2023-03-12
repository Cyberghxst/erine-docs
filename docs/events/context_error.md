# Context Error
Erine has a custom error class to catch every error.

## Example
```javascript
const { Errors } = require('erine');

const event = {
  name: 'contextError',
  async code(client, err) {
    if(err instanceof Errors.CommandNotFound) {
      // do something...
    }
  }
}

module.exports = { event }
```
Wanna check the available error types? Go to [Errors](errors/errors.md).