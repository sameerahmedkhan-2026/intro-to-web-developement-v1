// Get the theme toggle button
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check if user has a saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';

// Set the initial theme
htmlElement.setAttribute('data-theme', savedTheme);
updateButtonText(savedTheme);

// Add click event listener to toggle button
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Update the data-theme attribute
    htmlElement.setAttribute('data-theme', newTheme);

    // Save preference to localStorage
    localStorage.setItem('theme', newTheme);

    // Update button text
    updateButtonText(newTheme);
});

// Function to update button text based on current theme
function updateButtonText(theme) {
    if (theme === 'dark') {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
}
