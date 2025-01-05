function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500); // Clear display after a brief moment
    }
}

// Preventing input from being more than 16 characters
document.getElementById('display').addEventListener('input', function() {
    if (this.value.length > 16) {
        this.value = this.value.slice(0, 16);
    }
});
