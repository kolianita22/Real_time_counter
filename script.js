const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const maxLength = 50;

textInput.addEventListener("input", () => {
  let text = textInput.value;
  if (text.length > maxLength) {
    text = text.slice(0, maxLength);
    textInput.value = text;
  }

  const count = text.length;
  charCount.textContent = `Character Count: ${count}/50`;

  if (count === maxLength) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "";
  }
});
