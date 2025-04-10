document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const loginBtn = document.querySelector('.login-btn');

  navbar.classList.add('transparent');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
          navbar.classList.remove('transparent');
          loginBtn.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
          navbar.classList.add('transparent');
          loginBtn.classList.remove('scrolled');
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const changeback = document.getElementById('changeback');
  
    changeback.classList.add('transparent1');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            changeback.classList.add('scroll2');
            changeback.classList.remove('transparent1');
        } else {
            changeback.classList.remove('scroll2');
            changeback.classList.add('transparent1');
        }
    });
});
window.onload = function () {
  setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
      const content = document.getElementById('content');
      content.style.display = 'block';
      setTimeout(() => content.classList.add('fade-in'), 100);
  }, 0);
};

function runCountUp() {
  const stats = [
      { id: 'stat1', end: 150 },
      { id: 'stat2', end: 200 },
      { id: 'stat3', end: 50 }
  ];

  stats.forEach(stat => {
      let count = 0;
      const element = document.getElementById(stat.id);
      if (element) {
          const interval = setInterval(() => {
              count++;
              element.textContent = count;
              if (count === stat.end) clearInterval(interval);
          }, 10);
      } else {
          console.error(`Element with id ${stat.id} not found`);
      }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.animate');
  const aboutUsSection = document.querySelector('.about-us');

  // Observer for fade-in effect
  const fadeInObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  elements.forEach(element => {
      fadeInObserver.observe(element);
  });

  // Observer for count-up effect
  const countUpObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              console.log('About Us section is visible, running count up');
              runCountUp();
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  countUpObserver.observe(aboutUsSection);
});


let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {  
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
}

if (darkmode === 'active') enableDarkMode() 
 
themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== 'active' ? enableDarkMode() : disableDarkMode()
});

// Export dark mode functions for other pages
window.enableDarkMode = enableDarkMode;
window.disableDarkMode = disableDarkMode;
window.isDarkMode = () => localStorage.getItem('darkmode') === 'active';