var staticAssets = [
	'/',
	'style.css',
	'script.js'
]

self.addEventListener("install", async event => {
	const cache = await caches.open("news-static");
	cache.addAll(staticAssets);
});

self.addEventListener("fetch", function() {
	console.log("Fetch");
});