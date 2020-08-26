# \[NodeJS\] Advanced Random

[`hugoalh-studio/NodeJS.AdvancedRandom`](https://github.com/hugoalh-studio/NodeJS.AdvancedRandom)

[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/NodeJS.AdvancedRandom?logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/NodeJS.AdvancedRandom/graphs/contributors)
[![License](https://img.shields.io/github/license/hugoalh-studio/NodeJS.AdvancedRandom?logo=github&logoColor=ffffff&style=flat-square)](./LICENSE.md)
![GitHub Language Count](https://img.shields.io/github/languages/count/hugoalh-studio/NodeJS.AdvancedRandom?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Top Langauge](https://img.shields.io/github/languages/top/hugoalh-studio/NodeJS.AdvancedRandom?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Repo Size](https://img.shields.io/github/repo-size/hugoalh-studio/NodeJS.AdvancedRandom?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Code Size](https://img.shields.io/github/languages/code-size/hugoalh-studio/NodeJS.AdvancedRandom?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Watchers](https://img.shields.io/github/watchers/hugoalh-studio/NodeJS.AdvancedRandom?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/NodeJS.AdvancedRandom?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Forks](https://img.shields.io/github/forks/hugoalh-studio/NodeJS.AdvancedRandom?logo=github&logoColor=ffffff&style=flat-square)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/NodeJS.AdvancedRandom?logo=codefactor&logoColor=ffffff&style=flat-square)](https://www.codefactor.io/repository/github/hugoalh-studio/nodejs.advancedrandom)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/hugoalh-studio/NodeJS.AdvancedRandom.svg?label=%20&logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh-studio/NodeJS.AdvancedRandom/alerts)
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/g/hugoalh-studio/NodeJS.AdvancedRandom.svg?logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh-studio/NodeJS.AdvancedRandom/context:javascript)

| **[Release](https://github.com/hugoalh-studio/NodeJS.AdvancedRandom/releases)** ![](https://img.shields.io/github/downloads/hugoalh-studio/NodeJS.AdvancedRandom/total?style=flat-square&color=000000&label=%20) | **[Issue](https://github.com/hugoalh-studio/NodeJS.AdvancedRandom/issues?q=is%3Aissue)** | **[Pull Request](https://github.com/hugoalh-studio/NodeJS.AdvancedRandom/pulls?q=is%3Apr)** |
|:----|:----|:----|
| **Latest:** ![](https://img.shields.io/github/release/hugoalh-studio/NodeJS.AdvancedRandom?sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date/hugoalh-studio/NodeJS.AdvancedRandom?style=flat-square&color=000000&label=%20))<br />**Pre:** ![](https://img.shields.io/github/release/hugoalh-studio/NodeJS.AdvancedRandom?include_prereleases&sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date-pre/hugoalh-studio/NodeJS.AdvancedRandom?style=flat-square&color=000000&label=%20))<br />[![NPM](https://img.shields.io/npm/v/@hugoalh/advanced-random?logo=npm&logoColor=ffffff&style=flat-square)](https://www.npmjs.com/package/@hugoalh/advanced-random) | **Open:** ![](https://img.shields.io/github/issues-raw/hugoalh-studio/NodeJS.AdvancedRandom?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-closed-raw/hugoalh-studio/NodeJS.AdvancedRandom?style=flat-square&color=000000&label=%20) | **Open:** ![](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/NodeJS.AdvancedRandom?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-pr-closed-raw/hugoalh-studio/NodeJS.AdvancedRandom?style=flat-square&color=000000&label=%20) |

## 📜 Description

A module/library to provide a better random method via crypto.

[Click here to view the official documentation online.](https://github.com/hugoalh-studio/NodeJS.AdvancedRandom/wiki)

## 📄 Documentation (Excerpt)

### Getting Started

NodeJS (v10+) & NPM (v6+):

```powershell
> npm install @hugoalh/advanced-random
```

### API

- `pool(option?)`
- `signedFloat(option?)`
- `signedInteger(option?)`
- `unsignedFloat(option?)`
- `unsignedInteger(option?)`

### Example

```javascript
const advancedRandom = require("@hugoalh/advanced-random");

console.log(advancedRandom.signedFloat());// -0.159632574589625
console.log(advancedRandom.signedInteger());// -456258741587453
console.log(advancedRandom.unsignedFloat());// 0.654123578614532
console.log(advancedRandom.unsignedInteger());// 158745698552365
```
