self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("flashcards-v1").then(cache => {
      return cache.addAll(["index.html", "style.css", "script.js", "logo.png"]);
    })
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
