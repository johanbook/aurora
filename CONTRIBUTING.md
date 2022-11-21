# Contributing

## Release procedure

This project uses [semver](https://semver.org/), handled by the NPM package
[standard-version](https://www.npmjs.com/package/standard-version). For creating
a new release, run the following commands:

```sh
npm run release
git push --follow-tags origin main
```

Before creating a new release, confirm that there are no known vulnerabilities
in the project dependencies by running

```sh
npm audit
```
