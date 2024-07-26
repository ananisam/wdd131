// Creating an array named "serives" with its objects
const services = [
    {
        serviceName: "Professional Typing Services",
        price: "GH¢3.00 per Page",
        details: "Whether you need a single paragraph, a book, a brochure, a university thesis, or a program for your upcoming event, our friendly and highly skilled team is here to help you with all your typing needs. At Gudnex Systems, we deliver the best quality and yet affordable typing, design and printing services for a wide variety of documents, such as: cover letters, posters, project works, brochures, program leaflets, résumé/curriculum vitae, business letters, essays, school assignments, etc. We can work from voice to handwritten notes and deliver the typed work in your preferred format and layout, such as the specific line spacing, font style, font size, PDF format, Docx format, and many more.",
        imageSrc: "images/typing.jpg"
    },
    {
        serviceName: "Photocopying",
        price: "GH¢0.50 per Page",
        details: "We can photocopy up to A3 size on 80gm paper. We can also enlarge and reduce the copies as preferred. Our copiers are duplex and hence can produce double-sided copies. Our digital photocopying service is available for a single or several copies in black and white, greyscale or full color.",
        imageSrc: "images/photocopy.jpg"
    },
    {
        serviceName: "Document Scanning",
        price: "GH¢1.00 per Page",
        details: "Our state-of-the-art equipment will help you transform your filing cabinets and paper files into stunning digital images or a text-searchable library of digital files. You will not only save money by converting your paper documents into digital formats, you also allow yourself or your employees with more time to focus on your core duties. Contact us now to receive a free quote.",
        imageSrc: "images/scanning.jpg"
    },
    {
        serviceName: "Document Binding",
        price: "GH¢5.00 per Booklet",
        details: "Starting from a simple stapling to high quality comb binding, velo binding, ring binding or hardbacks, we got you covered. We can bind different types of documents, including books, reports, training manuals, brochures, proposals, notebooks, dissertations, project works & more.",
        imageSrc: "images/binding.jpg"
    },
    {
        serviceName: "Document Lamination",
        price: "GH¢6.00 per Copy",
        details: "We laminate documents of different sizes, from letter-sized to A3 sizes, in matt or glossy. Improve the durability of your printed documents by laminating them. Laminate your documents with us today.",
        imageSrc: "images/lamination.jpg"
    },
    {
        serviceName: "Photo Printing",
        price: "GH¢10.00 per Page",
        details: "We can print photos from your digital camera or smartphone. Have photos printed to high resolution to keep the memories you cherished and enjoyed.",
        imageSrc: "images/photo-printing.jpg"
    }
];

// Creating the service card
createTempleCard(services);

// Looping through the array and creating all the pieces that is required.
function createTempleCard(displayedServices) {
    document.querySelector(".services").innerHTML = "";
    displayedServices.forEach(service => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let price = document.createElement("p");
        let details = document.createElement("p");
        let img = document.createElement("img");

        // Populating all the elements.
        name.textContent = service.serviceName;
        price.innerHTML = `<span class="label">Price:</span> ${service.price}`;
        details.innerHTML = `${service.details}`;
        img.setAttribute("src", service.imageSrc);
        img.setAttribute("alt", `${service.serviceName} picture`);
        img.style.aspectRatio = "5 / 3";
        img.setAttribute("loading", "lazy");

        // Appending the card with the information
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(details);
        card.appendChild(img);

        // Appending the html existing element with the card
        document.querySelector(".services").appendChild(card);
    });
}