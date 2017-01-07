const fs = require('fs')
const path = require('path')
const stream = require('stream')

exports.file = (name) => {
    return fs.createReadStream(path.join(__dirname, 'files', name))
}

exports.fileSize = (path) => {
    return fs.statSync(path).size
}

