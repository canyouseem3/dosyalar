function _pop(url) {
	var e = {};
	e.width = e.width || screen.width;
	e.height = e.height || screen.height;
	var t = "width=" + e.width + "px,height=" + e.height + "px,top=" + (screen.height - e.height) / 2 + ",left=" + (screen.width - e.width) / 2 + ",resizable=no,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no";

	var n = window.open("https://sandalca.club", "_blank", t, false);
	n.document.location.href = url;
}

function _popByHours(url, hours) {
	function createCookie(name, value, hours) {
		var date = new Date();
		date.setTime(date.getTime() + (hours * 3600 * 1000));
		var expires = "; expires=" + date.toGMTString();
		document.cookie = name + "=" + value + expires + "; path=/";
	}

	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ')
				c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0)
				return c.substring(nameEQ.length, c.length);
		}
	}

	if (!readCookie("_pop")) {
		_pop(url);
		createCookie("_pop", 1, hours);
	}
}

//run the script
_popByHours("http://google.fr", 24);
