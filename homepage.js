// Check dark mode status from localStorage
let darkmode = localStorage.getItem('darkmode');
const themeToggle = document.querySelector('.theme-toggle');

const enableDarkMode = () => {  
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
}

// Apply dark mode on page load if it was previously enabled
if (darkmode === 'active') {
    enableDarkMode();
}

// Toggle dark mode on button click
themeToggle.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== 'active' ? enableDarkMode() : disableDarkMode();
});