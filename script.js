const businesses = [
  { name: "Abernathy Defence & Aerospace", category: "Aerospace", location: "UPA", logo: "ADA.png" },
  { name: "Aeronautico Torricelli", category: "Aerospace", location: "Helvery", logo: "torricelli.png" },
  { name: "Baltin Aerospace", category: "Aerospace", location: "Baltin", logo: "BA.png" },
  { name: "Bos Industries", category: "Arms", location: "ARC", logo: "bos.png" }
  // Add more businesses here...
];
function populateBusinessCards() {
  const resultsDiv = document.querySelector(".resultsDiv");

  businesses.forEach(business => {
    const card = document.createElement("div");
    card.className = "business-card";
    card.innerHTML = `
      <img src="${business.logo}" alt="Company Logo">
      <h2>${business.name}</h2>
      <p>Category: ${business.category}</p>
      <p>Location: ${business.location}</p>
    `;
    resultsDiv.appendChild(card);
  });
}
function createBusinessCard(business) {
    const card = document.createElement("div");
    card.className = "business-card";

    if (business.logo) {
        const logoImg = document.createElement("img");
        logoImg.src = business.logo;
        logoImg.alt = business.name + " Logo";
        card.appendChild(logoImg);
    }

    const nameHeading = document.createElement("h2");
    nameHeading.textContent = business.name;
    card.appendChild(nameHeading);

    const categoryParagraph = document.createElement("p");
    categoryParagraph.textContent = "Category: " + business.category;
    card.appendChild(categoryParagraph);

    const locationParagraph = document.createElement("p");
    locationParagraph.textContent = "Location: " + business.location;
    card.appendChild(locationParagraph);

    return card;
}

function searchBusinesses() {
  const categoryInput = document.getElementById("search-category").value.toLowerCase();
  const locationInput = document.getElementById("search-location").value.toLowerCase();
  const nameInput = document.getElementById("search-name").value.toLowerCase();

  const businessCards = document.querySelectorAll(".business-card");

  businessCards.forEach(card => {
    const name = card.querySelector("h2").textContent.toLowerCase();
    const category = card.querySelector("p:nth-child(3)").textContent.toLowerCase().replace("category: ", "");
    const location = card.querySelector("p:nth-child(4)").textContent.toLowerCase().replace("location: ", "");

    const shouldDisplay = (
      (name.includes(nameInput) || nameInput === "") &&
      (category.includes(categoryInput) || categoryInput === "") &&
      (location.includes(locationInput) || locationInput === "")
    );

    card.style.display = shouldDisplay ? "block" : "none";
  });
}


document.addEventListener("DOMContentLoaded", () => {
  // Call populateBusinessCards to display all companies at the start
  populateBusinessCards();
});