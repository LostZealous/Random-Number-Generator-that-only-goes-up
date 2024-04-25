function generateNumber() {
    let lastNumber = parseInt(localStorage.getItem('lastNumber')) || 0; // Retrieve the last number from localStorage or start at 0 if not set
    let number = Math.floor(Math.random() * (lastNumber)) + (1 + lastNumber);
    document.getElementById('display').innerHTML = number;
    localStorage.setItem('lastNumber', number); // Save the new number to localStorage
}

function resetNumber() {
    localStorage.removeItem('lastNumber');  // Clear the last number from localStorage
    document.getElementById('display').innerHTML = "Number will appear here";
}
