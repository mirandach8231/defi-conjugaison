// Service worker minimal de Défi Conjugaison.
// Aucune mise en cache des données élèves.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
