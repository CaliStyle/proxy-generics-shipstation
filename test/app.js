'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../package').name + '-test'
  },
  api: require('../api'),
  config: {
    main: {
      packs: [
        require('trailpack-proxy-generics')
      ]
    },
    proxyGenerics: {
      shipstation: {
        adapter: require('../'),
        options: {
          key: process.env.SHIPSTATION_KEY,
          secret: process.env.SHIPSTATION_SECRET
        }
      }
    }
  }
}, smokesignals.FailsafeConfig)


