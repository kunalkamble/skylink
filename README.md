# skylink

## Features

- 


## Installing

Using npm:

```bash
$ npm install skylink
```

Using yarn:

```bash
$ yarn add skylink
```


## Example

### note: CommonJS usage
In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()` use the following approach:

```js
const skylink = require('skylink');

// skylink.<method> will now provide autocomplete and parameter typings
```

Performing a `explore` request

```js
const skylink = require('skylink');

// Make a request for a folder structure with a given URL
const folderStructure = skylink.explore('https://siasky.net/_A5w9UBSNczl5kFwkn8CD_aAOV62Thwk2_E9yIU1sMWP2w')

```

## Credits

Skylink Explorer is heavily inspired by the [Siasky.net](https://siasky.net/).

## License

[MIT](LICENSE)
