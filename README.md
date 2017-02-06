# proxy-generics-shipstation

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Proxy Generic Payment Processor for Shipstation.com.

Looking for [Proxy Engine?](https://github.com/calistyle/trailpack-proxy-engine)
Looking for [Proxy Generics?](https://github.com/calistyle/trailpack-proxy-generics)

## Install

```sh
$ npm install --save proxy-generics-shipstation
```

## Configure

```js
// config/proxyGenerics.js
module.exports = {
  shipstation: {
      adapter: require('proxy-generic-shipstation'),
      options: {
          key: '<your public key>',
          secret: '<your private key>'
      }
  }
}
```

[npm-image]: https://img.shields.io/npm/v/proxy-generics-shipstation.svg?style=flat-square
[npm-url]: https://npmjs.org/package/proxy-generics-shipstation
[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/proxy-generics-shipstation/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/proxy-generics-shipstation/tree/master
[daviddm-image]: http://img.shields.io/david//trailpack-proxy-generics-shipstation.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/proxy-generics-shipstation
[codeclimate-image]: https://img.shields.io/codeclimate/github/CaliStyle/proxy-generics-shipstation.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/CaliStyle/proxy-generics-shipstation

