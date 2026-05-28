function onPageLoaded() {
    console.log("page loaded");
}

document.addEventListener("DOMContentLoaded", function () {
    // Listen for clicks on elements with the class 'play-button'
    document.querySelectorAll(".play-button").forEach(function (button) {
        button.addEventListener("click", function () {
            // When a play button is clicked, simulate a click on the <a> tag within the same .video-container
            this.parentNode.querySelector("a").click();
        });
    });
});
const btn = card.querySelector(".perk-button");

btn.addEventListener("click", () => {
    // YOUR CODE HERE:
    // How do you "toggle" the class 'open' on the 'card' element?
    // Hint: in JS, it looks like element.classList.toggle('className');
});

btn.addEventListener("click", (event) => {
    // 1. Stop the click from bubbling up (useful for "clicking off" later)
    event.stopPropagation();

    // 2. YOUR CODE HERE:
    // We want to add/remove the 'open' class on the 'card' element.
    // Hint: card.classList._____('open');
});

// This part handles "clicking off" to close the info
document.addEventListener("click", () => {
    card.classList.remove("open");
});

const perkNames = [
    "Berzerk",
    "Sharp Edge",
    "Assassin",
    "Bullet Transfabricator",
    "Shield Piercer",
    "High Density Bullets",
    "Executioner",
    "Deathblow",
    "Life Absorb",
    "Shield Absorb",
    "Shield Converter",
    "Shield Overdrive",
    "Tough Skin",
    "Stand Firm",
    "Shield Flasks",
    "Harvester",
    "Shield Drain",
    "Rebirth",
    "Steel Spine",
    "Blind Luck",
    "Shard Collecter",
    "Monstrous Lure",
    "Golden Charm",
    "Health Charm",
    "Magnet",
    "Nemesis",
    "Energy Absorb",
    "Gunslinger",
    "Eradicator"
];

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
        e.stopPropagation(); // Prevents the click from reaching the 'body'
        card.classList.toggle("open");
    });

    container.appendChild(card);
});

document.addEventListener("click", () => {
    document.querySelectorAll(".perk-card").forEach((card) => card.classList.remove("open"));
});
