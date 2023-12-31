/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
// Author's name
let fullName = 'Joseph Kaneene';

// Get current year
let currentYear = new Date().getFullYear();

// Author's profile picture
let profilePicture = 'images/Profile.jpg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year')

const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = '<strong>'+fullName+'</strong>';

yearElement.innerHTML = currentYear;

imageElement.setAttribute ('src', profilePicture);

imageElement.setAttribute('alt', 'Profile Image of ' + fullName);


/* Step 5 - Array */

// Array storing my favourite food
let favouriteFood = ['Rice', 'Chappati', 'Rolex', 'Chicken', 'Beef'];

// Modify the HTML element with the id of food to display your favorite foods array. 💡Remember that you set a variable named foodElement in Step 3 to reference the element with the id of food.
foodElement.innerHTML = favouriteFood;

// Another single favourite food
let additionalFavouriteFood = 'Kikomando';

// add additionalFavouriteFood to favouriteFood
favouriteFood.push(additionalFavouriteFood);

// Append the new array
foodElement.innerHTML += `<br>${favouriteFood}`

// remove the first element in the food array
favouriteFood.shift();

// Upated version of the array after the removal of the first element
foodElement.innerHTML += `<br>${favouriteFood}`

// Remove the last element of the array
favouriteFood.pop();

// Updated version of the array after the removal of the last element
foodElement.innerHTML += `<br>${favouriteFood}`






