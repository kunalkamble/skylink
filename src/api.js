'use strict'

const axios = require('axios')
const { getFolderStructure } = require('./getFolderStructure')
// async function getHeaders(skylink) {
//   const url = `${skylink}?format=concat`
//   try {
//     let res = await axios.head(url);
//     console.log(res.headers['skynet-file-metadata'].filename)
//     return res.headers['skynet-file-metadata'].filename
//   } catch(err) {
//     console.log('-------------------------------------')
//     console.log(err)
//   }
// }

const getHeaders = async (skylink) => {
  const url = `${skylink}?format=concat`
  try {
    const resp = await axios.head(url);
    const headers = JSON.parse(resp.headers['skynet-file-metadata'])
    if(headers.filename) {
      const response = getFolderStructure(headers, headers.filename)
      return response
    }
  } catch(err) {
    console.log('-------------------------------------')
    console.log(err)
  }
}

module.exports = { getHeaders }