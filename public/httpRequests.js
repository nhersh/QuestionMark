function asyncHTTP(url) {
	let xhr = new XMLHttpRequest();

	xhr.addEventListener("readystatechange", function () {
	if (this.readyState===4) {
	    res = xhr.responseText;
	}});

	xhr.open("GET", url, true);
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send();

}
