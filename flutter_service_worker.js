'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "13a127f30d529b3696be3d8910fa01a5",
"assets/AssetManifest.bin.json": "cf60df6ca0cfb41cff29b6631e4bb065",
"assets/AssetManifest.json": "78e8db01bf53ebc48b527c4009baaa91",
"assets/assets/fonts/DejaVuMathTeXGyre.ttf": "cbb215ab5974102cfbf2ddf6cde75b7e",
"assets/assets/fonts/DejaVuSans-Bold.ttf": "132839e7a052c2bc6771b6818aad85bd",
"assets/assets/fonts/DejaVuSans-BoldOblique.ttf": "09bc15096703aad20ee14416610f54e8",
"assets/assets/fonts/DejaVuSans-ExtraLight.ttf": "0b056a5508f8de1ff166c887082fd7f1",
"assets/assets/fonts/DejaVuSans-Oblique.ttf": "1b64c975f5f80b2ac9a9adbf42646f78",
"assets/assets/fonts/DejaVuSans.ttf": "be189a7e2711cdf2a7f6275c60cbc7e2",
"assets/assets/fonts/DejaVuSansCondensed-Bold.ttf": "508c9ecbb3a84428184e769218bf698f",
"assets/assets/fonts/DejaVuSansCondensed-BoldOblique.ttf": "668aea36fdc98e6906f98c7040ceca58",
"assets/assets/fonts/DejaVuSansCondensed-Oblique.ttf": "ab89bb4422b366a9a38d9291059eafba",
"assets/assets/fonts/DejaVuSansCondensed.ttf": "14739540ae31fc252a5f2fba30fbd346",
"assets/assets/fonts/DejaVuSansMono-Bold.ttf": "ee45bcafa9fa4ac621e7ce2de5f931db",
"assets/assets/fonts/DejaVuSansMono-BoldOblique.ttf": "7bbbfedc5560813c2e0d20966360dfdf",
"assets/assets/fonts/DejaVuSansMono-Oblique.ttf": "ebc68b684a448cc84dd1744d01e14340",
"assets/assets/fonts/DejaVuSansMono.ttf": "c2356fc49835b1870dcc5b07799b4920",
"assets/assets/fonts/DejaVuSerif-Bold.ttf": "92d3df83f57092ae37e16edd55d04b07",
"assets/assets/fonts/DejaVuSerif-BoldItalic.ttf": "5fb85df80ae427ed3f7d0708695ce361",
"assets/assets/fonts/DejaVuSerif-Italic.ttf": "4dc5d873af9eaf51bf73c48337803cf7",
"assets/assets/fonts/DejaVuSerif.ttf": "b3800b3cb154775c97dbca08e6e59cc2",
"assets/assets/fonts/DejaVuSerifCondensed-Bold.ttf": "faac62bd6ea042fc79984c912c7a760c",
"assets/assets/fonts/DejaVuSerifCondensed-BoldItalic.ttf": "6932cafd8a8d7572734da3c6a44fd02e",
"assets/assets/fonts/DejaVuSerifCondensed-Italic.ttf": "2959a95f598a714ec53accd57731d8b2",
"assets/assets/fonts/DejaVuSerifCondensed.ttf": "8e62bb758c10d798061a433cd10e2de5",
"assets/assets/images/arac.png": "351429d01ee8c667b0583a11f256fc92",
"assets/assets/images/meb_logo.png": "2b670b346aed151b3ae2ccd4f72222b6",
"assets/FontManifest.json": "e099d223e9d1b9c86e3e1594628e8e55",
"assets/fonts/MaterialIcons-Regular.otf": "fa7421ed6625362e1de1d2c5e723034c",
"assets/NOTICES": "f61593577ba320908a86845e0eb10869",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "bcf8c0945c442b5f8e8223acb70e2aaa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "819db3e12e9961b63ba7c57137f325f6",
"/": "819db3e12e9961b63ba7c57137f325f6",
"main.dart.js": "7b9ad9aa019e43e9b431d918f2c9941b",
"manifest.json": "b81893ef1f5d6a97c602311f1f42e17a",
"version.json": "d8b1e2dc0345536f08847aef9c1574dc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
