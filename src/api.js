'use strict'

const axios = require('axios')
const { getFolderStructure } = require('./getFolderStructure')

const getHeaders = async (skylink) => {
  const url = `${skylink}?format=concat`
  try {
    const resp = await axios.head(url);
    if(resp.headers['skynet-file-metadata']) {
      const headers = JSON.parse(resp.headers['skynet-file-metadata'])
      if(headers.filename) {
        const response = getFolderStructure(headers, headers.filename)
        return response
      }
    } else {
      return []
    }
    
  } catch(err) {
    console.log('-------------------------------------')
    console.log(err)
  }
}

module.exports = { getHeaders }