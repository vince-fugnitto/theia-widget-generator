<div align='center'>
<img src="./logos/logo.png" alt="Theia Widget Generator" width="500"/>
</div>

A [Yeoman](https://yeoman.io) generator that scaffolds a project structure for developing extensions which contribute views to the [Theia IDE](https://github.com/theia-ide/theia).

To use it, install yo and then generator

```console
npm install -g yo generator-theia-extension
```

To create a sample project with a Theia extension, a browser app and an electron app, run

```console
mkdir my-extension
yo theia-extension
```

For configuration options, see
```console
yo theia-extension --help
```

## Publishing

Follow this [instruction](https://docs.npmjs.com/cli/adduser) to login to the npm registry with a user account.

If you don't have an account contact [Theia organization](https://www.npmjs.com/~theia) to request one.

Publish with [np](https://github.com/sindresorhus/np#np--).

    npx np

## License

[Apache-2.0](LICENSE)
