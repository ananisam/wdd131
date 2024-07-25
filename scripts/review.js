// Coding the review.html to count the number of reviews
const displayReview = document.querySelector("#reviews");

let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

// Setting the counter condition
if (numReviews == 0) {
    displayReview.textContent = `1. Please go back and review more products`;
    numReviews = 1;
} else {
    displayReview.innerHTML = numReviews;
}

// Incrementing the number of reviews 
numReviews++;

localStorage.setItem("numReviews-ls", numReviews);