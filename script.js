function onPageLoaded() {
    console.log("page loaded");
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".play-button").forEach(function (button) {
        button.addEventListener("click", function () {
            this.parentNode.querySelector("a").click();
        });
    });
});
const btn = card.querySelector(".perk-button");

btn.addEventListener("click", () => {
    card.querySelector(".perk-button").addEventListener("click", (e) => {
        e.stopPropagation();

        card.classList.toggle("open");
    });
});
btn.addEventListener("click", (event) => {
    event.stopPropagation();
});

document.addEventListener("click", () => {
    card.classList.remove("open");
});

const perkNames = ["Berzerk", "Sharp Edge", "Assassin", "Bullet Transfabricator", "Shield Piercer"];

const container = document.querySelector(".perk-container");

perkNames.forEach((name) => {
    const card = document.createElement("div");
    card.className = "perk-card";

    card.innerHTML = `
    <button class="perk-button">
      <img src="images/${name}.png" alt="${name}" class="perk-icon">
    </button>
    <div class="perk-content">
      <h3>${name}</h3>
      <p><strong>Location:</strong> TBD</p>
      <p>Lore goes here...</p>
    </div>
  `;

    card.querySelector(".perk-button").addEventListener("click", (e) => {
        e.stopPropagation();
        card.classList.toggle("open");
    });

    container.appendChild(card);
});

document.addEventListener("click", () => {
    document.querySelectorAll(".perk-card").forEach((card) => card.classList.remove("open"));
});
