# \[NodeJS\] Advanced Random

[`hugoalh/NodeJS.AdvancedRandom`](https://github.com/hugoalh/NodeJS.AdvancedRandom)

[![](https://img.shields.io/github/contributors/hugoalh/NodeJS.AdvancedRandom?style=flat-square&logo=github)](https://github.com/hugoalh/NodeJS.AdvancedRandom/graphs/contributors)
[![](https://img.shields.io/github/license/hugoalh/NodeJS.AdvancedRandom?style=flat-square&logo=github)](https://github.com/hugoalh/NodeJS.AdvancedRandom/blob/master/LICENSE.md)
![](https://img.shields.io/github/languages/count/hugoalh/NodeJS.AdvancedRandom?style=flat-square&logo=github)
![](https://img.shields.io/github/languages/top/hugoalh/NodeJS.AdvancedRandom?style=flat-square&logo=github)
![](https://img.shields.io/github/repo-size/hugoalh/NodeJS.AdvancedRandom?style=flat-square&logo=github)
![](https://img.shields.io/github/languages/code-size/hugoalh/NodeJS.AdvancedRandom?style=flat-square&logo=github)
![](https://img.shields.io/github/watchers/hugoalh/NodeJS.AdvancedRandom?style=flat-square&logo=github)
![](https://img.shields.io/github/stars/hugoalh/NodeJS.AdvancedRandom?style=flat-square&logo=github)
![](https://img.shields.io/github/forks/hugoalh/NodeJS.AdvancedRandom?style=flat-square&logo=github)
[![](https://img.shields.io/lgtm/alerts/g/hugoalh/NodeJS.AdvancedRandom.svg?style=flat-square&logo=lgtm&label=%20)](https://lgtm.com/projects/g/hugoalh/NodeJS.AdvancedRandom/alerts)
[![](https://img.shields.io/lgtm/grade/javascript/g/hugoalh/NodeJS.AdvancedRandom.svg?style=flat-square&logo=lgtm)](https://lgtm.com/projects/g/hugoalh/NodeJS.AdvancedRandom/context:javascript)

| **[Release](https://github.com/hugoalh/NodeJS.AdvancedRandom/releases)** ![](https://img.shields.io/github/downloads/hugoalh/NodeJS.AdvancedRandom/total?style=flat-square&color=000000&label=%20) | **[Issue](https://github.com/hugoalh/NodeJS.AdvancedRandom/issues?q=is%3Aissue)** | **[Pull Request](https://github.com/hugoalh/NodeJS.AdvancedRandom/pulls?q=is%3Apr)** |
|:----|:----|:----|
| **Latest:** ![](https://img.shields.io/github/release/hugoalh/NodeJS.AdvancedRandom?sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date/hugoalh/NodeJS.AdvancedRandom?style=flat-square&color=000000&label=%20))<br />**Pre:** ![](https://img.shields.io/github/release/hugoalh/NodeJS.AdvancedRandom?include_prereleases&sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date-pre/hugoalh/NodeJS.AdvancedRandom?style=flat-square&color=000000&label=%20))<br />[![](https://img.shields.io/npm/v/@hugoalh/advanced-random?style=flat-square&logo=npm)](https://www.npmjs.com/package/@hugoalh/advanced-random) | **Open:** ![](https://img.shields.io/github/issues-raw/hugoalh/NodeJS.AdvancedRandom?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-closed-raw/hugoalh/NodeJS.AdvancedRandom?style=flat-square&color=000000&label=%20) | **Open:** ![](https://img.shields.io/github/issues-pr-raw/hugoalh/NodeJS.AdvancedRandom?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-pr-closed-raw/hugoalh/NodeJS.AdvancedRandom?style=flat-square&color=000000&label=%20) |

## 📜 Description

A module/library to provide a better random method via crypto.

[Click here to view the official documentation online.](https://github.com/hugoalh/NodeJS.AdvancedRandom/wiki)

## 📄 Documentation (Excerpt)

### Getting Started

NodeJS (v8+) & NPM (v6+):

```powershell
> npm install @hugoalh/advanced-determine
```

### API

- `signedFloat(configuration?)`
- `signedInteger(configuration?)`
- `unsignedFloat(configuration?)`
- `unsignedInteger(configuration?})`

### Example

```javascript
const advancedRandom = require("@hugoalh/advanced-random");

console.log(advancedRandom.signedFloat());// -0.159632574589625
console.log(advancedRandom.signedInteger());// -456258741587453
console.log(advancedRandom.unsignedFloat());// 0.654123578614532
console.log(advancedRandom.unsignedInteger());// 158745698552365
```
