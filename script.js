const isValidTheme = (theme) => {
    return theme === 'dark' || theme === 'light';
};
const getCurrentTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return isValidTheme(savedTheme) ? savedTheme : 'dark';
};
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
};
const initializeThemeToggle = () => {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) {
        console.error('Theme toggle button not found');
        return;
    }
    themeToggle.addEventListener('click', toggleTheme);
};
// Set theme immediately to prevent flash
const initialTheme = getCurrentTheme();
setTheme(initialTheme);
// Initialize toggle button when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeThemeToggle);
}
else {
    initializeThemeToggle();
}
