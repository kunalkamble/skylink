'use strict'
const unflatten = require('flat').unflatten

const { transformFileData } = require('./transformFileData')
const { getAllFolderPaths } = require('./getAllFolderPath')
const { unflattenTheFolder } = require('./unflattenTheFolder')
const { moveToChildren } = require('./moveToChildren')
/**
 * getFolderStructure()
 * data: Object
 * basePath: String
 */
const getFolderStructure = (data, basePath) => {
  const allFilePaths = transformFileData(data.subfiles)
  const foldersPath = getAllFolderPaths(data)
  const unflat = {}
  unflat[basePath] = {
    name: basePath,
    folderPath: '/',
    type: 'folder',
    children: []
  }
  const _unfl = unflatten(unflattenTheFolder(foldersPath, basePath))
  for (const key in _unfl) {
    unflat[basePath][key] = _unfl[key]
  }
  moveToChildren(unflat[basePath], basePath, allFilePaths)
  return unflat[basePath]
}

module.exports = { getFolderStructure }
