type Theme = 'dark' | 'light';

const isValidTheme = (theme: string | null): theme is Theme => {
    return theme === 'dark' || theme === 'light';
};

const getCurrentTheme = (): Theme => {
    const savedTheme = localStorage.getItem('theme');
    return isValidTheme(savedTheme) ? savedTheme : 'dark';
};

const setTheme = (theme: Theme): void => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};

const toggleTheme = (): void => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
};

const initializeThemeToggle = (): void => {
    const themeToggle = document.getElementById('themeToggle') as HTMLButtonElement | null;
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
} else {
    initializeThemeToggle();
}
