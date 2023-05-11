const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), o = [
  a + "/_app/immutable/entry/app.6a289dc6.js",
  a + "/_app/immutable/chunks/0.569215e1.js",
  a + "/_app/immutable/chunks/1.d6ae12a2.js",
  a + "/_app/immutable/chunks/10.788bc03b.js",
  a + "/_app/immutable/chunks/11.92716f6e.js",
  a + "/_app/immutable/chunks/12.e33e2297.js",
  a + "/_app/immutable/chunks/13.c742365f.js",
  a + "/_app/immutable/chunks/14.fbd21c3e.js",
  a + "/_app/immutable/chunks/15.d427bdf6.js",
  a + "/_app/immutable/chunks/2.6d4a9b79.js",
  a + "/_app/immutable/chunks/3.b909becb.js",
  a + "/_app/immutable/chunks/4.78f090b0.js",
  a + "/_app/immutable/chunks/5.36dae521.js",
  a + "/_app/immutable/chunks/6.0e87493a.js",
  a + "/_app/immutable/chunks/7.f6d2848a.js",
  a + "/_app/immutable/chunks/8.a6c59757.js",
  a + "/_app/immutable/chunks/9.dedad253.js",
  a + "/_app/immutable/assets/Footer.d83b38e2.css",
  a + "/_app/immutable/chunks/DateIcon.9ccaf77e.js",
  a + "/_app/immutable/chunks/Footer.81ec45b0.js",
  a + "/_app/immutable/chunks/index.317fa1c7.js",
  a + "/_app/immutable/chunks/index.98f42e13.js",
  a + "/_app/immutable/chunks/singletons.9793a473.js",
  a + "/_app/immutable/chunks/store.a7ae9623.js",
  a + "/_app/immutable/chunks/toastify.6915724a.js",
  a + "/_app/immutable/entry/start.36d98b1b.js",
  a + "/_app/immutable/entry/error.svelte.df2c65ee.js",
  a + "/_app/immutable/assets/_layout.123aba82.css",
  a + "/_app/immutable/entry/_layout.svelte.973662df.js",
  a + "/_app/immutable/assets/_page.a838d9c0.css",
  a + "/_app/immutable/entry/_page.svelte.7ce958b6.js",
  a + "/_app/immutable/assets/_page.62f8aaba.css",
  a + "/_app/immutable/entry/about-page.svelte.a0c86fe1.js",
  a + "/_app/immutable/assets/_page.0fcf5ca7.css",
  a + "/_app/immutable/entry/dashboard-page.svelte.b3ef807c.js",
  a + "/_app/immutable/assets/_page.8e045a8b.css",
  a + "/_app/immutable/entry/events-page.svelte.b64aca9e.js",
  a + "/_app/immutable/assets/_layout.1d95c61a.css",
  a + "/_app/immutable/entry/information-layout.svelte.b52c6ef2.js",
  a + "/_app/immutable/assets/_page.a9e098a5.css",
  a + "/_app/immutable/entry/information-cleaning-page.svelte.01c279a4.js",
  a + "/_app/immutable/assets/_page.f0653b42.css",
  a + "/_app/immutable/entry/information-commonarea-page.svelte.24a60b2c.js",
  a + "/_app/immutable/entry/information-internet-page.svelte.b9ee8805.js",
  a + "/_app/immutable/assets/_page.aadb423e.css",
  a + "/_app/immutable/entry/information-laundry-page.svelte.fbc89123.js",
  a + "/_app/immutable/assets/_page.a797eec9.css",
  a + "/_app/immutable/entry/information-phone-page.svelte.227cb075.js",
  a + "/_app/immutable/assets/_page.b929d0d6.css",
  a + "/_app/immutable/entry/information-rules-page.svelte.fef82085.js",
  a + "/_app/immutable/assets/_page.31d1a99f.css",
  a + "/_app/immutable/entry/information-waste-page.svelte.a897c96c.js",
  a + "/_app/immutable/assets/_page.726f7ead.css",
  a + "/_app/immutable/entry/messages-page.svelte.c24d0100.js",
  a + "/_app/immutable/assets/_page.5f5a928e.css",
  a + "/_app/immutable/entry/nouser-page.svelte.3a4e3235.js"
], u = [
  a + "/backgroundapp/bakgrunnBeskjeder.jpg",
  a + "/backgroundapp/bakgrunnDashboard.jpg",
  a + "/backgroundapp/BakgrunnIkkeBruker2.jpg",
  a + "/backgroundapp/bakgrunnInfo.jpg",
  a + "/backgroundapp/bakgrunnKalender.jpg",
  a + "/backgroundapp/landingPage.jpg",
  a + "/backgrounddesktop/BackgroundDesktop1.jpg",
  a + "/backgrounddesktop/BackgroundDesktop2.jpg",
  a + "/backgrounddesktop/BackgroundDesktop3.jpg",
  a + "/backgrounddesktop/BackgroundDesktop4.jpg",
  a + "/backgrounddesktop/BackgroundDesktop5.jpg",
  a + "/favicon.png",
  a + "/logo/AppLogo.jpg",
  a + "/logo/AppLogo.png",
  a + "/logo/Heimat.png",
  a + "/logo/icon-128x128.png",
  a + "/logo/icon-144x144.png",
  a + "/logo/icon-152x152.png",
  a + "/logo/icon-192x192.png",
  a + "/logo/icon-384x384.png",
  a + "/logo/icon-48x48.png",
  a + "/logo/icon-512x512.png",
  a + "/logo/icon-72x72.png",
  a + "/logo/icon-96x96.png",
  a + "/manifest.json"
], i = "1682694261514", c = `cache-${i}`, m = [
  ...o,
  // the app itself
  ...u
  // everything in `static`
];
self.addEventListener("install", (e) => {
  async function p() {
    await (await caches.open(c)).addAll(m);
  }
  e.waitUntil(p());
});
self.addEventListener("activate", (e) => {
  async function p() {
    for (const s of await caches.keys())
      s !== c && await caches.delete(s);
  }
  e.waitUntil(p());
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function p() {
    const s = new URL(e.request.url), t = await caches.open(c);
    if (m.includes(s.pathname))
      return t.match(s.pathname);
    try {
      const n = await fetch(e.request);
      return n.status === 200 && t.put(e.request, n.clone()), n;
    } catch {
      return t.match(e.request);
    }
  }
  e.respondWith(p());
});
