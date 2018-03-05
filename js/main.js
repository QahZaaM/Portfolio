$(document).ready(function(){

	setTimeout(function(){
		$("body").addClass("loaded");
	}, 500);

	$("#contactButton").click(function(){
		var mailBody=document.getElementById('content').value;
		var subject = document.getElementById('subject').value;
		window.open("mailto:maaz_haq@live.com?subject="+subject+"&body="+mailBody);
	});
});

function hrefSwitcher() {
	if (containsPage(window.location.pathname)) {
		window.location.href = "../index.html";
	} else {
		window.location.href = "#";
	}

}

function containsPage(path) {
	if (path.indexOf("pages") !== -1) return true;
	return false;
}
