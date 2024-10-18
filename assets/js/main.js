// Get the button element
const colorButton = document.getElementById('colorButton');

// Add event listener for the button click
colorButton.addEventListener('click', () => {
    // Toggle the button's background color
    colorButton.style.backgroundColor = colorButton.style.backgroundColor === 'red' ? 'blue' : 'red';
});
