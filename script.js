const themeToggle = document.querySelector('#theme-toggle');
const contactForm = document.querySelector('#contact-form');
const formNote = document.querySelector('#form-note');

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);

    if (theme === 'dark') {
        themeToggle.textContent = '☀️ Light';
        themeToggle.setAttribute('aria-label', 'Switch to light theme');
    } else {
        themeToggle.textContent = '🌙 Dark';
        themeToggle.setAttribute('aria-label', 'Switch to dark theme');
    }
}

const savedTheme = localStorage.getItem('portfolio-theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
setTheme(savedTheme || preferredTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.dataset.theme || 'light';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formNote.textContent = 'Thanks for your message! Please contact me directly through email for now.';
    contactForm.reset();
});
