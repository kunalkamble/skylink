'use strict'

const api = require('./src/api')

const explore = async (skylink) => {
  return await api.getHeaders(skylink)
}

module.exports = { explore }
