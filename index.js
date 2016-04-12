var requestify = require('requestify'); 

function getGoogleImageResults(search, start, totalData) {
	var totalData = totalData || [];
	var start = start || 1;
	var params = {
		hostname: "http://www.google.com",
		path: "/search?q="+search+"&sa=X&biw=1920&bih=979&tbs=isz:l&tbm=isch&ijn=1&ei=XUvcVavRDMqrerq0jNgJ&start="+start+"&ved=0CBsQuT0oAWoVChMI6_Pb54rExwIVypUeCh06GgOb&vet=10CBsQuT0oAWoVChMI6_Pb54rExwIVypUeCh06GgOb.XUvcVavRDMqrerq0jNgJ.i"
	};
	return requestify.get(params.hostname + params.path).then(function(r) {
		html = r.getBody();
		var data = html.match(/(imgres\?imgurl\=)(.+?)(&)/g) || [];
		var results = [];
		data.map(function(d) {
			results.push(d.match(/(imgres\?imgurl\=)(.+?)(&)/)[2]);
		})

		totalData = totalData.concat(results);
		if(results.length > 0) {
			return getGoogleImageResults(search, totalData.length, totalData);
		} else {
			return totalData;
		} 
	});
}

var app = {
	get: function(search) {
		return getGoogleImageResults(search)
	}
};

module.exports = function(search) {
	return app.get(search).then(function(images){
			return images;
	})
};



