const emojis = ["💀", "🗿", "🤡", "🐟", "🍌", "🥒", "🦆", "🧌", "🧃", "🧇"];

const bg = document.getElementById("bg");
const generateBtn = document.getElementById("generate");

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

const roasts = [
  "This is terrible.",
  "Please don't use this.",
  "Absolutely awful.",
  "Peak 2016 energy.",
  "I have made a mistake.",
];
const intros = [
  "Your awful username is",
  "Congratulations. You got",
  "You should never use",
  "Today's disappointment is",
  "I generated",
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function speak(text) {
  speechSynthesis.cancel();

  const msg = new SpeechSynthesisUtterance(text);
  msg.volume = Math.random() < 0.1 ? 0.4 : 1;
  msg.pitch = 0.8 + Math.random() * 0.8;
  msg.rate = 0.9 + Math.random() * 0.3;

  // pick an English voice if available
  const voice = speechSynthesis
    .getVoices()
    .find((v) => v.lang.startsWith("en"));

  if (voice) msg.voice = voice;

  msg.onstart = () => {
    generateBtn.disabled = true;
    generateBtn.textContent = "speaking...";
  };

  msg.onend = () => {
    generateBtn.disabled = false;
    generateBtn.textContent = "generate";
  };

  msg.onerror = () => {
    generateBtn.disabled = false;
    generateBtn.textContent = "generate";
  };

  speechSynthesis.speak(msg);
}

function generate() {
  let name = random(start) + random(middle) + random(end);

  if (Math.random() < 0.5) {
    name += Math.floor(Math.random() * 10000);
  }

  const style = Math.random();

  if (style < 0.2) {
    name = `xX_${name}_Xx`;
  } else if (style < 0.4) {
    name = `Xx_${name}_xX`;
  } else if (style < 0.5) {
    name = `_${name}_`;
  }

  document.getElementById("username").textContent = name;

  // 25% chance to speak
  if (Math.random() < 0.25) {
    const line =
      Math.random() < 0.5
        ? `${random(intros)}... ${name}.`
        : `${name}. ${random(roasts)}`;

    speak(line);
  }
}

generate();
