// Initialize an empty array globally
let textArray = [];

function addTextToArray() {
    // Get the input element and its value
    const textInput = document.getElementById('valueInput');
    const textInput1 = document.getElementById('valueInput1');
    const newText = textInput.value  ;
    const newText1 =textInput1.value;

    // Check if the input is not empty
    if (newText.trim() + newText1.trim() !== '') {
        // Add the new text to the array
        textArray.push(newText);

        
      

        // Optional: Update the HTML to display the current array
        updateDisplay();
    } else {
        alert('Please enter some text!');
    }
}

function updateDisplay() {
    // Get the paragraph element where the array will be displayed
    const displayElement = document.getElementById('arrayDisplay');

    // Convert the array to a string and update the HTML
    // The .join(', ') method separates array items with a comma and a space
    displayElement.textContent = '[' + textArray.join(', ') + ']';
}
