// --- progress bar ---
window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = scrollPercent + '%';
});

// --- apparition de la section "About Me" ---
document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.getElementById('about-me');
  if (aboutSection) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(aboutSection);
  }
});
