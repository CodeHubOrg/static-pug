var fs = require('fs');
var options = require('./options');
var getContents = require('./getContents');

getContents(function(contentArray){    
    options['contentblocks'] = contentArray;
    fs.writeFile('options-md.js', JSON.stringify(options, null, 2), function(){console.log("options-md.js written")});
});