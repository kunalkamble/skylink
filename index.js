'use strict'

const api = require('./src/api')

const { getFolderStructure } = require('./src/getFolderStructure')

const explore = async (skylink) => {
  return await api.getHeaders(skylink)
}

module.exports = { explore }
