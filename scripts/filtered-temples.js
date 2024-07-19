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

// Creating an array named "temples" which consists of temple objects
const temples = [
    // Adding my home temple first
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Addingd more temple objects below
    {
        templeName: "Asunción Paraguay",
        location: "Asunción, Paraguay",
        dedicated: "2002, May, 19",
        area: 11906,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/1-68dfd881f93cb86e99828aa547eac056189c55ff.jpeg"
    },
    {
        templeName: "Frankfurt Germany",
        location: "Frankfurt, Germany",
        dedicated: "1987, August, 28",
        area: 32895,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-temple-1-2278179.jpg"
    },
    {
        templeName: "Fukuoka Japan",
        location: "Fukuoka, Japan",
        dedicated: "2000, June, 11",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
    },
    {
        templeName: "Arequipa Peru",
        location: "Arequipa, Peru",
        dedicated: "2019, December, 15",
        area: 26969,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/1-55f6c59ce8f9c093a9c689067f8674335de544e2.jpeg"
    }
];

// Creating the temple card
createTempleCard(temples);

// Looping through the array and creating all the pieces that is required.
function createTempleCard(filteredTemples) {
    document.querySelector(".temple-card").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        // Populating all the elements.
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.style.aspectRatio = "5 / 3";
        img.setAttribute("loading", "lazy");

        // Appending the card with the information
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        // Appending the html existing element with the card
        document.querySelector(".temple-card").appendChild(card);
    });
}

// Using the main navigation menu items to filter and display the temples by:
// Old - temples built before 1900
// New - temples built after 2000
// Large - temples larger than 90000 square feet
// Small - temples smaller than 10000 square feet
// Home - displays all the temples stored in the array.

const oldTemplesLink = document.querySelector("#old");
oldTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => new Date(temple.dedicated) < new Date("1900")));
});

const newTemplesLink = document.querySelector("#new");
newTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => new Date(temple.dedicated) > new Date("2000")));
});

const largeTemplesLink = document.querySelector("#large");
largeTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => (temple.area) > ("90000")));
});

const smallTemplesLink = document.querySelector("#small");
smallTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => (temple.area) < ("10000")));
});

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});