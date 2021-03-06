# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.0.2](https://github.com/homer0/packages/compare/@homer0/eslint-plugin@6.0.1...@homer0/eslint-plugin@6.0.2) (2021-01-25)


### Bug Fixes

* update dependencies ([7437e8c](https://github.com/homer0/packages/commit/7437e8c12e1d46d11f8dd8cfe793307391dbfa5f))





## [6.0.1](https://github.com/homer0/packages/compare/@homer0/eslint-plugin@6.0.0...@homer0/eslint-plugin@6.0.1) (2020-11-28)


### Bug Fixes

* include publishConfig and fix the format of the repository property ([4c25780](https://github.com/homer0/packages/commit/4c25780099bd60443a3625f5ab2c62a41a5c1314))





# [6.0.0](https://github.com/homer0/packages/compare/@homer0/eslint-plugin@5.0.2...@homer0/eslint-plugin@6.0.0) (2020-11-05)


### Bug Fixes

* **eslint-plugin:** allow R.__ ([6de6446](https://github.com/homer0/packages/commit/6de6446ff760c4e40a4818cd8d27bce200c43b06))
* **eslint-plugin:** disable the rule sentences on JSDoc descriptions ([ebca8be](https://github.com/homer0/packages/commit/ebca8beeff58ea95dc03dd8a1e3bf825d06537b2))
* **eslint-plugin:** disallow double quotes ([e114ae4](https://github.com/homer0/packages/commit/e114ae496484df6f2527ad0ef484069eba412cdf))
* **monorepo:** update dependencies ([cd892a8](https://github.com/homer0/packages/commit/cd892a865d8251cab3f80913a2c219c118d67e19))


### Features

* **eslint-plugin:** add variants with Prettier ([d845200](https://github.com/homer0/packages/commit/d84520063c23e20d7e18c5f39220de339691ac99))


### BREAKING CHANGES

* **eslint-plugin:** The rule that validates sentences on JSDoc descriptions was removed, and while
it's a breaking changes as it won't validate it anymore, the rule expression is broken, as
it gets triggered by the template tag.
* **eslint-plugin:** Before this commit, using double quotes to avoid escaping a single quote
was allowed, but now it will trigger an error.





## 5.0.2 (2020-08-10)


### Bug Fixes

* update dependencies ([73be095](https://github.com/homer0/packages/commit/73be095484748600643e78bc11457ac5b06276ec))

## 5.0.1 (2020-07-22)


### Bug Fixes

* update dependencies ([6611bcb](https://github.com/homer0/packages/commit/6611bcb61ec3d4045501db79b41a5a17b0a8a770)), closes [#15](https://github.com/homer0/packages/issues/15)
* update dependencies ([48d664e](https://github.com/homer0/packages/commit/48d664e9eda47106c371509ff064602d51fa5379))

# 5.0.0 (2020-07-11)


### Bug Fixes

* only run release on master ([76dcb40](https://github.com/homer0/packages/commit/76dcb40127cdee6281faf1dfa0c25fd4e51e79ce))
* remove the overwrite for comma-dangle ([6c4a98e](https://github.com/homer0/packages/commit/6c4a98e07aaf3533ce4d0627db264f6f8fbf818b))
* remove the overwrite for max-classes-per-file ([2ef5130](https://github.com/homer0/packages/commit/2ef5130a6c6f8136f8e9c699abdaf266b2d9c030))
* remove the overwrite for prefer-object-spread ([f1df7c9](https://github.com/homer0/packages/commit/f1df7c9a1dbff4594db11ddb5b19b5ea34d5cdb3))
* set the preferred type to Object ([e71ae90](https://github.com/homer0/packages/commit/e71ae90ba2413d1b00656726a3d0fb986740e9ea))
* use github plugin instead of git ([27c9beb](https://github.com/homer0/packages/commit/27c9bebe0e6d370a71254c5e39fc056cf128badd))


### Features

* add JSDoc and sort-class-members ([340a540](https://github.com/homer0/packages/commit/340a5406623c97bd49871d679bf3e57f88fde447))
* add jsdoc configuration ([8caf8c3](https://github.com/homer0/packages/commit/8caf8c3f65ea9ec3a382b13a31a365c59253ad3b))
* add the sort-class-members plugin ([07354ce](https://github.com/homer0/packages/commit/07354ceab3109b4ea13b81ee8e41abfe8f676962))
* allow the use of the tag parent ([4d79c60](https://github.com/homer0/packages/commit/4d79c6005832c2033b805b75c4cbfd97907bf4ea))
* exclude 60 from no-magic-numbers ([58d9c8e](https://github.com/homer0/packages/commit/58d9c8eaecba8653bf91f50026e8012f18540150))


### BREAKING CHANGES

* All class members will now have to follow the order set by the `sort-class-members` plugin configuration.
* You'll need to stop using `Object.assign` for most of the basic cases.
* You now need to add a trailing comma to function parameters.
* You can't have more than one class per file now.
