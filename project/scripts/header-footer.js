// Header
// Applying a responsive hamburger effect to the existing navigation menu
const hamburger = document.querySelector('#menu');
const nav = document.querySelector('.navigation');
const h1 = document.querySelector('h1');

function menu() {
    hamburger.classList.toggle('show');
    nav.classList.toggle('show');
    h1.classList.toggle('show');
}

hamburger.addEventListener('click', menu);

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 740px)').matches) {
        h1.classList.remove('show');
    }
});

// Footer
// Getting the current year for the copyright year in the footer's first paragraph.
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Now getting the last modified date of the document in the second paragraph of the footer.
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;