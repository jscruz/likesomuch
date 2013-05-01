function listener() {
    var l = document.getElementsByClassName("UFILikeLink");
    for (i = 0; i < l.length; i++) {
		if(l[i].innerHTML != "Unlike"){
			l[i].innerHTML = "Like so much";
		}
    }
}
var timeout = null;
document.addEventListener("DOMSubtreeModified", function () {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(listener, 500);
}, false);