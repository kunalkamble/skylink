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

// Make a request get a folder structure from a Skylink
skylink.explore('https://siasky.net/_A5w9UBSNczl5kFwkn8CD_aAOV62Thwk2_E9yIU1sMWP2w')
       .then((data) => { console.log(data) })

// Make a request to get file content from a Skylink
skylink.getFileContent('https://siasky.net/_A5w9UBSNczl5kFwkn8CD_aAOV62Thwk2_E9yIU1sMWP2w/skynet_files/style.css')
       .then((data) => { console.log(data) })

```

## Credits

Skylink Explorer is heavily inspired by the [Siasky.net](https://siasky.net/).

## License

[MIT](LICENSE)

## Support us to build opensource code for Sia community, Thank you so much.
### Sia Wallet: 
cebe7bc312948903d03fb2829076824bc0765d8ade75b3ba66ab389cd3ada6712145449c28c6
