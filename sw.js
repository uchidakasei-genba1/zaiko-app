// アプリとして追加できるようにするための最小限のサービスワーカー（データは保存しない）
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
