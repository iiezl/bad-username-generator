const fonts = [
  "Unkempt",
  "Barrio",
  "Bungee",
  "Comic Neue",
  "Love Ya Like A Sister",
  "Peralta",
  "Sue Ellen Francisco",
  "Boogaloo",
  "Slackey",
  "Gloria Hallelujah",
];
let currentFont =
  (new Date().getHours() + new Date().getDay() * 3) % fonts.length;
const loadedFonts = new Set();

function setFont(index) {
  currentFont = (index + fonts.length) % fonts.length;

  const font = fonts[currentFont];

  if (!loadedFonts.has(font)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, "+")}&display=swap`;

    document.head.appendChild(link);
    loadedFonts.add(font);

    link.onload = () => {
      document.body.style.fontFamily = `"${font}", sans-serif`;
    };
  } else {
    document.body.style.fontFamily = `"${font}", sans-serif`;
  }

  console.log(`font: ${font}`);
}

setFont(currentFont);

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() !== "q") return;

  setFont(currentFont + 1);
});
