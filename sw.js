self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./about.html",
                "./login.html",
                "./404.html",
                "./projects.html",
                "./css/main.css",
                "./css/font.css",
                "./css/themes/decode.css",
                "./css/themes/default.css",
                "./css/themes/josin.css",
                "./css/themes/koawa.css",
                "./css/themes/light.css",
                "./css/themes/scorpion.css",
                "./css/themes/scorpion-sh.css",
                "./css/themes/yannmatrix.css",
                "./script/progressbar.js",
                "./script/script.js",
                "./script/themes.js",
                "./audio/canweget.mp3"
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