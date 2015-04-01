var fs = require('fs');
var walk = require('walk'), files = [];

function getFileList(path) {
	var walker = walk.walk(path, {followLinks: false});

	walker.on('file', function(root, stat, next) {
		files.push(root + '/' + stat.name);
		next();
	});

	walker.on('end', function() {
		for (var i=0; i<files.length; i++) {
			var pathReg = /[\w|.]*(.html)$/;
			
			if (pathReg.test(files[i])) {
				getFile(files[i]);
			}
		}
	});

}

function getFile(path) {
	fs.readFile(path, 'utf-8', function(err, data) {
		if (err) {
			return console.log('read file error: ' + err);
		}
		var result = data.replace(/quimg.com\/src/g, 'quimg.com/dist').replace(/\/less\//g, '/css/').replace(/(\w*)(.less)/g, '$1.css');
		fs.writeFile(path, result, 'utf-8', function(err) {
			if (err) {
				console.log('write file error: ' + err);
			}
		});
	});	
}

getFileList('.');
