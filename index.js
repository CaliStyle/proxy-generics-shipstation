/* eslint no-console: [0] */
'use strict'

module.exports = class ProxyGenericsShipstation {
  constructor(options) {
    this.options = options
  }

  /**
   * Create Shipstation Instance
   * @returns {*} Shipstation Instance
   */
  shipstation() {
    const shipstationAPI = require('node-shipstation')
    return new shipstationAPI(this.options.key, this.options.secret);
  }
}

