'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "989076aa9114a84ed939ff6117f9654e",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"index.html": "0ff437d2721fb011362172a6b65cdd33",
"/": "0ff437d2721fb011362172a6b65cdd33",
"main.dart.js": "7c037cab3d0a83c9b1b65cfc60c5358b",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
"assets/AssetManifest.json": "c0bdee03f36027046980d6ecb64d86ec",
"assets/NOTICES": "3e215dbe4c8a3d63d5ffafb0dcd4306d",
"assets/FontManifest.json": "0232134cdafb03b4122fc4440a01e817",
"assets/AssetManifest.bin.json": "42c036d5e0514e17c00288867d290aa8",
"assets/packages/sky_ui/lib/asset/empty.svg": "ec2221016fbdfa770abd980f11475ec6",
"assets/packages/sky_ui/lib/asset/element.ttf": "a274ef7facb6cb9d0fbef26bed4f2131",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/asset/empty.svg": "ec2221016fbdfa770abd980f11475ec6",
"assets/lib/asset/Helvetica.ttf": "6af90a9da15aa7d5d82d0c0f9c79ddb5",
"assets/lib/asset/element.ttf": "5b39d892b245c97958f5c124b5cf9cf3",
"assets/lib/code/message_demo_2.txt": "1028207595257a5e8c8ae5b7e36defda",
"assets/lib/code/select_demo_3.txt": "e20fa4309dc6864944e545454aeb685c",
"assets/lib/code/empty_demo_3.txt": "a497578434fcbc9a7b03e84d504e160a",
"assets/lib/code/empty_demo_2.txt": "8301470208168a746d75bca52d2d8844",
"assets/lib/code/select_demo_2.txt": "1e4b7dc038e8ecf546bc060cb95d4817",
"assets/lib/code/message_demo_1.txt": "ea1b4f7271f552d40e485d4dcfa5af89",
"assets/lib/code/input_demo_8.txt": "48a22bc7b584abb58f1e0351442dad02",
"assets/lib/code/descriptions_demo_4.txt": "1858fc8a1a2151e1f18dc0275e32e99d",
"assets/lib/code/empty_demo_1.txt": "71d4812ebaa94005706b0f9aff0e4927",
"assets/lib/code/input_demo_9.txt": "7f03c6846350cba3637839b3ea703220",
"assets/lib/code/select_demo_1.txt": "2c027afaac40d12ea453c0f8887d324d",
"assets/lib/code/select_demo_5.txt": "1f83259419ac839026f1b49652a7cefb",
"assets/lib/code/descriptions_demo_1.txt": "409b6262d7b107e5bfebea3a71a5d644",
"assets/lib/code/select_demo_4.txt": "850f4bdd7cc6dc708ff46cc7d632d1db",
"assets/lib/code/descriptions_demo_2.txt": "814680b910d62d1d61ec846ca93226bd",
"assets/lib/code/descriptions_demo_3.txt": "a1efeccc24f92272b8b811505099fe79",
"assets/lib/code/tabs_demo_1.txt": "80c63fc1f622e614212d38faa0593f9b",
"assets/lib/code/dialog_demo_1.txt": "0e7915f7f04331ff2afb52df3bee2f68",
"assets/lib/code/button_demo_6.txt": "3eec26f0ef0bb06af60807b6fed2ce2b",
"assets/lib/code/message_box_demo_3.txt": "0d8be08794b0786d8cdbfa4f687fb3d8",
"assets/lib/code/link_demo_4.txt": "0473cad4fa1fe1a3faa7159c58b72826",
"assets/lib/code/tag_demo_1.txt": "c09048ab80510f8b466f2afb457cc478",
"assets/lib/code/message_box_demo_2.txt": "900ccf09efd787f77976d71db1263094",
"assets/lib/code/button_demo_7.txt": "695878ca223d3d58308c73c28f04020f",
"assets/lib/code/tabs_demo_2.txt": "43979baa718a0276cc0ec637aa8a841e",
"assets/lib/code/button_demo_5.txt": "0ce5f5de77cb2c5a81b1698493f0c41a",
"assets/lib/code/dialog_demo_2.txt": "b8fbec222250f0f7ca48a86653c44eaa",
"assets/lib/code/infinite_scroll_demo_1.txt": "a13218a7e30f50f5115fcb27e77c7ced",
"assets/lib/code/tag_demo_3.txt": "cea867885a79f94d3e5d71bf3ab345fc",
"assets/lib/code/tag_demo_2.txt": "35bb686043768db8e317ba2f7f0b4a1f",
"assets/lib/code/message_box_demo_1.txt": "bc0a8a08a61f84314b28999da800b422",
"assets/lib/code/dialog_demo_3.txt": "db534203d54a0b799c17a524a69d74da",
"assets/lib/code/button_demo_4.txt": "07be06a2fca126791f161c04393db6c2",
"assets/lib/code/tabs_demo_3.txt": "3402ec530237c30312013518189a8198",
"assets/lib/code/link_demo_2.txt": "e61fec94f363713f196b1722870fd7fb",
"assets/lib/code/loading_demo_1.txt": "1c8d67935c208e97079a2c3835881b93",
"assets/lib/code/link_demo_3.txt": "cb19e49b2c31b5029bed87aebd0c31cd",
"assets/lib/code/button_demo_1.txt": "f38fbb1003cdd7d3828be35a6acf24c1",
"assets/lib/code/dialog_demo_4.txt": "0225fa6d83a7962e833afcfde30b120c",
"assets/lib/code/button_demo_3.txt": "8878c42d78f6e916d3d677c878b67bc3",
"assets/lib/code/link_demo_1.txt": "dd2abc1b356ae979e6b55e8518feee64",
"assets/lib/code/loading_demo_3.txt": "81626a6c20e742b87f3870825bc3c25c",
"assets/lib/code/loading_demo_2.txt": "b797b9f85fd629b09d02f6b3a7c35725",
"assets/lib/code/tag_demo_4.txt": "f8c0eb36cbcd43bbffc90ef75dc0c5ac",
"assets/lib/code/button_demo_2.txt": "e74577f164e8b2dd4db61499615856c4",
"assets/lib/code/checkbox_demo_5.txt": "59b843c081dc3d65922d98e59a39eefe",
"assets/lib/code/alert_demo_3.txt": "da9ceef98b3cc38fc61b84fe57fdf9da",
"assets/lib/code/alert_demo_2.txt": "eeb4cecc485aa87058a25baeadaedeeb",
"assets/lib/code/collapse_demo_1.txt": "10fdd3dc7580be329e1fd34651d385b2",
"assets/lib/code/badge_demo_1.txt": "1cea3b6506b1cc45e3c0e0d598ecf565",
"assets/lib/code/checkbox_demo_4.txt": "de90fd146c67f1a183360defae912ede",
"assets/lib/code/checkbox_demo_6.txt": "9cadfd5aee77258bac76c2e7b6587701",
"assets/lib/code/radio_demo_5.txt": "87633e714b07ea2c90cd326feeb43499",
"assets/lib/code/alert_demo_1.txt": "47dbef228c07d6d30d184756cc1ad245",
"assets/lib/code/tooltip_demo_1.txt": "5ddc0d797914e2251ef5a963eecf710c",
"assets/lib/code/badge_demo_2.txt": "9c93f8a416ab2e187d0b104a907b50ff",
"assets/lib/code/radio_demo_4.txt": "710d622cd54718e4d974207946a2b500",
"assets/lib/code/checkbox_demo_7.txt": "1f70f36fc98cd426f2c7653c5787cb08",
"assets/lib/code/pagination_demo_2.txt": "03cd36e47ab13abd0b1e3a13ccf47a87",
"assets/lib/code/checkbox_demo_3.txt": "9e7dbdb5d5b71a86e25022d633c9850a",
"assets/lib/code/alert_demo_5.txt": "bb2b49e13421410e207f7537997b7f4a",
"assets/lib/code/popover_demo_1.txt": "9791f745f077b8a17da7ee1484015bac",
"assets/lib/code/alert_demo_4.txt": "3f4c9c0920388a69c46b977f359d01f7",
"assets/lib/code/radio_demo_1.txt": "1139483bdf3bd5213c08812b87456c03",
"assets/lib/code/checkbox_demo_2.txt": "4eb391db531d423cd8923914aa06e025",
"assets/lib/code/pagination_demo_3.txt": "44b60ad41b077fe96e58a2ff29873e5a",
"assets/lib/code/pagination_demo_1.txt": "4eed47f11ae6d10b0011c0a6710fa613",
"assets/lib/code/radio_demo_3.txt": "f1162d1b8efa00fcf398f1c00481da74",
"assets/lib/code/alert_demo_6.txt": "071580e23f4a0acb8fe8c3e072cbf5a6",
"assets/lib/code/popover_demo_2.txt": "37739388d4495af2becc04eabfdc79fd",
"assets/lib/code/alert_demo_7.txt": "1188df249d2123129f70a78481323c80",
"assets/lib/code/radio_demo_2.txt": "a03961f479d7f9c8a49cb8a82ca9eb47",
"assets/lib/code/checkbox_demo_1.txt": "4e67127c4fba0061c736f18dbd59ec26",
"assets/lib/code/input_number_demo_3.txt": "11010c5f304f734ba71a7a4e12418c16",
"assets/lib/code/table_demo_4.txt": "78d8762f853a4176368731772f54b925",
"assets/lib/code/date_picker_demo_1.txt": "f97b08589466f01c8a9983b5b30abd28",
"assets/lib/code/input_demo_2.txt": "3930bc36ed4f3f1eb4b0d493a0f1ef37",
"assets/lib/code/tree_demo_3.txt": "d9152911e522dc2b6088742355614886",
"assets/lib/code/time_picker_demo_2.txt": "ef81095ea040255117b6465d43d0c0e0",
"assets/lib/code/menu_demo_1.txt": "3305d1752defa0e9af8500c05c7f7301",
"assets/lib/code/layout_demo_3.txt": "a3f2cbf158f1148c2e6089620040d9fd",
"assets/lib/code/layout_demo_2.txt": "a7fd30fd829f95c9af7a7a3c8d38d3a6",
"assets/lib/code/tree_demo_2.txt": "d2f12ecf7cf6a1f02906ef24aac85795",
"assets/lib/code/time_picker_demo_3.txt": "9f5abe45e5e09bdb48d757aa871106e3",
"assets/lib/code/input_demo_3.txt": "1dcd992a322d3cda1d9780e19f0abd2c",
"assets/lib/code/table_demo_5.txt": "a37da594de1abaeaa90b3cf3ebcfe91f",
"assets/lib/code/input_number_demo_2.txt": "a6e1a3cab63104185a23ecc9c12023c6",
"assets/lib/code/input_demo_1.txt": "8bded6ebab68d7fd33495aa7dfa450e3",
"assets/lib/code/time_picker_demo_1.txt": "e88c6766ff1e1911f20a4497f81df57b",
"assets/lib/code/layout_demo_1.txt": "04b9d129bec1a16a8fbb0e499e9d6834",
"assets/lib/code/tree_demo_1.txt": "1c7ca1c938cf6bdc9339cee99b5a0173",
"assets/lib/code/swicth_demo_4.txt": "03099921039437f58781db1dc080ce24",
"assets/lib/code/input_number_demo_1.txt": "23f9d3496583765abc8625f7b8034005",
"assets/lib/code/input_number_demo_5.txt": "edfc46cf72da8ab4f93b01c557a31cc4",
"assets/lib/code/table_demo_2.txt": "cb1ea85db49fd69607c3d2197988acfb",
"assets/lib/code/input_demo_4.txt": "e70b7627eab0f2b14471a850d474e9de",
"assets/lib/code/tree_demo_5.txt": "3d78cc5a53853d005f9b104d213adf0b",
"assets/lib/code/time_picker_demo_4.txt": "62e2b7704b2d348662bab4319f2be4ba",
"assets/lib/code/layout_demo_5.txt": "71f6a92cb17b384d0304d935b58f1b7a",
"assets/lib/code/layout_demo_4.txt": "904ea3ccce09b8703d1c4a7d51a71a89",
"assets/lib/code/tree_demo_4.txt": "e110a9a9ea59876d882705de587378ef",
"assets/lib/code/input_demo_5.txt": "f50acf9b1d2de16df33b19893a1d173b",
"assets/lib/code/swicth_demo_1.txt": "07bd84c45c33ec93a3e13320bc52c957",
"assets/lib/code/table_demo_3.txt": "42ec28ac1b3253bb9c28dcc063439e9d",
"assets/lib/code/input_number_demo_4.txt": "04a0ba3772ba87cc5a2683188a0e517f",
"assets/lib/code/input_number_demo_6.txt": "62b9d49eed5115d85ded4afd0befc0b2",
"assets/lib/code/table_demo_1.txt": "2cc7ee416a3791955870c17b44e0df12",
"assets/lib/code/swicth_demo_3.txt": "8228c68c475e0bf7e6cdc00ee331f14e",
"assets/lib/code/input_demo_7.txt": "c96f784c610d87d104e593dbfc9bc155",
"assets/lib/code/tree_demo_6.txt": "6e81ca5987acb03d9b9f0db4bfe42517",
"assets/lib/code/input_demo_6.txt": "7eca427ce399a0265ad2e79ed7237d95",
"assets/lib/code/swicth_demo_2.txt": "795a0d9abea62b771cdf16b96af82a81",
"assets/AssetManifest.bin": "a3a4b7539443cab886a5da2ef8fa0a4c",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
