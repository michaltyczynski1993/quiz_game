// function takes a categoryName parameter and saves it to local storage.
function setCategory(categoryName) {
    localStorage.setItem('category', categoryName); // The category name is saved to local storage using setItem().
    console.log(`now chosen category is ${categoryName}`); // A message is logged to the console indicating which category has been selected.
    startQuizButton(); // This calls the startQuizButton() function when called
}

// function creates a new button within #container element of an HTML document.
function startQuizButton() {
    const container = document.getElementById('container'); // Assigns the HTML container element to a variable.
    const newButton = document.createElement('button');
    newButton.innerHTML = 'Start Quiz'; // Creating text for new button.
    newButton.style.backgroundColor = '#96ED15'; // Seting background to green color.

    newButton.addEventListener('click', function () {
        window.location.href = 'questionPage.html';
    }); //make a EcentListener to move player to another page = start a quiz
    container.appendChild(newButton); // Appends the new button element 'newButton' to the container.
}
