var fs = require('fs');
var files = fs.readdirSync('../');
 fs.writeFile('testfs.txt', files, function(err){
    if(err) {
        console.log('Błąd');
    }
    else {
        console.log('Zapisano do pliku'+files);
    }
});