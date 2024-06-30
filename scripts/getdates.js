// Getting the current year for the copyright year in the footer's first paragraph.
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Now getting the last modified date of the document in the second paragraph of the footer.
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;