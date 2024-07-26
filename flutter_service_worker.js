'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.bin.json": "11fc78738bf0fe66a0664239ad4d1191",
"assets/NOTICES": "4687bfc31d5bc25ef7acfe4a78b65f50",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.json": "96ce705f017e9fc5133594c8cd21fcf4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/icons/linkedin.png": "5d16f0f37abfcfd265fca8fcd56025ba",
"assets/assets/icons/geeksforgeeks-svgrepo-com.svg": "17111305718844d4e749f6e750f2c7ee",
"assets/assets/icons/job.png": "44b8c2a1aa3284579e7d70cd46071109",
"assets/assets/icons/graphic.svg": "6f05c1c6706df22c79a37a7ca4df3214",
"assets/assets/icons/leetcode.png": "90957b3874b13b4be4aa1048413d32f8",
"assets/assets/icons/github.png": "774872746d6b83412a54e5ab4a247567",
"assets/assets/icons/leetcode.svg": "af73f359955728cab453ae3aa4d6a508",
"assets/assets/icons/Leetcode.png": "2671bc262f9fb959d98e838bf1f889d9",
"assets/assets/icons/Geeks.png": "5ae6b4ef4512f69ec7ca2efc28c26387",
"assets/assets/icons/android.svg": "e57e55c11155e0da56d4913db52486c7",
"assets/assets/icons/website.svg": "421f827e65eb765b8ad10e386bf07849",
"assets/assets/icons/likedinn.jpeg": "5cb48c7bcdadf00fa1399d640ca4c36d",
"assets/assets/icons/joblogo.png": "1f3fa456b2908a60fc21505163f878ec",
"assets/assets/icons/github.svg": "f9563280aaab1ee2dc9c6bd4cc4fd76c",
"assets/assets/icons/apple.svg": "81afc16bd2183fcbdad794cd391e7f0d",
"assets/assets/icons/linkedin1.png": "a03ac7d9a0c4d00899c432460322e7b4",
"assets/assets/icons/linkedin2.png": "d7f6be028347c2fa8d75797fddb6f820",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/gif/chat.gif": "d8bea05864f90a154a55c74c0c045aaa",
"assets/assets/gif/portfolio.gif": "7acd8961a1eb029d6da6cb5af4000c21",
"assets/assets/gif/WhatsApp%2520Video%25202024-06-22%2520at%25208.52.06%2520AM.gif": "3ad57b3b508924df8dab39517beb6423",
"assets/assets/gif/mycamu.gif": "3fd68505a4aed4addeca4dea44a16987",
"assets/assets/imgs/03.png": "dc2ab9bf1dc7b655c283b4238c7f75b8",
"assets/assets/imgs/badge4.gif": "ed3bc44d1e82863ba42b509c41f84838",
"assets/assets/imgs/Chat_App_1-removebg-preview.png": "5d9d2f47aa636ffbc3b13a3d90d32088",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/5424482.jpg": "11a43b6c92858f82bcff3c24a784b158",
"assets/assets/imgs/IMG_0107.png": "e99ab7fb8bc2a9fa4e68c9fed4d8a819",
"assets/assets/imgs/04.png": "d38477d42dc77d62ff7a25744fd87d64",
"assets/assets/imgs/badge9.gif": "e531dc3669b0ab711c40ffbd0cba5cc8",
"assets/assets/imgs/car.jpg": "35be55bb548a5bfb74e815b414cfee96",
"assets/assets/imgs/teams.png": "501cc8e009c96e078bde578f1d2c9c1a",
"assets/assets/imgs/car1.jpg": "fc9ca863c5578e7991f9d10bb1b7e316",
"assets/assets/imgs/leetcode.gif": "73e15422011e763ea9b303a7738e71a3",
"assets/assets/imgs/videocall.png": "f86035819d5b99f3773701f2c2fe0dfe",
"assets/assets/imgs/images.jpeg": "c6a51534d51de267e9a5a0f815bbe0f2",
"assets/assets/imgs/instalogo.png": "26e169e55b0e9ea63219530c7fe041e2",
"assets/assets/imgs/02.png": "c69fe1c71fb22e80db20de3a666ff1de",
"assets/assets/imgs/bot.jpeg": "69d36947a93e276025cec449e9ab08d3",
"assets/assets/imgs/Chat_App_2-removebg-preview.png": "18382207b479d60db537f0bd1998f950",
"assets/assets/imgs/Desktop%2520Mock%2520up.png": "bc748c814ec5bcdfb5cf87db29c78f59",
"assets/assets/imgs/teams2.png": "1874f0daab6a26e26aab78c369cd7ad9",
"assets/assets/imgs/portfolio.png": "5bb68f8ae5ebce94c5e2917d973096ce",
"assets/assets/imgs/badge12.gif": "eda0fd213101ebfffa88cde2a0bc712d",
"assets/assets/imgs/badge1.gif": "b28a5ab9a46436f050765eb697c4f043",
"assets/assets/imgs/gfgcoin.gif": "572b234a871a4f230df72a4db9d0c199",
"assets/assets/imgs/badge8.gif": "d074e9e92001c138f487277dbeebcfb5",
"assets/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/assets/imgs/badge7.gif": "29c052e386f5522b560f683d7d323dc0",
"assets/assets/imgs/python.png": "0785b26f1f578724752c1e194c4d093f",
"assets/assets/imgs/insta1.png": "1bf5056180c7e6dd30f9ebc00cd165d9",
"assets/assets/imgs/kabi.jpeg": "ef488ac431b4dc8377e4d74b6a0d00f0",
"assets/assets/imgs/badge11.gif": "3d93e9e8e2212ca982ac329e3547ede4",
"assets/assets/imgs/1.png": "2db860ed6caf711f9ba977b46c005148",
"assets/assets/imgs/badge3.gif": "ed3bc44d1e82863ba42b509c41f84838",
"assets/assets/imgs/Chat_App_1__2_-removebg.png": "c5fef33aec7c5b17ff18bf0fee71c516",
"assets/assets/imgs/badge2.gif": "24cfef0927807a62345f3622461faa5e",
"assets/assets/imgs/badge6.gif": "3f3dc5afc6a57abb2a051fd28dc2704a",
"assets/assets/imgs/badge10.gif": "d78c6cd69b976d005f01a4e0b03cf4e1",
"assets/assets/imgs/badge5.gif": "3b5550c192ea62fcb73749895c38e1de",
"assets/assets/imgs/python.jpeg": "32c979aed78de79de00ed405a344923c",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/AssetManifest.bin": "f4710d23fe1881fb9b1bdbfd4dae6f75",
"assets/fonts/MaterialIcons-Regular.otf": "385849bfc994fb78b04697ac3bfcf466",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"flutter_bootstrap.js": "c1724dd17aaee63a82deaddcaa174ad2",
"main.dart.js": "7a27d89170063307e385ad72d9b762ac",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55"};
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
