// Select all necessary elements
var deleteButtons = document.querySelectorAll('.delete-btn');
var likeButtons = document.querySelectorAll('.like-btn');
var plusButtons = document.querySelectorAll('.plus-btn');
var minusButtons = document.querySelectorAll('.minus-btn');
var countElements = document.querySelectorAll('.count');
var totalPriceElement = document.getElementById('total-price');


// Event listeners for delete buttons
deleteButtons.forEach((button) => {
    button.addEventListener('click', function() {
        button.parentElement.remove();
        updateTotalPrice();
    });
});

// Event listeners for like buttons
likeButtons.forEach((button) => {
    button.addEventListener('click', function() {
        // Toggle color or state of the like button
        if (button.classList.contains('liked')) {
            // If the button is already liked, remove the 'liked' class
            button.classList.remove('liked');
        } else {
            // If the button is not liked, add the 'liked' class
            button.classList.add('liked');
        }
    });
});

// Event listeners for plus buttons
plusButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        let count = countElements[index].innerText;
        count++;
        countElements[index].innerText = count;
        updateTotalPrice();
    });
});

// Event listeners for minus buttons
minusButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        let count = countElements[index].innerText;
        if (count >= 1) {
            count--;
            countElements[index].innerText = count;
            updateTotalPrice();
        }
    });
});

// Function to update the total price
function updateTotalPrice() {
    totalPrice = 0;
    document.querySelectorAll('.item').forEach((item, index) => {
        const price = item.querySelector('.item-price').innerText.replace('$', '');
        const quantity = countElements[index].innerText;
        totalPrice += price * quantity;
    });
    totalPriceElement.innerText = `$${totalPrice}`;
}
