'use strict'

const api = require('./src/api')

const explore = async (skylink) => {
  return await api.getHeaders(skylink)
}

const getFileContent = async (fileSkylink) => {
  return await api.getFileContent(fileSkylink)
}

module.exports = { explore, getFileContent }
