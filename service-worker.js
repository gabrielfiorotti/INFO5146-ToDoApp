const CACHE_NAME = "to-do-pwa-cache-v1";
const FILES_TO_CACHE = [
  "/INFO5146-ToDoApp/",
  "/INFO5146-ToDoApp/index.html",
  "/INFO5146-ToDoApp/style.css",
  "/INFO5146-ToDoApp/app.js",
  "/INFO5146-ToDoApp/manifest.json",
  "/INFO5146-ToDoApp/icons/icon-128.png",
  "/INFO5146-ToDoApp/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
