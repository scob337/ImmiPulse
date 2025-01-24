// Get HTML elements
const openPopupBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');

// Add event listener to open the popup
openPopupBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
});

// Add event listener to close the popup
closePopupBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
});

// Close the popup when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.add('hidden');
    }
});