const bg = document.getElementById("bg");
const generateBtn = document.getElementById("generate");
const themeBtn = document.getElementById("theme-toggle");

for (let i = 0; i < 30; i++) {
  const e = document.createElement("div");
  const isName = Math.random() < 0.2;
  e.className = "bg-element";
  e.textContent = isName ? generateName() : random(emojis);

  e.style.left = Math.random() * 100 + "%";
  e.style.fontSize = (isName ? 16 : 24 + Math.random() * 32) + "px";
  e.style.animationDuration = 15 + Math.random() * 20 + "s";
  e.style.animationDelay = -Math.random() * 20 + "s";

  bg.appendChild(e);
}
function explode() {
  for (let i = 0; i < 20; i++) {
    const e = document.createElement("div");

    e.className = "explode";
    e.textContent = random(emojis);

    const rect = document.getElementById("username").getBoundingClientRect();

    e.style.left = rect.left + rect.width / 2 + "px";
    e.style.top = rect.top + rect.height / 2 + "px";

    e.style.setProperty("--x", `${(Math.random() - 0.5) * 500}px`);
    e.style.setProperty("--y", `${-Math.random() * 400}px`);
    e.style.setProperty("--r", `${Math.random() * 720 - 360}deg`);

    document.body.appendChild(e);

    setTimeout(() => e.remove(), 1500);
  }
}

function updateThemeButton() {
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.theme = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  updateThemeButton();
}

if (localStorage.theme === "dark") {
  document.body.classList.add("dark");
}

updateThemeButton();
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function speak(text) {
  speechSynthesis.cancel();

  const msg = new SpeechSynthesisUtterance(text);
  msg.volume = Math.random() < 0.1 ? 0.7 : 1;
  msg.pitch = 0.8 + Math.random() * 0.8;
  msg.rate = 0.9 + Math.random() * 0.3;

  const voice = random(speechSynthesis.getVoices());

  msg.voice = voice;

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

function generateName() {
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
  return name;
}

function generate() {
  let name = generateName();

  document.getElementById("username").textContent = name;

  // 15% chance to speak
  if (Math.random() < 0.15) {
    const line =
      Math.random() < 0.5
        ? `${random(intros)}... ${name}.`
        : `${name}. ${random(roasts)}`;

    speak(line);
  }

  // 10% chance to explode
  if (Math.random() < 0.1) {
    explode();
  }
}

generate();
