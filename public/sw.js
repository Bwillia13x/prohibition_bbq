// Prohibition BBQ Service Worker - Premium PWA Experience
const CACHE_NAME = "prohibition-bbq-v1.0.0";
const STATIC_CACHE = "prohibition-bbq-static-v1.0.0";
const DYNAMIC_CACHE = "prohibition-bbq-dynamic-v1.0.0";

// Assets to cache immediately
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/brand logo/prohibition_bbq_logo.png",
  "/favicon.ico",
];

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("[SW] Installing service worker");
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log("[SW] Caching static assets");
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating service worker");
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter(
              (cacheName) =>
                cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE
            )
            .map((cacheName) => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache or network
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") return;

  // Handle API requests differently
  if (url.pathname.startsWith("/api/")) {
    event.respondWith(networkFirstStrategy(request));
    return;
  }

  // Handle static assets
  if (
    STATIC_ASSETS.includes(url.pathname) ||
    url.pathname.match(/\.(css|js|png|jpg|jpeg|svg|ico|woff|woff2)$/)
  ) {
    event.respondWith(cacheFirstStrategy(request));
    return;
  }

  // Default: network first for HTML, cache first for others
  if (request.headers.get("accept").includes("text/html")) {
    event.respondWith(networkFirstStrategy(request));
  } else {
    event.respondWith(cacheFirstStrategy(request));
  }
});

// Cache first strategy - ideal for static assets
function cacheFirstStrategy(request) {
  return caches.match(request).then((cachedResponse) => {
    if (cachedResponse) {
      return cachedResponse;
    }

    return fetch(request)
      .then((response) => {
        // Don't cache non-successful responses
        if (!response.ok) return response;

        // Cache successful responses
        const responseClone = response.clone();
        caches
          .open(DYNAMIC_CACHE)
          .then((cache) => cache.put(request, responseClone));

        return response;
      })
      .catch(() => {
        // Return offline fallback for certain routes
        if (request.headers.get("accept").includes("text/html")) {
          return caches.match("/index.html");
        }
      });
  });
}

// Network first strategy - ideal for dynamic content
function networkFirstStrategy(request) {
  return fetch(request)
    .then((response) => {
      // Cache successful responses
      if (response.ok) {
        const responseClone = response.clone();
        caches
          .open(DYNAMIC_CACHE)
          .then((cache) => cache.put(request, responseClone));
      }
      return response;
    })
    .catch(() => {
      // Return cached version if network fails
      return caches.match(request);
    });
}

// Background sync for offline actions
self.addEventListener("sync", (event) => {
  if (event.tag === "background-sync") {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Handle offline cart actions, etc.
  console.log("[SW] Performing background sync");
}

// Push notifications (for future features)
self.addEventListener("push", (event) => {
  const options = {
    body: event.data ? event.data.text() : "New update from Prohibition BBQ!",
    icon: "/brand logo/prohibition_bbq_logo.png",
    badge: "/brand logo/prohibition_bbq_logo.png",
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "Explore Sauces",
        icon: "/brand logo/prohibition_bbq_logo.png",
      },
      {
        action: "close",
        title: "Close",
        icon: "/brand logo/prohibition_bbq_logo.png",
      },
    ],
  };

  event.waitUntil(
    self.registration.showNotification("Prohibition BBQ", options)
  );
});

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (event.action === "explore") {
    event.waitUntil(clients.openWindow("/shop"));
  } else {
    event.waitUntil(clients.openWindow("/"));
  }
});
