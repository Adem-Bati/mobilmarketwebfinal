'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f17a81419a74337f26fbb6d250985396",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/antepfistik.jpg": "60c6115187fb607041ebe5e5605f27c2",
"assets/images/atistirmalik.jpg": "063744d0e769a01dbe35cfddb863f872",
"assets/images/atistirmalik.png": "3f9ede0bc1e3d70d8f0bfef9f4d15f0e",
"assets/images/bakim1.jpg": "d6700410e2386889a06043d4a20ba272",
"assets/images/bakim2.jpg": "1e7266b43aa51600a6e9b5bb13c3cebd",
"assets/images/bakim3.jpg": "bd94420b3860d9dc0b8daf43fc826117",
"assets/images/BB486B87": "d41d8cd98f00b204e9800998ecf8427e",
"assets/images/cigara.jpg": "ab33984d16f708c282e65de27447d955",
"assets/images/cigara1.jpg": "b9e6f921c85cade99d3ceaae3062612a",
"assets/images/cigara4.jpg": "1a367067041ecd5c3e62be370b6998bc",
"assets/images/cips1.jpg": "a6d0e13ccb5fe7aa0afff066515c35b7",
"assets/images/cips2.jpg": "164c70dfca62f9fcab438dd9e13d4bde",
"assets/images/cips3.jpg": "1a42ac9c5d07271ba5c9e76cbcfc19fe",
"assets/images/comp-1.gif": "8c5d5aae7d7225ef761455c6a3a71261",
"assets/images/default.png": "6a7f7dd730309dd5d3e02c2fd70ef037",
"assets/images/ev1.jpg": "cbc090c5869130d633d0cb9f9a46720a",
"assets/images/ev2.jpg": "7c2856b8c88306ccf965cdb83f12c8bd",
"assets/images/ev3.jpg": "7e1ba20e0a59777e10ad058027bc20be",
"assets/images/evbakim.jpg": "ed5bb7635c28fd541e07a9ea0ccb0e45",
"assets/images/findikici.jpg": "1e992219594b22ae5b5b3d77101e47ba",
"assets/images/icecek.jpg": "78c2de3a5c68ee302ac01bcafd9bb2d2",
"assets/images/icecek.PNG": "7187bfb4cbd294e8c288f9823fe27456",
"assets/images/icecek1.jpg": "8b6c4f7e02238b01d386e78f0ad28a1c",
"assets/images/icecek2.jpg": "ea809ed250d7d04568a0ca3b506e170c",
"assets/images/icecek3.jpg": "fee2333eb3ead7bd4c4894c2e356ffb0",
"assets/images/kavrulmustuzlufistik.jpg": "4eb60678028f503d563c92fdaa318dc9",
"assets/images/kisiselbakim.jpg": "387a41536c582431d320b983ba629cbe",
"assets/images/kuruyemis.jpg": "f74a0ecece36cbe4594503a883c7505d",
"assets/images/loader.gif": "2c0c5093f8c8575e7dccc10c26032456",
"assets/images/sigara2.jpg": "b78ce9f9351b12bbe92e09e834a892eb",
"assets/images/sigara3.jpg": "982cac737a071e0791a968041d979b9f",
"assets/images/slider10.jpg": "a96f1226cb0d720a81683e5bea7206b6",
"assets/images/slider11.jpg": "ee44f3081dd3501c67d509f843bff431",
"assets/images/slider12.jpg": "d6f24299f77560288a39a14c2d67a67e",
"assets/images/slider16.jpg": "052b2a3e7026266101ec13e4458efb7e",
"assets/images/slider4.jpg": "264fa073d3f2b38c54a048cd0dfa00de",
"assets/images/slider5.jpg": "df4a3ec7cd90a9caaddad0b7d055c060",
"assets/images/slider6.jpg": "1aa3b451d1e04a0af966ed51edde8fe8",
"assets/images/slider7.jpg": "bdf7a77986c6cdb0d2bc5f1475705125",
"assets/images/slider8.jpg": "887d7a8b7a3919f1f123c20d6d25c555",
"assets/images/sut1.jpg": "d34e2882755dbcddebe348ce6cf2f822",
"assets/images/sut2.jpg": "f9dc19fa058371bd3d87e5a1f661387b",
"assets/images/sut3.jpg": "47d8bcf96f8d528e3f5c016b8d56aaf2",
"assets/images/Sut_Kahvaltilik.PNG": "a61b4bbcf5de5542331cedbcdb9a2529",
"assets/images/tuzlufistik.jpg": "5ae5ad8932a5185fe0605cae26a24295",
"assets/images/yuklemekranlogo.png": "56154fcbc870c1168dae7b5df6797907",
"assets/NOTICES": "ea552eed226721092c7b01d73f8619f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7fe32525c75b974640570fa03540ec2c",
"/": "7fe32525c75b974640570fa03540ec2c",
"main.dart.js": "db3041f19a2dfb151aaa0c61161a2b0e",
"manifest.json": "10fe5ccb637a0ec7cefd11f4f97cda70",
"version.json": "20446f006ff8c7fc0bf3c4544d98a8ad"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
