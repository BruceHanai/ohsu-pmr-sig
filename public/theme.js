(() => {
  const system = matchMedia('(prefers-color-scheme: dark)');
  // Retire the old manual preference; system appearance is authoritative.
  try { localStorage.removeItem('sig-theme'); } catch {}
  const apply = () => {
    document.documentElement.dataset.theme = system.matches ? 'dark' : 'light';
  };
  apply();
  system.addEventListener('change', apply);
})();
