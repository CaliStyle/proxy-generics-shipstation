'use strict'
/* global describe, it */
const assert = require('assert')
describe('Shipping Generic Shippo', () => {
  let ShippingGenericService

  before((done) => {
    ShippingGenericService = global.app.services.ShippingGenericService
    done()
  })

  it('should exist', () => {
    assert(ShippingGenericService)
  })
})
