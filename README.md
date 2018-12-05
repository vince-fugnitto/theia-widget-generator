<div align='center'>
<img src="./logos/logo.png" alt="Theia Widget Generator" width="500"/>
</div>

A [Yeoman](https://yeoman.io) generator that scaffolds a project structure for developing extensions which contribute views to the [Theia IDE](https://github.com/theia-ide/theia).

## Installation and Usage
### Install Yo

```console
npm install -g yo
```

### Clone the repository

```console
git clone git@github.com:vince-fugnitto/theia-widget-generator.git
```

### Create a global symlink to be able to locally run the generator

```console
cd theia-widget-generator
npm link
```

### Generate a new extension

```console
mkdir test-extension
cd test-extension
yo theia-widget
```

### Run the extension

**Browser**

```console
cd browser-app/ && yarn start
```

**Electron**

```console
cd electron-app/ && yarn start
```


## Publishing

Follow this [instruction](https://docs.npmjs.com/cli/adduser) to login to the npm registry with a user account.

If you don't have an account contact [Theia organization](https://www.npmjs.com/~theia) to request one.

Publish with [np](https://github.com/sindresorhus/np#np--).

    npx np

## License

[Apache-2.0](LICENSE)
