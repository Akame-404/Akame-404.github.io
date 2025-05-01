// --- Barre de progression ---
window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
  });
  
  // --- Navbar qui se cache quand on descend ---
  let lastScrollTop = 0;
  const nav = document.querySelector('nav');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
    if (currentScroll > lastScrollTop && currentScroll > 50) {
      nav.classList.add('hidden'); // on descend → cache
    } else {
      nav.classList.remove('hidden'); // on remonte → montre
    }
  
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
  