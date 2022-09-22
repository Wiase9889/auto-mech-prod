/* eslint-disable array-callback-return */
const CACHE_NAME = "AutoMech v-1";
const URLS_TO_CACHE = [
  "index.html",
  "/home",
  "dasboard",
  "/",
  "signup",
  "login",
  "suppliers",
  'suppliers/:supplierId',
  "customers",
  'customers/:customerId',
  'products',
  '/products/:productId',
  'settings',
  'employees',
  'employees/:empployeeId',
  'new-customer',
  'new-product',
  '404',
];

// `this` represents the Service Worker itself...
const self = this;

// Install SW...
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // console.log('opened cache');
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Listen for requests..
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(async () => {
      try {
        return await fetch(event.request);
      } catch {
        return await caches.match("index.html");
      }
    })
  );
});

// Activate the SW...
self.addEventListener("activate", (event) => {
  const cacheWhiteLists = [];

  cacheWhiteLists.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteLists.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
