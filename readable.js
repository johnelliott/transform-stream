var util = require('util')
var stream = require('stream')

function MyReadable() {
  stream.Readable.call(this)
}

//  This is for streams 2
util.inherits(MyReadable, stream.Readable)

MyReadable.prototype._Readable = function(size) {
  return 'abcdefghijklmnopqrstuvwxyz'.slice(0, size)
}

module.exports = MyReadable;
