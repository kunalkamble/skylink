'use strict'

const transformFileData = (filesObject) => {
  const _allFilePaths = []
  for (const path in filesObject) {
    const { contenttype, len } = filesObject[path]
    const fullPath = path.split('/')
    const filename = fullPath.pop()
    const folderPath = `${fullPath.join('/') || '/'}`
    _allFilePaths.push({
      name: filename,
      folderPath,
      contenttype,
      len,
      path,
      type: 'file'
    })
  }
  return _allFilePaths
}

module.exports = { transformFileData }