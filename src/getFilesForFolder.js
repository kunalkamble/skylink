'use strict'

const getFilesForFolder = (allFilePaths, folderPath) => {
  return allFilePaths.filter( file => file.folderPath === folderPath)
}

module.exports = { getFilesForFolder }