var counter = 0;
var alphanumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var characters = alphanumeric.length;

var key = "";
$(document).mousemove(function (e) {
	if (counter % 200 == 0) {
		key = key + alphanumeric.substr((e.pageX * e.pageY) % characters, 1);
		
		$('#key').html("<b>[</b> " + key + " <b>]</b>");
	}
	counter++;
});