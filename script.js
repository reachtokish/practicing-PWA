document.getElementById("btn").addEventListener("click", function() {
	alert();
});

window.addEventListener("load", function(e) {
	if('serviceWorker' in navigator) {
		try {
			navigator.serviceWorker.register('sw.js');
			console.log("SW Registered");
		}
		catch (error) {
			console.log("SW Registration Failed");
		}
	}
})