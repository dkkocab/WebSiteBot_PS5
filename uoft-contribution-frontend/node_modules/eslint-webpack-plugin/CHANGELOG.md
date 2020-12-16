# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.2.1](https://github.com/webpack-contrib/eslint-webpack-plugin/compare/v2.2.0...v2.2.1) (2020-11-07)


### Bug Fixes

* folder pattern ([#36](https://github.com/webpack-contrib/eslint-webpack-plugin/issues/36)) ([e79741e](https://github.com/webpack-contrib/eslint-webpack-plugin/commit/e79741ee22d04c8c6e4d6f11d6869434ed5b339d))

## [2.2.0](https://github.com/webpack-contrib/eslint-webpack-plugin/compare/v1.0.0...v2.2.0) (2020-11-04)


### Features

* feat: only use the import graph, update tests ([#28](https://github.com/webpack-contrib/eslint-webpack-plugin/pull/28)) ([47612f16](https://github.com/webpack-contrib/eslint-webpack-plugin/commit/47612f16894f22f4b5c3848595bba48ca8eb9b0f))

### Bug Fixes

* fix: use compiler.outputFileSystem to write report

* fix: use fs callback forms because webpack5 does not work with promisify on outputFileSystem methods

* fix: do not accumulate more taps as watchRuns occur

* fix: windows path escape, cleanup watch-fixture

## [2.1.0](https://github.com/webpack-contrib/eslint-webpack-plugin/compare/v1.0.0...v2.1.0) (2020-07-30)


### Features

* support typescript ([#8](https://github.com/webpack-contrib/eslint-webpack-plugin/issues/8)) ([6634d96](https://github.com/webpack-contrib/eslint-webpack-plugin/commit/6634d96e7e80dd2d7097479f13a48115e0544f59))

## [2.0.0](https://github.com/webpack-contrib/eslint-webpack-plugin/compare/v1.0.0...v2.0.0) (2020-07-26)


### Features

* ESLint class migration ([#11](https://github.com/webpack-contrib/eslint-webpack-plugin/issues/11)) ([efd5e7d](https://github.com/webpack-contrib/eslint-webpack-plugin/commit/efd5e7d01b8569c5dcb2808f618f56e4857fcf52)), closes [#10](https://github.com/webpack-contrib/eslint-webpack-plugin/issues/10) [#10](https://github.com/webpack-contrib/eslint-webpack-plugin/issues/10) [#10](https://github.com/webpack-contrib/eslint-webpack-plugin/issues/10) [#10](https://github.com/webpack-contrib/eslint-webpack-plugin/issues/10) [#10](https://github.com/webpack-contrib/eslint-webpack-plugin/issues/10) [#10](https://github.com/webpack-contrib/eslint-webpack-plugin/issues/10) [#10](https://github.com/webpack-contrib/eslint-webpack-plugin/issues/10) [#10](https://github.com/webpack-contrib/eslint-webpack-plugin/issues/10) [#10](https://github.com/webpack-contrib/eslint-webpack-plugin/issues/10)

### ⚠ BREAKING CHANGES

* minimum supported eslint version is `7`

## [1.0.0](https://github.com/webpack-contrib/eslint-webpack-plugin/compare/v0.1.0...v1.0.0) (2020-05-04)

### ⚠ BREAKING CHANGES

* minimum supported Node.js version is `10.13`
* minimum supported eslint version is `6.0.0`

## [0.1.0](https://github.com/webpack-contrib/eslint-webpack-plugin/compare/v0.0.1...v0.1.0) (2019-12-20)


### Features

* support webpack 5 ([b7f3679](https://github.com/webpack-contrib/eslint-webpack-plugin/commit/b7f3679a8d5e5166376caec2a28ed38d6772bcca))


### Bug Fixes

* hooks and callback error ([3e7c36e](https://github.com/webpack-contrib/eslint-webpack-plugin/commit/3e7c36e78e7c05bb5559adced2f92317affbf1ff))
* resolve file glob patterns ([d5c8820](https://github.com/webpack-contrib/eslint-webpack-plugin/commit/d5c8820d9467e8794a4aa3944bf6ded746d79411))

### 0.0.1 (2019-11-12)
