# Advanced Random (NodeJS Edition)

[`AdvancedRandom.NodeJS`](https://github.com/hugoalh-studio/advanced-random-nodejs) - A NodeJS module to provide a better random method via crypto.

[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/advanced-random-nodejs?label=Contributors&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-random-nodejs/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/advanced-random-nodejs?label=Issues&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-random-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/advanced-random-nodejs?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-random-nodejs/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/advanced-random-nodejs?label=Discussions&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-random-nodejs/discussions)
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/advanced-random-nodejs?label=Stars&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-random-nodejs/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/hugoalh-studio/advanced-random-nodejs?label=Forks&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/advanced-random-nodejs/network/members)
![GitHub Languages](https://img.shields.io/github/languages/count/hugoalh-studio/advanced-random-nodejs?label=Languages&logo=github&logoColor=ffffff&style=flat-square)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/advanced-random-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square)](https://www.codefactor.io/repository/github/hugoalh-studio/advanced-random-nodejs)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/hugoalh-studio/advanced-random-nodejs?label=Alerts&logo=lgtm&logoColor=ffffff&style=flat-square)
![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/g/hugoalh-studio/advanced-random-nodejs?label=Grade&logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh-studio/advanced-random-nodejs)
[![License](https://img.shields.io/static/v1?label=License&message=MIT&color=brightgreen&style=flat-square)](./LICENSE.md)

| **Release** | **Latest** | **Pre** |
|:-:|:-:|:-:|
| [**GitHub**](https://github.com/hugoalh-studio/advanced-random-nodejs/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/advanced-random-nodejs/total?label=%20&style=flat-square) | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/advanced-random-nodejs?sort=semver&label=%20&style=flat-square) (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/advanced-random-nodejs?label=%20&style=flat-square)) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/advanced-random-nodejs?include_prereleases&sort=semver&label=%20&style=flat-square) (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/advanced-random-nodejs?label=%20&style=flat-square)) |
| [**NPM**](https://www.npmjs.com/package/@hugoalh/advanced-random) ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/advanced-random?label=%20&style=flat-square) | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/advanced-random/latest?label=%20&style=flat-square) | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/advanced-random/pre?label=%20&style=flat-square) |

<details>
  <summary><a href="https://github.com/hugoalh-studio/advanced-random-nodejs"><code>AdvancedRandom.NodeJS</code></a></summary>
  <img align="center" alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/hugoalh-studio/advanced-random-nodejs?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Top Langauge" src="https://img.shields.io/github/languages/top/hugoalh-studio/advanced-random-nodejs?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Repo Size" src="https://img.shields.io/github/repo-size/hugoalh-studio/advanced-random-nodejs?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Code Size" src="https://img.shields.io/github/languages/code-size/hugoalh-studio/advanced-random-nodejs?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Watcher" src="https://img.shields.io/github/watchers/hugoalh-studio/advanced-random-nodejs?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Star" src="https://img.shields.io/github/stars/hugoalh-studio/advanced-random-nodejs?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Fork" src="https://img.shields.io/github/forks/hugoalh-studio/advanced-random-nodejs?logo=github&logoColor=ffffff&style=flat-square" />
</details>

A NodeJS module to provide a better random method via crypto.

## 📝 Description

### 🌟 Feature

- Better random method without writing a lot of codes.
- Native support for CommonJS and ECMAScript.

## 📚 Documentation

*For the official documentation, please visit [GitHub Repository Wiki](https://github.com/hugoalh-studio/advanced-random-nodejs/wiki).*

### Getting Started (Excerpt)

NodeJS (>= v14.15.0) & NPM (>= v6.14.8):

```sh
> npm install @hugoalh/advanced-random
```

### API (Excerpt)

- `pool(option?)`
- `signedFloat(option?)`
- `signedInteger(option?)`
- `unsignedFloat(option?)`
- `unsignedInteger(option?)`

### Example (Excerpt)

```javascript
const advancedRandom = require("@hugoalh/advanced-random");

console.log(advancedRandom.signedFloat());// -0.159632574589625
console.log(advancedRandom.signedInteger());// -456258741587453
console.log(advancedRandom.unsignedFloat());// 0.654123578614532
console.log(advancedRandom.unsignedInteger());// 158745698552365
```
