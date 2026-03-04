(function () {
  let lastTag = '';
  setInterval(async () => {
    try {
      const res = await fetch(window.location.href, { method: 'HEAD', cache: 'no-store' });
      const tag = res.headers.get('etag') || res.headers.get('last-modified') || '';
      if (lastTag && tag !== lastTag) location.reload();
      lastTag = tag;
    } catch (e) {}
  }, 1000);
})();
