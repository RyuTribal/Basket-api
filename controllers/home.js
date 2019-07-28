var path = require('path');

exports.Index = function(req,res){
    res.sendFile(path.resolve('www/html/index.html'));
};