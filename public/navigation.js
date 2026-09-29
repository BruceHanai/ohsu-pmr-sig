const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');
const mobile = window.matchMedia('(max-width: 640px)');
function setOpen(open) {
  toggle.setAttribute('aria-expanded', String(open));
  navigation.hidden = mobile.matches && !open;
}
function syncLayout() {
  const focused = document.activeElement;
  toggle.hidden = !mobile.matches;
  setOpen(false);
  if (mobile.matches && navigation.contains(focused)) toggle.focus();
  if (!mobile.matches && focused === toggle) navigation.querySelector('a').focus();
}
toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && toggle.getAttribute('aria-expanded') === 'true') {
    setOpen(false);
    toggle.focus();
  }
});
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || !mobile.matches) return;
  setOpen(false);
  const target = document.querySelector(link.hash);
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus({preventScroll: true});
  }
});
mobile.addEventListener('change', syncLayout);
syncLayout();
