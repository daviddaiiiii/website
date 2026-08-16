
(() => {
  const root = document.documentElement;
  const btn = document.getElementById('langToggle');

  function setLang(lang) {
    const L = lang === 'en' ? 'en' : 'zh';
    root.setAttribute('data-lang', L);
    root.setAttribute('lang', L === 'en' ? 'en' : 'zh-CN');
    localStorage.setItem('wetlab_lang', L);
    if (btn) {
      btn.textContent = L === 'en' ? '中文' : 'English';
      btn.setAttribute('aria-label', L === 'en' ? 'Switch to Chinese' : 'Switch to English');
    }
    document.title = L === 'en'
      ? 'Cross-library neighbors after channel completion: wet-lab roadmap'
      : '通道补全之后的跨库邻居：湿实验验证路线图';
  }

  const saved = localStorage.getItem('wetlab_lang');
  const preferEn = saved ? saved === 'en' : (navigator.language || '').toLowerCase().startsWith('en');
  setLang(preferEn ? 'en' : 'zh');
  if (btn) btn.addEventListener('click', () => {
    setLang(root.getAttribute('data-lang') === 'en' ? 'zh' : 'en');
  });

  const buttons = [...document.querySelectorAll('[data-filter]')];
  const edges = [...document.querySelectorAll('.edge')];
  buttons.forEach(btnF => {
    btnF.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btnF.classList.add('active');
      const f = btnF.dataset.filter;
      edges.forEach(e => {
        e.classList.toggle('hidden', !(f === 'all' || e.dataset.pri === f));
      });
    });
  });
})();
