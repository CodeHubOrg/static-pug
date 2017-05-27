var fs = require('fs')
var path = require('path')
var marked = require('marked')

var callback;
var contentArray = [];

dirpath = 'src/blocks';
fs.readdir(dirpath, function(err, files){
    if(err) throw err;
    var len = files.length;
    files.forEach(function(file){
        var filepath = path.join(__dirname, dirpath, file)
        // console.log(filepath)
        fs.readFile(filepath, 'utf8', function(err, data){ 
            var parsed = marked(data);
            var content = {
                name: file,
                content: parsed
            }
            contentArray.push(content);
            if(contentArray.length == len){
              if( typeof callback == 'function' ){
                callback(contentArray);
              }
            }
        })
    })
})

var cb = function(contentArray){
   return contentArray;
}

module.exports = function(cb){
  if(contentArray.length > 0){
    cb(contentArray);
  } else {
    callback = cb;
  }
}