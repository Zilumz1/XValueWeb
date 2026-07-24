const CACHE_VERSION = 'xvalue-v2'
const PAGE_CACHE = `${CACHE_VERSION}-pages`
const ASSET_CACHE = `${CACHE_VERSION}-assets`
const NETWORK_TIMEOUT_MS = 4000
const APP_SHELL = [
  '/',
  '/favicon.svg',
  '/icons.svg',
  '/manifest.webmanifest',
  '/offline-image.svg',
]

function fetchWithTimeout(request, timeout = NETWORK_TIMEOUT_MS) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeout)

  return fetch(request, { signal: controller.signal }).finally(() => {
    clearTimeout(timer)
  })
}

async function precacheAppShell() {
  const cache = await caches.open(CACHE_VERSION)
  const pageResponse = await fetch('/', { cache: 'no-store' })

  if (!pageResponse.ok) {
    throw new Error('Unable to cache the application shell')
  }

  await cache.put('/', pageResponse.clone())

  const html = await pageResponse.text()
  const assetUrls = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/g)]
    .map((match) => new URL(match[1], self.location.origin))
    .filter((url) => url.origin === self.location.origin)
    .map((url) => `${url.pathname}${url.search}`)

  await cache.addAll([...new Set([...APP_SHELL.slice(1), ...assetUrls])])
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    precacheAppShell().then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches
        .keys()
        .then((cacheNames) =>
          Promise.all(
            cacheNames
              .filter((cacheName) => !cacheName.startsWith(CACHE_VERSION))
              .map((cacheName) => caches.delete(cacheName)),
          ),
        ),
      self.registration.navigationPreload?.enable(),
      self.clients.claim(),
    ]),
  )
})

async function handleNavigation(request, preloadResponse) {
  try {
    const response =
      (await preloadResponse) || (await fetchWithTimeout(request))

    if (response.ok) {
      const cache = await caches.open(PAGE_CACHE)
      await Promise.all([
        cache.put(request, response.clone()),
        cache.put('/', response.clone()),
      ])
    }

    return response
  } catch {
    return (
      (await caches.match(request)) ||
      (await caches.match('/')) ||
      Response.error()
    )
  }
}

async function handleAsset(request) {
  const cachedResponse = await caches.match(request)
  const networkResponse = fetch(request)
    .then(async (response) => {
      if (response.ok) {
        const cache = await caches.open(ASSET_CACHE)
        await cache.put(request, response.clone())
      }

      return response
    })
    .catch(() => undefined)

  return cachedResponse || networkResponse
}

async function handleImage(request) {
  const cachedResponse = await caches.match(request)

  if (cachedResponse) {
    return cachedResponse
  }

  try {
    const response = await fetchWithTimeout(request)

    if (response.ok || response.type === 'opaque') {
      const cache = await caches.open(ASSET_CACHE)
      await cache.put(request, response.clone())
    }

    return response
  } catch {
    return caches.match('/offline-image.svg')
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  const requestUrl = new URL(request.url)

  if (request.method !== 'GET') {
    return
  }

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(request, event.preloadResponse))
    return
  }

  if (request.destination === 'image') {
    event.respondWith(handleImage(request))
    return
  }

  if (requestUrl.origin !== self.location.origin) {
    return
  }

  event.respondWith(handleAsset(request))
})
