'use strict'

const unflattenTheFolder = (foldersPaths) => {
  const unflattenFolder = {}
  foldersPaths.map (folderPath => {
    const flatPath = folderPath.replace(/\//g,'.')
    unflattenFolder[flatPath] = {
      folderPath: folderPath.split('.').pop(),
      name: folderPath.split('/').pop(),
      children: [],
      type: 'folder'
    }
  })
  return unflattenFolder
}

module.exports = { unflattenTheFolder }