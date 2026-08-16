
(() => {
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const edges = [...document.querySelectorAll('.edge')];
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      edges.forEach(e => {
        e.classList.toggle('hidden', !(f === 'all' || e.dataset.pri === f));
      });
    });
  });
})();
