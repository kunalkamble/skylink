'use strict'

const api = require('./src/api')

const { getFolderStructure } = require('./src/getFolderStructure')

const explore = async (skylink) => {
  const headers =  await api.getHeaders(skylink)
  console.log(headers)
}

module.exports = { explore }
