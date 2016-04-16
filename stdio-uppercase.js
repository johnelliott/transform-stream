var util = require('util')
var stream = require('stream')

function MyTransform() {
  stream.Transform.call(this)
}

//  This is for streams 2
util.inherits(MyTransform, stream.Transform)

MyTransform.prototype._transform = function(chunk, encoding, callback) {
  var data = new Buffer(chunk.toString().toUpperCase())
  this.push(data)
  callback()
}

MyTransform.prototype._flush = function(callback) {
  callback()
}

module.exports = MyTransform;

var tr = new MyTransform();
process.stdin.pipe(tr).pipe(process.stdout)

setTimeout(function() {
  tr.end()
}, 3000)
