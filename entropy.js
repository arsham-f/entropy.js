window.MouseEntropy = function(callback) {
	var counter = 0,
		alphanumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
		characters = alphanumeric.length,
		callback = callback || null,
		key = "";
	$(document).mousemove(function (e) {
		if (counter % 100 == 0) {
			key = key + alphanumeric.substr((e.pageX * e.pageY) % characters, 1);
			
			if (callback) 
				callback.call(this, key);
		}
		counter++;
	});
}