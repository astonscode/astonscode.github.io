self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./index.html",
                "./404.html",
                "/src/css/animate.css",
                "/src/css/font.css",
                "/src/css/main.css",
                "/src/css/game.css",
                "/src/css/animate.css",
            ])
        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})