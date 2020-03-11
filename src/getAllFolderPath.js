'use strict'

const getAllFolderPaths = (metaData) => {
  let folders = []
  for (const path in metaData.subfiles) {
    const folder = path.split('/')
    if(folder.length > 1) {
      folder.pop()
      folders.push(folder)
    }
    
  }
  return multiDimensionalUnique(folders).map(f => f.join('/'))
}

function multiDimensionalUnique(arr) {
    const uniques = [];
    const itemsFound = {};
    for(let i = 0, l = arr.length; i < l; i++) {
        const stringified = JSON.stringify(arr[i]);
        if(itemsFound[stringified]) { continue; }
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
    }
    return uniques;
}

module.exports = { getAllFolderPaths }