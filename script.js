const emojis = ["💀", "🗿", "🤡", "🐟", "🍌", "🥒", "🦆", "🧌", "🧃", "🧇"];

const bg = document.getElementById("bg");

for (let i = 0; i < 30; i++) {
  const e = document.createElement("div");

  e.className = "bg-emoji";
  e.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  e.style.left = Math.random() * 100 + "%";
  e.style.fontSize = 24 + Math.random() * 32 + "px";
  e.style.animationDuration = 10 + Math.random() * 20 + "s";
  e.style.animationDelay = -Math.random() * 20 + "s";

  bg.appendChild(e);
}

const start = [
  "xx",
  "dark",
  "epic",
  "pro",
  "real",
  "official",
  "crazy",
  "mega",
  "cr7",
  "ultra",
  "sigma",
  "skibidi",
  "toilet",
  "lord",
  "feet",
  "baby",
  "sus",
  "discord",
];

const middle = [
  "wolf",
  "pickle",
  "gamer",
  "banana",
  "toaster",
  "dragon",
  "ninja",
  "taxes",
  "fish",
  "goat",
  "npc",
  "grandma",
  "microwave",
  "chair",
  "dog",
  "lezi",
];

const end = [
  "123",
  "69",
  "420",
  "9000",
  "real",
  "yt",
  "official",
  "pro",
  "lover",
  "xX",
  "xd",
  "sigma",
  "2009",
  "lol",
  "fr",
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generate() {
  let name = random(start) + random(middle) + random(end);

  if (Math.random() < 0.5) {
    name += Math.floor(Math.random() * 9999);
  }

  if (Math.random() < 0.3) {
    name = "xX_" + name + "_Xx";
  } else if (Math.random() < 0.3) {
    name = "Xx_" + name + "_xX";
  }

  document.getElementById("username").textContent = name;
}

generate();
