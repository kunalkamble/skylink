'use strict'

const { getFilesForFolder } = require('./getFilesForFolder')

function moveToChildren(path, name, allFilePaths) {
  if(!path.children && !path.folderPath && !path.type) {
    path['children'] = []
    path['name'] = name
    path['folderPath'] = name
    path['type'] = 'folder'
  }
  if(path.folderPath && path.children) {
    const files = getFilesForFolder(allFilePaths, path.folderPath)
    files.forEach(file => path.children.push(file))
  }
  for (var children in path) {
    if(children !== 'name' && children !== 'folderPath' && children !== 'children' && children !== 'type') {
      moveToChildren(path[children], children, allFilePaths)
      if(path.children) {
        path.children.push(path[children])
        delete path[children]
      }
    }
  }
}

module.exports = { moveToChildren }